Vue.component('purchase-orders-submit', {
    el: function () {
        return '#purchase-orders-submit';
    },
    data: function () {
        return {
            step: 1,
            ajaxReady: true,
            ajaxObject: {},
            response: {},
            projects: [],
            projectID: '',
            purchaseRequests: [],
            sort: 'number',
            order: 'asc',
            urgent: '',
            searchTerm: '',
            lineItems: [],
            vendorID: ''
        };
    },
    props: ['user'],
    computed: {
        hasPurchaseRequests: function() {
            return ! _.isEmpty(this.purchaseRequests);
        },
        allPurchaseRequestsChecked: function() {
            var purchaseRequestIDs = _.map(this.purchaseRequests, function (request) {
                return request.id
            });
            var lineItemIDs = _.map(this.lineItems, function (item) {
                return item.id
            });
            return _.intersection(lineItemIDs, purchaseRequestIDs).length === purchaseRequestIDs.length;
        },
        hasLineItems: function(){
            return this.lineItems.length >0;
        }
    },
    methods: {
        fetchPurchaseRequests: function (page) {
            var self = this;
            page = page || 1;

            var url = '/api/purchase_requests?' +
                'state=open' +
                '&quantity=1+' +
                '&project_id=' + self.projectID +
                '&sort=' + self.sort +
                '&order=' + self.order +
                '&per_page=8' +
                '&search=' + self.searchTerm;

            if(page) url += '&page=' + page;
            
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            self.ajaxObject = $.ajax({
                url: url,
                method: 'GET',
                success: function (response) {
                    // Update data
                    self.response = response;

                    self.purchaseRequests = _.omit(response.data, 'query_parameters');

                    // Pull flags from response (better than parsing url)
                    self.sort = response.data.query_parameters.sort;
                    self.order = response.data.query_parameters.order;
                    self.urgent = response.data.query_parameters.urgent;

                    self.ajaxReady = true;

                    // self.$nextTick(function() {
                    //     self.finishLoading = true;
                    // })
                    // TODO ::: Add a loader for each request

                },
                error: function (res, status, req) {
                    console.log(status);
                    self.ajaxReady = true;
                }
            });
        },
        changeSort: function (sort) {
            if (this.sort === sort) {
                this.order = (this.order === 'asc') ? 'desc' : 'asc';
                this.fetchPurchaseRequests();
            } else {
                this.sort = sort;
                this.order = 'asc';
                this.fetchPurchaseRequests();
            }
        },
        searchPurchaseRequests: function() {
            var self = this;

            if (self.ajaxObject && self.ajaxObject.readyState != 4) self.ajaxObject.abort();
            self.fetchPurchaseRequests();
        },
        clearSearch: function() {
            this.searchTerm = '';
            this.searchPurchaseRequests();
        },
        selectPR: function(purchaseRequest) {
            this.alreadySelectedPR(purchaseRequest) ? this.lineItems = _.reject(this.lineItems, purchaseRequest) : this.lineItems.push(purchaseRequest);
        },
        alreadySelectedPR: function(purchaseRequest) {
            return _.find(this.lineItems, function(pr) {
                return pr.id === purchaseRequest.id;
            });
        },
        selectAllPR: function() {
            var self = this;
            if(self.allPurchaseRequestsChecked) {
                _.forEach(self.purchaseRequests, function (request) {
                    self.lineItems = _.reject(self.lineItems, request);
                });
            } else {
                _.forEach(self.purchaseRequests, function (request) {
                    if (! self.alreadySelectedPR(request)) self.lineItems.push(request);
                });
            }
        },
        showSinglePR: function(purchaseRequest) {
            this.$broadcast('modal-show-single-pr', purchaseRequest);   
        },
        removeLineItem: function(lineItem) {
            this.lineItems = _.reject(this.lineItems, lineItem);
        },
        clearAllLineItems: function() {
            this.lineItems = [];
        },
        goStep: function(step) {
            this.step = step;
        }
    },
    events: {
        'go-to-page': function (page) {
            this.fetchPurchaseRequests(page);
        }
    },
    ready: function () {
        this.$watch('projectID', function (val) {
            if (! val) return;
            this.fetchPurchaseRequests();
        });
    }
});
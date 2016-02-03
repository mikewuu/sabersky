new Vue({
    name: 'addLineItem',
    el: '#add-line-item',
    data: {
        purchaseRequests: [],
        selectedPurchaseRequest: '',
        quantity: '',
        price: '',
        payable: '',
        delivery: '',
        canAjax: true,
        field: '',
        order: '',
        urgent: ''
    },
    ready: function() {
        var self = this;
        $.ajax({
            method: 'GET',
            url: '/purchase_requests/available',
            success: function(data) {
                self.purchaseRequests = data;
            }
        });
    },
    methods: {
        selectPurchaseRequest: function($selected){
            this.selectedPurchaseRequest = $selected;
        },
        removeSelectedPurchaseRequest: function() {
            this.selectedPurchaseRequest = '';
            this.quantity = '';
            this.price = '';
            this.payable = '';
            this.delivery = '';
        },
        addLineItem: function() {
            var self = this;
            if(self.canAjax) {
                self.canAjax = false;
                $.ajax({
                    url: '/purchase_orders/add_line_item',
                    method: 'POST',
                    data: {
                        purchase_request_id: self.selectedPurchaseRequest.id,
                        quantity: self.quantity,
                        price: self.price,
                        payable: moment(self.payable, "DD/MM/YYYY").format("YYYY-MM-DD H:mm:ss"),
                        delivery: moment(self.delivery, "DD/MM/YYYY").format("YYYY-MM-DD H:mm:ss")
                    },
                    success: function (data) {
                        window.location='/purchase_orders/submit';
                    },
                    error: function (res, status, error) {
                        console.log(error);
                        self.canAjax = true;
                    }
                });
            }
        },
        changeSort: function($newField) {
            if(this.field == $newField) {
                this.order = (this.order == '') ? -1 : '';
            } else {
                this.field = $newField;
                this.order = ''
            }
        },
        toggleUrgent: function() {
            this.urgent = (this.urgent) ? '' : 1;
        }
    },
    computed: {
        subtotal: function() {
            return this.quantity * this.price;
        },
        validQuantity: function() {
            return (this.selectedPurchaseRequest.quantity >= this.quantity && this.quantity > 0);
        },
        canAddPurchaseRequest: function() {
            return (!! this.selectedPurchaseRequest && !! this.quantity & !! this.price && !! this.payable && !! this.delivery && this.validQuantity)
        }
    }
});



$(document).ready(function () {
    moment.locale('id'); // 'en'
    $('.datepicker').datepicker({
        format: "dd/mm/yyyy",
        startDate: 'today',
        language: 'id'
    });
});

new Vue({
    el: '#purchase-orders-submit',
    data: {
        vendorType: '',
        vendor_id: 'Choose an existing vendor',
        name: '',
        phone: '',
        address: '',
        bank_account_name: '',
        bank_account_number: '',
        bank_name: '',
        canAjax: true
    },
    computed: {
        readyStep3: function() {
            return (this.vendor_id !== 'Choose an existing vendor' || this.name.length > 0 && this.phone.length > 0 && this.address.length > 0 && this.bank_account_name.length > 0 && this.bank_account_number.length > 0 && this.bank_name.length > 0);
        }
    },
    methods: {
        selectVendor: function (type) {
            this.vendor_id = 'Choose an existing vendor';
            this.name = '';
            this.phone = '';
            this.address = '';
            this.bank_account_name = '';
            this.bank_account_number = '';
            this.bank_name = '';
            this.vendorType = type;
        },
        removeLineItem: function(lineItemId) {
            console.log('hehehe');
            var self = this;
            if(self.canAjax) {
                self.canAjax = false;
                $.ajax({
                    url: '/purchase_orders/remove_line_item/' + lineItemId,
                    method: 'POST',
                    data: {},
                    success: function (data) {
                        console.log('success');4
                        window.location='/purchase_orders/submit';
                    },
                    error: function (res, status, error) {
                        console.log(error);
                        self.canAjax = true;
                    }
                });
            }
        }
    }
});

new Vue({
    name: 'allPurchaseOrders',
    el: '#purchase-orders-all',
    data: {
        purchaseOrders: []
    },
    ready: function() {
        var self = this;
        $.ajax({
            url: '/api/purchase_orders',
            method: 'GET',
            success: function (data) {
                self.purchaseOrders = data;
            },
            error: function(data) {
                console.log(data);
            }
        });

    }
});
$('.table-purchase-requests tbody tr').click(function () {
    window.document.location = $(this).data("href");
});

Vue.filter('date', function (value) {
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD/MM/YYYY');
    }
    return value;
});

Vue.filter('easyDate', function (value) {
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD MMMM YYYY');
    }
    return value;
});

Vue.filter('diffHuman', function (value) {
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").fromNow();
    }
    return value;
});

Vue.filter('numberFormat', function (val) {
    //Seperates the components of the number
    var n = val.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(".");
});


Vue.filter('numberModel', {
    read: function (val) {
        //Seperates the components of the number
        var n = val.toString().split(".");
        //Comma-fies the first part
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    },
    write: function (val, oldVal) {
        return val;
    }
});
//# sourceMappingURL=app.js.map
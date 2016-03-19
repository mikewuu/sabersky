Vue.component('purchase-orders-submit', {
    el: function() {
        return '#purchase-orders-submit';
    },
    data: function() {
        return {
            vendorType: '',
            vendor_id: 'Choose an existing vendor',
            name: '',
            phone: '',
            address: '',
            bank_account_name: '',
            bank_account_number: '',
            bank_name: '',
            canAjax: true
        };
    },
    computed: {
        readyStep3: function () {
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
        removeLineItem: function (lineItemId) {
            console.log('hehehe');
            var self = this;
            if (self.canAjax) {
                self.canAjax = false;
                $.ajax({
                    url: '/purchase_orders/remove_line_item/' + lineItemId,
                    method: 'POST',
                    data: {},
                    success: function (data) {
                        console.log('success');
                        window.location = '/purchase_orders/submit';
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
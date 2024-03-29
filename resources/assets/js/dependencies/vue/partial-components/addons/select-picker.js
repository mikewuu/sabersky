Vue.component('select-picker', {
    template: '<select v-model="name" class="themed-select" @change="callChangeFunction">' +
    '<option v-if="placeholder" value="" selected disabled>{{ placeholder }}</option>' +
    '<option v-if="option && option.value" value="{{ option.value }}" v-for="option in options">{{ option.label }}</option>' +
    '</select>',
    name: 'selectpicker',
    props: ['options', 'name', 'function', 'placeholder'],
    methods: {
        callChangeFunction: function () {
            if (this.function && typeof this.function === 'function') {
                this.function();
            }
        }
    },
    ready: function () {

        // Init our picker
        $(this.$el).selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        });

        this.$watch('name', function (val) {
            $(this.$el).val(val);
            $(this.$el).selectpicker('render');
        });

        // Update whenever options change
        this.$watch('options', function (val) {
            // Refresh our picker UI
            $(this.$el).selectpicker('refresh');
            // Update manually because v-model won't catch
            this.name = $(this.$el).selectpicker('val');
        }.bind(this))
    }
});
Vue.directive('datepicker', function() {
    $(this.el).datepicker({
        format: "dd/mm/yyyy",
        startDate: 'today',
        language: 'en' // TODO ::: Change according to client Lang
    });
});
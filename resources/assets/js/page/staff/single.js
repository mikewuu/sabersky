Vue.component('staff-single', {
    name: 'staffSingle',
    el: function() {
        return '#staff-single'
    },
    data: function() {
        return {
            roles: [],
            changeButton: false,
            userToDelete: {},
            ajaxReady: true
        };
    },
    props: [],
    computed: {

    },
    methods: {
        showChangeButton: function() {
            this.changeButton = true;
        },
        confirmDelete: function(user) {
            this.userToDelete = user;
            this.$broadcast('new-modal', {
                title: 'Confirm Permanently Delete ' + user.name,
                body: 'Deleting a User is immediate and permanent. All data regarding the User will automatically be removed. This action is irreversible. Any pending actions may become incompletable.',
                buttonText: 'Delete ' + user.name + ' and all corresponding data',
                buttonClass: 'btn-solid-red',
                callbackEventName: 'delete-user'
            });
        }
    },
    events: {
        'delete-user': function() {
            var self = this;
            if(!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: '/staff/' + self.userToDelete.id,
                method: 'DELETE',
                success: function(data) {
                   // success
                   self.ajaxReady = true;
                    window.location.href = '/staff';
                },
                error: function(response) {
                    self.ajaxReady = true;
                }
            });
        }
    },
    ready: function() {
        var self = this;
    }
});
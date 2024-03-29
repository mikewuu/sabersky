Vue.component('system-status', {
    name: 'SystemStatus',
    el: function() {
        return '#system-status'
    },
    data: function() {
        return {
            pusher: '',
            pusherChannel: ''
        };
    },
    props: ['company-count'],
    computed: {

    },
    methods: {

    },
    events: {

    },
    ready: function() {
        var self = this;

        this.pusher = new Pusher($('meta[name="pusher-key"]').attr('content'), {
            cluster: 'ap1',
            encrypted: true
        });

        this.pusherChannel = this.pusher.subscribe('system');

        this.pusherChannel.bind('App\\Events\\NewCompanySignedUp', function(message) {
            self.companyCount ++;
        });
        
    }
}); 
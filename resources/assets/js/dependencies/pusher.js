
// // listen to pusher events
// var pusher = new Pusher($('meta[name="pusher-key"]').attr('content'), {
//     cluster: 'ap1',
//     encrypted: true
// });
// var pusherChannel = pusher.subscribe('user.' + $('meta[name="user-id"]').attr('content'));


// listen to pusher events
var pusher = new Pusher($('meta[name="pusher-key"]').attr('content'), {
    cluster: 'ap1',
    authEndpoint: '/pusher/auth',
    encrypted: false,
    auth: {
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    }
});

var userId = $('meta[name="user-id"]').attr('content');
var pusherChannel;
if(userId) {
     pusherChannel = pusher.subscribe('private-user.' + userId );
}

$(document).ready(function () {
    $('#searchUser').on('keyup', function(e) {
        let username = e.target.value;

        console.log(username)

        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET
            }
        }).done(function (user) {
            console.log(user)
        });
    });
});

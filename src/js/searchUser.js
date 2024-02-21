$(document).ready(function(){
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET
            }
        }).done(function(user){
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    sort: 'created: asc',
                    per_page: 25
                }
            }).done(function(repos){
                $.each(repos, function(index, repo){
                    $('#repos').append(`
                        <div class="card">
                            <div class="row">
                                <div class="col-md-11">
                                    <strong>
                                        ${repo.name}
                                    </strong>
                                    : ${repo.description}
                                </div>
                                <div class="col-md-1">
                                    <a href="${repo.html_url}" target="_blank" class="btn btn-dark">
                                        Repo
                                    </a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            });
            $('#profile').html(`
                <div class="card border-primary mb-3" style="max-width: 100rem;">
                    <div class="card-header">
                        <h3>${user.name}</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img class="img-thumbnail avatar" src="${user.avatar_url}" alt="avatar">
                                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">
                                    View Profile
                                </a>
                            </div>
                            <div class="col-md-9">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Company: ${user.company}
                                    </li>
                                    <li class="list-group-item">
                                        Website/blog: 
                                        <a href="${user.blog}" target="_blank">
                                            ${user.blog}
                                        </a>
                                    </li>
                                    <li class="list-group-item">
                                        Location: ${user.location}
                                    </li>
                                    <li class="list-group-item">
                                        Member Since: ${user.created_at}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="page-header">
                    Latest Repos
                </h3>
                <div id="repos"></div>
            `);
        });
    });
});

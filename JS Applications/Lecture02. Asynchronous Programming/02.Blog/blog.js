function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_BJUGQaG5M';
    const username = 'katerina';
    const password = 'ka';

    $('#btnLoadPosts').on('click', loadPosts);
    $('#btnViewPost').on('click', viewPosts);

    function loadPosts() {
        $.ajax({
            url: url + '/posts',
            headers: {
                Authorization: "Basic " + btoa(`${username}:${password}`)
            },
            method: 'GET',
            success: createOption,
            error: displayError
        });
    }

    function viewPosts() {
        let postId = $('#posts option:selected').val();

        if(!postId){
            return;
        }

        let requestPost = $.ajax({
            url: url + `/posts/${postId}`,
            headers: {
                Authorization: "Basic " + btoa(`${username}:${password}`)
            },
            method: 'GET'
        });

        let requestComments =  $.ajax({
            url: url + `/comments/?query={"postId":"${postId}"}`,
            headers: {
                Authorization: "Basic " + btoa(`${username}:${password}`)
            },
            method: 'GET',
        });

        Promise.all([requestPost, requestComments])
            .then(displayPostAndComments)
            .catch(displayError);
    }

    function displayPostAndComments([post, comments]) {
        $('#post-title').empty();
        $('#post-body').empty();
        $('#post-title').text(post.title);
        $('#post-body').text(post.body);
        $('#post-comments').empty();
        for (let comm of comments) {
           let li = $('<li>').text(comm.text);
           $('#post-comments').append(li);
        }
    }

    function createOption(posts) {
        $('#posts').empty();

        for (let post of posts) {
            let option = $('<option>');
            option.text(post.title);
            option.val(post._id);
            $('#posts').append(option);
        }
    }
    
    function displayError() {
        $(document.body).prepend($('<div>').text('ERROR'));
    }
}
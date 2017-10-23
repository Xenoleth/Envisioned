const run = (router) => {
    $('.submit-form').on('click', () => {
        const post = {
            user: sessionStorage.getItem('userName'),
            title: $('#post-title').val(),
            image: $('#post-image').val(),
            content: $('#post-content').val()            
        };

        console.log(post);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/api/users/postarticle',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(post),                
            complete: (res) => {                
                console.log(res);

                router.navigate('/articles');
            }
        });
        // TODO: load all articles from database
    });
};

export { run };
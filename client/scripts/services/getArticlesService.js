const all = () => {
    return new Promise ((res, rej) => {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/articles/all',              
            complete: (response) => {                
                res(response);
            }
        });
    });
};

const single = (postId) => {
    return new Promise ((res, rej) => {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/articles/post?postId=' + postId,              
            complete: (response) => {                
                res(response);
            }
        });
    });
}

export { all, single };
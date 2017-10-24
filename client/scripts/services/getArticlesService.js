const run = () => {
    return new Promise ((res, rej) => {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/api/articles/all',              
            complete: (response) => {                
                res(response);
            }
        });
    });
}

export { run };
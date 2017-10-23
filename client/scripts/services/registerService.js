const run = (router) => {
    $('.submit-form').on('click', (e) => {
        e.preventDefault();

        const credentials = {
            username: $('#username').val(),
            password: $('#password').val(),
            confirm: $('#confirm').val()
        };

        if(credentials[password] === credentials[confirm]) {
            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/api/auth/register',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(credentials),                
                complete: (res) => {
                    router.navigate('/login');
                }
            });
        } else {
            // TODO: handle error
            console.log('Passwords do not match');
        }
    });
};

export { run };
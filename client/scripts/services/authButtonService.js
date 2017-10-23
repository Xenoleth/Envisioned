$(window).on('load', () => {
    const loginButton = $('.login-button');
    const logoutButton = $('.logout-button');
    const registerButton = $('.register-button');
    const postButton = $('.post-button');

    if(sessionStorage.getItem('userId')) {
        loginButton.hide();
        registerButton.hide();
        logoutButton.show();
        postButton.show();
    } else {
        loginButton.show();
        registerButton.show();
        logoutButton.hide();
        postButton.hide();
    }
});

$(window).on('hashchange', () => {
    const loginButton = $('.login-button');
    const logoutButton = $('.logout-button');
    const registerButton = $('.register-button');
    const postButton = $('.post-button');

    if(sessionStorage.getItem('userId')) {
        loginButton.hide();
        registerButton.hide();
        logoutButton.show();
        postButton.show();
    } else {
        loginButton.show();
        registerButton.show();
        logoutButton.hide();
        postButton.hide();
    }
});

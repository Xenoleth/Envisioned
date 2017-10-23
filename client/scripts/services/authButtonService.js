$(window).on('load', () => {
    const loginButton = $('.login-button');
    const logoutButton = $('.logout-button');
    const registerButton = $('.register-button');

    if(sessionStorage.getItem('userId')) {
        loginButton.hide();
        registerButton.hide();
        logoutButton.show();
    } else {
        loginButton.show();
        registerButton.show();
        logoutButton.hide();
    }
});

$(window).on('hashchange', () => {
    const loginButton = $('.login-button');
    const logoutButton = $('.logout-button');
    const registerButton = $('.register-button');

    if(sessionStorage.getItem('userId')) {
        loginButton.hide();
        registerButton.hide();
        logoutButton.show();
    } else {
        loginButton.show();
        registerButton.show();
        logoutButton.hide();
    }
});

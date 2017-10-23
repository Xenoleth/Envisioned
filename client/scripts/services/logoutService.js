$('.logout-button').on('click', () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');

    location.reload();
});

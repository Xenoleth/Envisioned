$('.logout-button').on('click', () => {
    sessionStorage.removeItem('userId');

    location.reload();
});

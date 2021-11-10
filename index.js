window.addEventListener('load', function (event) {
    // window loaded

    var uc_user_interaction = localStorage.getItem('uc_user_interaction');
    if (!uc_user_interaction) {
        var uc_button_container = document.getElementById('usercentrics-root');
        uc_button_container.style.display = 'block';
    } else {
        var uc_button_container = document.getElementById('usercentrics-root');
        uc_button_container.style.display = 'none';
    }
});
window.addEventListener('UC_UI_VIEW_CHANGED', function (event) {
    if (event.detail.view == 'PRIVACY_BUTTON') {
        var uc_button_container = document.getElementById('usercentrics-root');
        uc_button_container.style.display = 'none';
    }
});
window.addEventListener('click', function (event) {
    if(event.target.id === 'manage-cookie-consent') {
        var uc_button_container = document.getElementById('usercentrics-root');
        UC_UI.showFirstLayer();
        uc_button_container.style.display = 'block';
    };
});

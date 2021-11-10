window.addEventListener('UC_UI_IS_INTIALIZED', function (event) {
   
    // initialized
    console.log('UC initialized');
    // check status 
    var uc_user_interaction = localStorage.getItem('uc_user_interaction');
    console.log('interaction status: ' + uc_user_interaction);
    
    var uc_button_container = document.getElementById('usercentrics-root');
    console.log('hide the button…');
    uc_button_container.style.display = 'none';
    if (!uc_user_interaction) {
        console.log('show the button…');
        uc_button_container.style.display = 'block';
    }
});
window.addEventListener('UC_UI_VIEW_CHANGED', function (event) {
    console.log('Current view is: ' + event.detail.view);
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

/*disableButtonsWhenPopupIsActive('.rock-paper-scissors-project-button', '#popup-rps-game', '#RPS-take-me-backBTN');

//if pop-up is active, disable buttons
function disableButtonsWhenPopupIsActive(_button, _popUp, _buttonExit) {
    //assign the object to a variable
    var button = document.querySelector(_button);
    var popUp = document.querySelector(_popUp);
    var buttonExit = document.querySelector(_buttonExit);
    //check if mouse will hover
    popUp.addEventListener('mouseover', function() {
        button.classList.add('hidden');
    });
    //if exit from popup, the button will become active again
    buttonExit.addEventListener('click', function () {
        button.classList.remove('hidden');
    });
    
    console.log(button + popUp);
    //check when button is clicked
}
*/

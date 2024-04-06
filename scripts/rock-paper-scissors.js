const Phase = {
    ActivePhase: -1,

    Intro: -1, //greetings
    EnemysAnimationTime: 0, //time for the animation to play, quickly moves to the next phase
    Fight: 1, //you have 5 seconds to make a decision
    Resolve: 2
}

const Status = {
    ofPlayersFigure: null,
    ofEnemysFigure: null,
}

let counterFive = 5;
let animationInterval = null;

let sampleText = "Aktualna faza: "+ Phase.ActivePhase;
let textBox = document.getElementById('RPS-textBox').textContent = sampleText;
let mainButton = document.getElementById('RPS-button1');

function updateElement (HTMLElement, content) {
    HTMLElement.textContent = content;
}

//press button to start battle (phase Intro -> EnemysAnimationTime)
function operatingButton () {
    document.getElementById('RPS-button1').addEventListener("click", function() {
        //change phase
        Phase.ActivePhase = Phase.EnemysAnimationTime; 
        //update the textbox
        updateElement(document.getElementById('RPS-textBox'), "Current phase "+ Phase.ActivePhase);
        //hide the button
        toggleVisibility(document.getElementById('RPS-button1'), 'hide');
        //DEBUG - change the apparition of the charBox
        document.getElementById('RPS-character-box').style.backgroundImage = 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F37.media.tumblr.com%2F90737f921dc857c76f2443c5a423865b%2Ftumblr_n4t2z7jJNA1spy7ono1_400.gif&f=1&nofb=1&ipt=54381e23e7b89b5e8ed609085b17e820195072a5efa1d9801755b1dcf1ab3307&ipo=images)';
        //START OF PHASE 0 OF ANIMATION OF ENEMY - prepare an interval to buttons appear ~ 5 sec.
        animationInterval = setInterval(enemysAnimationIntroCOUNTER, 1500);
        timeToDecide();
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'show');
    });
}

//time for the animation (about 3 secs)
function enemysAnimationIntroCOUNTER () {
    counterFive -= 1;
    document.getElementById('RPS-textBox2').textContent = "Animation of enemy plays: "+ counterFive;
    console.log("Licznik: "+counterFive);
    //if the animation will end...
    if (counterFive === 0){
        
        //show RPS buttons (and hide placeholder)
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'hide');
        toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
        //DEBUG: change the box apparition
        document.getElementById('RPS-character-box').style.backgroundColor = 'red';
        
        //stop the timer
        clearInterval(animationInterval);
            //console.log('WTF?');

        //launch next phase: Fight Phase and display the appropiate text
        document.getElementById('RPS-textBox2').textContent = 'Time to decide! :D';
        Phase.ActivePhase = Phase.Fight;
        updateElement(document.getElementById('RPS-textBox'), "Current phase "+ Phase.ActivePhase);
    }
}
//FIGHT TIME! YOU HAVE 10 SECOUNDS TO DECIDE! 
function timeToDecide() {
        //show the buttons ...and hide the placeholder

}

//pokazuje bądź ukrywa przycisk
function toggleVisibility (element, showOrHide) {
    switch (showOrHide) {
        case 'show':
            element.style.display = 'block';
            break;
        case 'hide':
            element.style.display = 'none';
            break;
    }
}

function fightPhase() {

}


operatingButton();
//timeToDecide();
fightPhase();



//document.getElementById('RPS-textBox').textContent = "Aktualna faza:"+ Phase.ActivePhase

/*
ZAŁOŻENIA DLA NASZEJ APLIKACJI
Pojawia się postać, którą możemy wyzwać na pojedynek czarodziejów. 

Faza StandBy: Musimy zaakceptować gotowość do walki

Faza walki: 5 sekund:
Pojawiają się 3 przyciski: PAPIER, KAMIEŃ, NOŻYCE.
Po chwili pojawia się licznik do 3 z odliczaniem. W tym czasie musimy kliknąć przycisk. Komputer też podejmuje decyzję.

Faza RESOLVE - pojawia się animacja pokazująca kto wygrał. Będzie 9 oryginalnych animacji.

Faza StandBy: 
Postać wraca na swoje miejsce i pojawia się przycisk następnej rundy.

Po kilku razach gra się kończy, z prostą animacją wygranej lub przegranej.
*/
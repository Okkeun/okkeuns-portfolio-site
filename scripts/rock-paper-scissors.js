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
        updateElement(document.getElementById('RPS-textBox'), "Aktualna faza: "+ Phase.ActivePhase);
        //hide the button
        toggleVisibility(document.getElementById('RPS-button1'), 'hide');
        //DEBUG - change the colour of the charBox
        document.getElementById('RPS-character-box').style.backgroundColor = 'green';
        //START OF PHASE 0 OF ANIMATION OF ENEMY - prepare an interval to buttons appear ~ 5 sec.
        var animationInterval = setInterval(enemysAnimationIntroCOUNTER, 2500);
        timeToDecide();
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'show');
    });
}

//time for the animation (about 3 secs)
function enemysAnimationIntroCOUNTER () {
    counterFive -= 1;
    document.getElementById('RPS-textBox2').textContent = "Animation of enemy: "+ counterFive;
    console.log("Licznik: "+counterFive);
    if (counterFive === 0){
        console.log('Time to decide!');
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'hide');
        toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
        document.getElementById('RPS-character-box').style.backgroundColor = 'red';
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


operatingButton();
timeToDecide();


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
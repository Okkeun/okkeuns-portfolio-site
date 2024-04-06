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
        animationInterval = setInterval(enemysAnimationIntroCOUNTER, 500);
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

//shows or hide an element
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

function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function enemyChoosesTheFigure () {
    Status.ofEnemysFigure = rndNum(0, 3);
    
    //figure name converter: numbers to strings
    switch (Status.ofEnemysFigure) {
        case 0:
            Status.ofEnemysFigure = 'rock';
            break;
        case 1:
            Status.ofEnemysFigure = 'paper';
            break;
        case 2:
            Status.ofEnemysFigure = 'scissors';
            break;
    }
    console.log("Enemy's figure: "+Status.ofEnemysFigure);
}

//when RPS button is clicked
function pressButtonToChooseRPSFigure (figure) {
    //set the figure and hide the buttons
    Status.ofPlayersFigure = figure; 
    toggleVisibility(document.getElementById('RPSPlaceholder1'), 'show');
    toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'hide');
    updateElement(document.getElementById('RPS-textBox2'), "Player's figure: "+figure);
    //it's time for the enemy to GENERATE the figure!
    enemyChoosesTheFigure();
}


function fightPhase() {
    //if player have to choose between 3 RPS buttons...
    if (Phase.ActivePhase = Phase.Fight) {
        document.getElementById('RPS-rock-btn').addEventListener('click', () => {
            pressButtonToChooseRPSFigure('rock');
        });
        document.getElementById('RPS-paper-btn').addEventListener('click', () => {
            pressButtonToChooseRPSFigure('paper');
        });
        document.getElementById('RPS-scissors-btn').addEventListener('click', () => {
            pressButtonToChooseRPSFigure('scissors');
        });
    }
}


operatingButton();
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
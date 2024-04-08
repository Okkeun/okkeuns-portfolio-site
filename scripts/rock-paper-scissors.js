const Phase = {
    ActivePhase: -1,

    Intro: -1, //greetings
    EnemysAnimationTime: 0, //time for the animation to play, quickly moves to the next phase
    Fight: 1, //you have 5 seconds to make a decision
    Resolve: 2,
    StandBy: 3
}

const Status = {
    ofPlayersFigure: null,
    ofEnemysFigure: null,
}

let playersScore = 0;
let enemysScore = 0;

let counterFive = 5;
let animationInterval = null;

let sampleText = "Current phase: "+ Phase.ActivePhase;
let textBox = document.getElementById('RPS-textBox').textContent = sampleText;
let mainButton = document.getElementById('RPS-button1');

operatingButton();

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
        //timeToDecide();
        //toggleVisibility(document.getElementById('RPSPlaceholder1'), 'show');

        //this function have event listeners for RPS buttons
        fightPhase();
    
    });
}

//time for the animation (about 3 secs) [ function induced in operatingButton() interval but showing only ONCE!!!] 
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
        console.log('Current phase: '+Phase.ActivePhase);
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

function theGreatComparision() {
    //let's check every variant!
    //let's focus on comparing PLAYER's figure to ENEMY's
    
    Phase.ActivePhase = Phase.Resolve;


    //toggleVisibility(document.getElementById('RPSPlaceholder1'), 'show');
    //toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'hide');
    switch (Status.ofPlayersFigure) {
        case 'rock':
            if (Status.ofEnemysFigure === 'rock') { console.log("DRAW!"); }
            else if (Status.ofEnemysFigure === 'paper') { console.log('Nahh you lose... :<'); }
            else if (Status.ofEnemysFigure === 'scissors') { console.log('You won!! :D'); }
            break;
        case 'paper':
            if (Status.ofEnemysFigure === 'rock') { console.log('You won!! :D'); }
            else if (Status.ofEnemysFigure === 'paper') { console.log("DRAW!"); }
            else if (Status.ofEnemysFigure === 'scissors') { console.log('Nahh you lose... :<'); }
            break;
        case 'scissors':
            if (Status.ofEnemysFigure === 'rock') { console.log('Nahh you lose... :<'); }
            else if (Status.ofEnemysFigure === 'paper') { console.log('You won!! :D'); }
            else if (Status.ofEnemysFigure === 'scissors') { console.log("DRAW!"); }
            break;
    }
    Phase.ActivePhase = Phase.Fight;
    //cycle #2+n starts once again
    //show RPS buttons!
    setTimeout(() => {
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'hide');
    }, 1000);
    setTimeout(() => {
        toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
    }, 1000);
    //after short time, reactivate the RPS buttons event listeners
    
}

function enemysTurn() {
    Status.ofEnemysFigure = rndNum(0, 3);
    
    //hide RPS buttons
    toggleVisibility(document.getElementById('RPSPlaceholder1'), 'show');
    toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'hide');

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
    //now we have both figures - time to compare them! :
    theGreatComparision();
}




function fightPhase() {

    //if player have to choose between 3 RPS buttons...
    console.log("fight phase?");
   // if (Phase.ActivePhase === Phase.Fight) {
        //reset the counter
        //counterFive = 5;
        //show RPS buttons
        //toggleVisibility(document.getElementById('RPSPlaceholder1'), 'hide');
        //toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
        document.getElementById('RPS-rock-btn').addEventListener('click', () => {
            console.log("fight phase? rock");
            pressButtonToChooseRPSFigure('rock');
        });
        document.getElementById('RPS-paper-btn').addEventListener('click', () => {
            pressButtonToChooseRPSFigure('paper');
        });
        document.getElementById('RPS-scissors-btn').addEventListener('click', () => {
            pressButtonToChooseRPSFigure('scissors');
        });
    //}
}

//when RPS button is clicked
function pressButtonToChooseRPSFigure (figure) {
    //set the figure and hide the buttons
    Status.ofPlayersFigure = figure; 
    updateElement(document.getElementById('RPS-textBox2'), "Player's figure: "+figure);
    //it's time for the enemy to GENERATE the figure!
    enemysTurn();
}






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
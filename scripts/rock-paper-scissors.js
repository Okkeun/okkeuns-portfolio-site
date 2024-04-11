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

let mainButton = document.getElementById('RPS-button1');

let winText = "Congrats! You won the match! :D";
let loseText = "Naah, you lost the match :<";
let drawText = "It's a draw, no one wins this match! :b";

let rockImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fde%2F07%2F89%2Fde0789191986892a5bd4b3c36574880a.jpg&f=1&nofb=1&ipt=8c33f002beeccf5113d70f72deb7bd5453a21efeca8451890bb44409230fd9e1&ipo=images';
let paperImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thatsnotus.com%2Fg%2F005-spongebob-writing-essay-1400x1050.jpg&f=1&nofb=1&ipt=cf3de6ac0037dba6b97445b81bd182ef8ea10e976df5db1de0c439c4230d0b77&ipo=images';
let scissorsImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6yT-ArUF-8uB98H2oHPb3WaitC0dZ3cGO5cyShICCg&s';

let winImg = 'https://data.textstudio.com/output/sample/animated/5/9/8/5/win-21-5895.gif';
let loseImg = 'https://i.pinimg.com/originals/ed/58/d3/ed58d31cdfb5b5da28ff06a11cf860d6.gif';
let drawImg = 'https://i.pinimg.com/originals/c6/75/d3/c675d33f8e147f943a503a5895761a3e.gif';

operatingButton();

function updateElement (HTMLElement, content) {
    HTMLElement.textContent = content;
}

//press button to start battle (phase Intro -> EnemysAnimationTime)
function operatingButton () {
    document.getElementById('RPS-button1').addEventListener("click", function() {
        //change phase
        Phase.ActivePhase = Phase.EnemysAnimationTime; 
        //hide the button
        toggleVisibility(document.getElementById('RPS-button1'), 'hide');
        //DEBUG - change the apparition of the charBox
        document.getElementById('RPS-character-box').style.backgroundImage = 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F37.media.tumblr.com%2F90737f921dc857c76f2443c5a423865b%2Ftumblr_n4t2z7jJNA1spy7ono1_400.gif&f=1&nofb=1&ipt=54381e23e7b89b5e8ed609085b17e820195072a5efa1d9801755b1dcf1ab3307&ipo=images)';
        //START OF PHASE 0 OF ANIMATION OF ENEMY - prepare an interval to buttons appear ~ 5 sec.
        animationInterval = setInterval(enemysAnimationIntroCOUNTER, 100);

        //this function have event listeners for RPS buttons
        fightPhase();
    
    });
}

//time for the animation (about 3 secs) [ function induced in operatingButton() interval but showing only ONCE!!!] 
function enemysAnimationIntroCOUNTER () {
    counterFive -= 1;
    //if the animation will end...
    if (counterFive === 0){
        
        //show RPS buttons (and hide placeholder)
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'hide');
        toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
        //DEBUG: change the box apparition
        
        //stop the timer
        clearInterval(animationInterval);
            //console.log('WTF?');

        //launch next phase: Fight Phase and display the appropiate text
        document.getElementById('RPS-textBox2').textContent = 'Time to decide! :D';
        Phase.ActivePhase = Phase.Fight;
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

    // there is a small cooldown to slow a game a bit
    setTimeout(() => {
    switch (Status.ofPlayersFigure) {
        case 'rock':
            if (Status.ofEnemysFigure === 'rock') { document.getElementById('RPS-textBox3').textContent = drawText;
            document.getElementById('RPS-character-box-IMG').src = drawImg;
        }
            else if (Status.ofEnemysFigure === 'paper') { document.getElementById('RPS-textBox3').textContent = loseText; updatePoints('enemy')}
            else if (Status.ofEnemysFigure === 'scissors') { document.getElementById('RPS-textBox3').textContent = winText;  updatePoints('you') }
            break;
        case 'paper':
            if (Status.ofEnemysFigure === 'rock') { document.getElementById('RPS-textBox3').textContent = winText;  updatePoints('you') }
            else if (Status.ofEnemysFigure === 'paper') { document.getElementById('RPS-textBox3').textContent = drawText; 
            document.getElementById('RPS-character-box-IMG').src = drawImg}
            else if (Status.ofEnemysFigure === 'scissors') { document.getElementById('RPS-textBox3').textContent = loseText; updatePoints('enemy')}
            break;
        case 'scissors':
            if (Status.ofEnemysFigure === 'rock') { document.getElementById('RPS-textBox3').textContent = loseText;  updatePoints('enemy') }
            else if (Status.ofEnemysFigure === 'paper') { document.getElementById('RPS-textBox3').textContent = winText;  updatePoints('you') }
            else if (Status.ofEnemysFigure === 'scissors') { document.getElementById('RPS-textBox3').textContent = drawText; 
            document.getElementById('RPS-character-box-IMG').src = drawImg}
            break;
    }
    Phase.ActivePhase = Phase.Fight;
    }, 1000);
    //cycle #2+n starts once again
    //show RPS buttons!
    setTimeout(() => {
        toggleVisibility(document.getElementById('RPSPlaceholder1'), 'hide');
    }, 3000);
    setTimeout(() => {
        toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
    }, 3000);
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
            document.getElementById('RPS-img-enemy-figure').src = rockImg; //change player's figure img
            Status.ofEnemysFigure = 'rock';
            break;
        case 1:
            document.getElementById('RPS-img-enemy-figure').src = paperImg; //change player's figure img
            Status.ofEnemysFigure = 'paper';
            break;
        case 2:
            document.getElementById('RPS-img-enemy-figure').src = scissorsImg; //change player's figure img
            Status.ofEnemysFigure = 'scissors';
            break;
    }
    //now we have both figures - time to compare them! :
    theGreatComparision();
}




function fightPhase() {

        document.getElementById('RPS-rock-btn').addEventListener('click', () => {
            document.getElementById('RPS-img-player-figure').src = rockImg; //change player's figure img
            pressButtonToChooseRPSFigure('rock');
        });
        document.getElementById('RPS-paper-btn').addEventListener('click', () => {
            document.getElementById('RPS-img-player-figure').src = paperImg; //change player's figure img
            pressButtonToChooseRPSFigure('paper');
        });
        document.getElementById('RPS-scissors-btn').addEventListener('click', () => {
            document.getElementById('RPS-img-player-figure').src = scissorsImg; //change player's figure img
            pressButtonToChooseRPSFigure('scissors');
        });
    //}
}

//when RPS button is clicked
function pressButtonToChooseRPSFigure (figure) {
    //set the figure and hide the buttons
    Status.ofPlayersFigure = figure; 
    updateElement(document.getElementById('RPS-textBox2'));
    //it's time for the enemy to GENERATE the figure!
    enemysTurn();
}

function updatePoints (whoWon) {
    
    if (whoWon === 'you') {
        playersScore++;
        document.getElementById('RPS-textBoxPointsYou').textContent = "You: "+playersScore;
        document.getElementById('RPS-character-box-IMG').src = winImg;
        document.getElementById('RPS-character-box').style.backgroundImage = 'none';
    }
    else if (whoWon === 'enemy') {
        enemysScore++;
        document.getElementById('RPS-textBoxPointsEnemy').textContent = "Enemy: "+enemysScore;
        document.getElementById('RPS-character-box-IMG').src = loseImg;
    }
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
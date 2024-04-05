
const Phase = {
    ActivePhase: -1,

    Intro: -1,
    StandBy: 0,
    Fight: 1,
    Resolve: 2
}

let sampleText = "Aktualna faza: "+ Phase.ActivePhase;
let textBox = document.getElementById('RPS-textBox').textContent = sampleText;
let mainButton = document.getElementById('RPS-button1');

function updateElement (HTMLElement, content) {
    HTMLElement.textContent = content;
}

//press button to start battle (phase Intro -> StandBy)
function operatingButton () {
    document.getElementById('RPS-button1').addEventListener("click", function() {
        //change phase
        Phase.ActivePhase = Phase.StandBy; 
        //update the textbox
        updateElement(document.getElementById('RPS-textBox'), "Aktualna faza: "+ Phase.ActivePhase);
        //hide the button
        toggleVisibility(document.getElementById('RPS-button1'), 'hide');
        //DEBUG - change the colour of the charBox
        document.getElementById('RPS-character-box').style.backgroundColor = 'red';
        //show RPS buttons
        toggleVisibility(document.getElementById('RPS-RPSbuttons-3ofthem'), 'show');
    });
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
console.log('Siema świsdsfecie!');

let sampleText = "Hello World";
let textBox = document.getElementById('RPS-textBox').innerText = sampleText;
let mainButton = document.getElementById('RPS-button1');

const Phase = {
    ActivePhase: -1,

    Intro: -1,
    StandBy: 0,
    Fight: 1,
    Resolve: 2
}

switch (Phase.ActivePhase) {
    case -1:
        toogleVisibility(mainButton, 'show');
        break;
    
}

function toogleVisibility (element, showOrHide) {
    switch (showOrHide) {
        case 'show':
            if (element.style.display === 'none') {
                element.style.display === 'block';
            }
            break;
        case 'hide':
            if (element.style.display === 'block') {
                element.style.display === 'none';
            }
            break;
    }
}

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
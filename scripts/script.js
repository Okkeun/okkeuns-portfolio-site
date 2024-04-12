updateNumbers();
hoverSpansAndChangeText();

function updateNumbers () {
    let currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = "Copyright: K. 'Okkeun' Okołowski "+"("+currentYear+")";
}

function hoverSpansAndChangeText() {
    document.getElementById('nihongo').addEventListener('mouseover', () => {
        document.getElementById('nihongo').textContent = '日本語の学習'; 
    });
    document.getElementById('nihongo').addEventListener('mouseout', () => {
        document.getElementById('nihongo').textContent = 'Learning Japanese'; 
    });
}
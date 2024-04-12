updateNumbers();

function updateNumbers () {
    let currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = "Copyright: K. 'Okkeun' Okołowski "+"("+currentYear+")";
}
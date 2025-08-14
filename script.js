
//Eingabe speichern
let selectedOperation = null;


const addButton = document.getElementById('addieren');
const subButton = document.getElementById('subtrahieren');
const mulButton = document.getElementById('multiplizieren');
const divButton = document.getElementById('dividieren');


//Event-Listener für die Buttons
addButton.addEventListener('click', () => {
    selectedOperation = 'addieren';
    document.getElementById('operation').innerText = selectedOperation;
    berechneErgebnis();
});

subButton.addEventListener('click', () => {
    selectedOperation = 'subtrahieren';
    document.getElementById('operation').innerText = selectedOperation;
    berechneErgebnis();
});

mulButton.addEventListener('click', () => {
    selectedOperation = 'multiplizieren';
    document.getElementById('operation').innerText = selectedOperation;
    berechneErgebnis();
});

divButton.addEventListener('click', () => {
    selectedOperation = 'dividieren';
    document.getElementById('operation').innerText = selectedOperation;
    berechneErgebnis();
});

function berechneErgebnis() {
    const zahl1 = parseFloat(document.getElementById('zahl-1').value);
    const zahl2 = parseFloat(document.getElementById('zahl-2').value);
    const ergebnisFeld = document.getElementById('ergebnis');

    if (isNaN(zahl1) || isNaN(zahl2)) {
        alert('Bitte geben Sie beide Zahlen ein.');
        return;
    }

    let ergebnis;

    switch (selectedOperation) {
        case 'addieren':
            ergebnis = zahl1 + zahl2;
            break;
        case 'subtrahieren':
            ergebnis = zahl1 - zahl2;
            break;
        case 'multiplizieren':
            ergebnis = zahl1 * zahl2;
            break;
        case 'dividieren':
            if (zahl2 === 0) {
                alert('Division durch null ist nicht erlaubt.');
                return;
            }
            ergebnis = zahl1 / zahl2;
            break;
        default:
            alert('Bitte wählen Sie eine Rechenoperation aus.');
            return;
    }

    ergebnisFeld.value = ergebnis;
}


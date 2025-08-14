
//Eingabe speichern
let selectedOperation = null;


const addButton = document.getElementById('addieren');
const subButton = document.getElementById('subtrahieren');
const mulButton = document.getElementById('multiplizieren');
const divButton = document.getElementById('dividieren');


//Event-Listener für die Buttons
addButton.addEventListener('click', () => {
    selectedOperation = 'addieren';
    berechneErgebnis();
});

subButton.addEventListener('click', () => {
    selectedOperation = 'subtrahieren';
    berechneErgebnis();
});

mulButton.addEventListener('click', () => {
    selectedOperation = 'multiplizieren';
    berechneErgebnis();
});

divButton.addEventListener('click', () => {
    selectedOperation = 'dividieren';
    berechneErgebnis();
});

/*document.getElementById('ergebnis').addEventListener('click', (e) => {
    e.preventDefault(); //seite aktualisierung abbrechen

    if (!selectedOperation) {
        alert('Bitte wählen Sie eine Operation aus.');
        return
    };
    if (isNaN(zahl1) || isNaN(zahl2)) {
        alert('Bitte geben Sie gültige Zahlen ein.');
        return;
    };


});*/

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


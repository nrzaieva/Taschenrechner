
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
});

subButton.addEventListener('click', () => {
    selectedOperation = 'subtrahieren';
    document.getElementById('operation').innerText = selectedOperation;
});

mulButton.addEventListener('click', () => {
    selectedOperation = 'multiplizieren';
    document.getElementById('operation').innerText = selectedOperation;
});

divButton.addEventListener('click', () => {
    selectedOperation = 'dividieren';
    document.getElementById('operation').innerText = selectedOperation;
});

document.getElementById('berechnen').addEventListener('click', (e) => {


    if (!selectedOperation) {
        alert('Bitte wählen Sie eine Operation aus.');
        return
    };

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


            if (selectedOperation === 'addieren') {
                ergebnis = zahl1 + zahl2;
            } else if (selectedOperation === 'subtrahieren') {
                ergebnis = zahl1 - zahl2;
            } else if (selectedOperation === 'multiplizieren') {
                ergebnis = zahl1 * zahl2;
            } else if (selectedOperation === 'dividieren') {
                if (zahl2 === 0) {
                    alert('Division durch null ist nicht erlaubt.');
                    return;
                }
                ergebnis = zahl1 / zahl2;
            }
            

    ergebnisFeld.value = ergebnis;
}


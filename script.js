const zahl1 = document.getElementById('zahl-1');
const zahl2 = document.getElementById('zahl-2');
const ergebnis = document.getElementById('ergebnis');

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

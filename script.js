const button = document.getElementById("berechnen");

button.addEventListener("click", calculateInput);

function calculateInput() {
    /* was der Benutzer eingegeben hat */
    const input = documentGetElementById("input").value;

    /* array von Zahlen und Zeichen */
    const tokens = parseInput(input);

    /* der Ergebnis aus dem Array berechnen */
    const result = simpleCalculate(tokens);

    /* das Ergebnis in das Ergebnisfeld schreiben */
    document.getElementById("ergebnis").value = result;
}
  

const button = document.getElementById("berechnen");

button.addEventListener("click", calculateInput);

function calculateInput() {
    /* was der Benutzer eingegeben hat */
    const input = document.getElementById("input").value;

    /* array von Zahlen und Zeichen */
    const tokens = parseInput(input);

    /* der Ergebnis aus dem Array berechnen */
    const result = simpleCalculate(tokens);

    /* das Ergebnis in das Ergebnisfeld schreiben */
    document.getElementById("ergebnis").value = result;
}
  
/* global */
function parseInput(input) {
    // Noch * und / hinzugefügt
    const regex = /(\d+|\+|\-|\*|\/)/g;
    return input.match(regex).map(token => { 
        if (!isNaN(token)) {
            const number = Number(token);
            // Zählt die Anzahl der Zeichen
            if (number.toString().length > 7) {
                alert("Nur Zahlen mit maximal 7 Stellen erlaubt!");
                throw new Error("Zahl zu lang");
            }
            return number;
        } else {
            return token;
        }
    });
    return tokens;
}
/*{ !isNaN(token) ? Number(token) : token; });*/

    function simpleCalculate(tokens) {
        // Erste Zahl
        let result = 0;
        let currentOperator = "+";

        tokens.forEach(token => {
            if (typeof token === "number") {
                if (currentOperator === "+") {
                    result += token;
                } else if (currentOperator === "-") {
                    result -= token;
                }
                } else if (typeof token === "string") {
                    currentOperator = token;
                }
        });
        return result;

    }

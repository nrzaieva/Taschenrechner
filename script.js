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
  
function parseInput(input) {
    const regex = /(\d+|\+|\-)/g; /* global */
    return input.match(regex).map(token => {/*{ !isNaN(token) ? Number(token) : token; });*/
        if (!isNaN(token)) {
            return Number(token);
        } else {
            return token;
        }
    });
}

    function simpleCalculate(tokens) {
        let result = 0;
        let currentOperator = "+";

        tockens.forEach(token => {
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

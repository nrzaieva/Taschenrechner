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
}

    function simpleCalculate(tokens) {
        // Multiplikation & Division zuerst
        let processed = [];
        let i = 0;
        
        while (i < tokens.length) {
            const token = tokens[i];   
            
            if (token === "*" || token === "/") {
                const prev = processed.pop();
                const next = tokens[i + 1];

                if (typeof next !== "number") {
                    throw new Error ("Fehlender Operand")
                }
            if (token === "*") {
                processed.push(prev * next);
            } else if (token === "/") {
                if (next === 0) {
                    alert("Division durch 0 ist nicht erlaubt");
                    throw new Error("Division durch 0");
                }
                processed.push(prev / next);
            }
            // Überspringe Operator und nächste Zahl
            i += 2; 
            } else {
                processed.push(token);
                i++;
            }

        }

        
        let result = processed[0];
        let currentOperator = null;

        processed.forEach((token, index) => {
            if (typeof token === "string") {
                currentOperator = token;
            } else if (typeof token === "number" && index !== 0) {
                if (currentOperator === "+") {
                    result += token;
                } else if ( currentOperator === "-") {
                    result -= token;
                }

            }
        });
        return result;

    }

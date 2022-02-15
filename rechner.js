function personalParseInt(input, n) {
    let ergebnis = 0;
    let test;
    n = Number(n);

    for (let i = 0; i < input.length; i++) {
        test = String(input[i]);
        if (isNan(test)) {
            test = test.charCodeAt(0) - 55;
        }
        ergebnis += Number(test) * n ** (input.length - 1 - i);
    }
    return ergebnis;
}

function checkSize(number) {
    if (String(number).length > 6) {
        alert(number);
        return "Siehe Alert.";
    }
    return number;
}

function checkInput(input, base) {
    input = String(input);
    base = Number(base);

    let element;
    for (let i = 0; i < input.length; i++) {
        element = input[i];

        const a = parseInt(element, base);
        try {
            if (!(a.toString(base) === String(element).toLowerCase())) {
                alert("Deine Eingabe ist ungültig.")
                return false;
            }
        } catch (RangeError) {
            alert("Die Basis ist zu groß.")
            return false;
        }
    }
    return true;
}

function universalToDecimal(inputID, outputID, baseID) {
    let ergebnis = 0;
    const input = String($(`#${inputID}`).val());

    let n = Number($(`#${baseID}`).val());
    if (isNaN(n)) {
        n = Number(baseID);
    }
    if (!(n > 10)) {
        for (let i = 0; i < input.length; i++) {
            ergebnis += Number(input[i]) * n ** (input.length - 1 - i);
        }
    } else {
        ergebnis = parseInt(input, n);
    }

    if (checkInput(input, n)) {
        $(`#${outputID}`).text(`　=　${checkSize(ergebnis)}`);
    }
}

function decimalToUniversal(inputID, outputID, baseID) {
    const input = String($(`#${inputID}`).val());

    let n = Number($(`#${baseID}`).val());
    if (isNaN(n)) {
        n = Number(baseID);
    }
    let ergebnis = Number(input).toString(n);

    if (checkInput(input, 10)) {
        $(`#${outputID}`).text(`　=　${checkSize(ergebnis.toUpperCase())}`);
    }
}

function calcSum() {
    const zahl1 = Number($("#zahl1").val());
    const zahl2 = Number($("#zahl2").val());
    let ergebnis;

    switch ($("#type").val()) {
        case "+":
            ergebnis = zahl1 + zahl2;
            break;
        case "-":
            ergebnis = zahl1 - zahl2;
            break;
        case "/":
            ergebnis = zahl1 / zahl2;
            break;
        case "*":
            ergebnis = zahl1 * zahl2;
            break;
        case "**":
            ergebnis = Math.pow(zahl1, zahl2);
            break;
        case "√":
            ergebnis = Math.pow(zahl2, 1 / zahl1);
    }
    if (checkInput(zahl1, 10) && checkInput(zahl2, 10)) {
        $("#summe1").text(`　=　${checkSize(ergebnis)}`);
    }
}

let decimalToBinary = () => decimalToUniversal("zahl4", "ergebnis2", 2);

function ecmaScript() {
    let antwort = prompt('What is the "official name of JavaScript?"', "");
    if (antwort === "ECMAScript") {
        alert("Richtig!");
    } else {
        alert("Sie wissen es nicht? ECMAScript!");
    }
}
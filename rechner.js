function personalParseInt(input, n) {
    let ergebnis = 0;
    let letter;

    for (let i = 0; i < input.length; i++) {
        letter = String(input[i]);
        if (isNaN(letter)) {
            letter = letter.toUpperCase().charCodeAt(0) - 55;
        }
        ergebnis += Number(letter) * Number(n) ** (input.length - 1 - i);
    }
    return ergebnis;
}

function personalToString(input, n) {
    let ergebnis = "";

    if (input === 0) {
        ergebnis += input;
    }

    while (input > 0) {
        const mod = input % n;
        input = Math.floor(input / n);

        if (mod > 9) {
            ergebnis = String.fromCharCode(mod + 55) + ergebnis;
        } else {
            ergebnis = mod.toString() + ergebnis;
        }
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

        const a = personalParseInt(element, base);
        console.log(personalToString(a, base).toLowerCase());
        console.log(String(element).toLowerCase());
        try {
            if (!(personalToString(a, base).toLowerCase() === String(element).toLowerCase())) {
                alert("Deine Eingabe ist ungültig.");
                return false;
            }
        } catch (RangeError) {
            alert("Die Basis ist zu groß.");
            return false;
        }
    }
    return true;
}

function universalToDecimal(inputID, outputID, baseID) {
    const input = String($(`#${inputID}`).val());

    let n = Number($(`#${baseID}`).val());
    if (isNaN(n)) {
        n = Number(baseID);
    }
    if (checkInput(input, n)) {
        $(`#${outputID}`).text(`　=　${checkSize(personalParseInt(input, n))}`);
    }
}

function decimalToUniversal(inputID, outputID, baseID) {
    const input = String($(`#${inputID}`).val());

    let n = Number($(`#${baseID}`).val());
    if (isNaN(n)) {
        n = Number(baseID);
    }
    let ergebnis = personalToString(Number(input), n);

    if (checkInput(input, 10)) {
        $(`#${outputID}`).text(`　=　${checkSize(ergebnis.toUpperCase())}`);
    }
}

function calc() {
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

function ecmaScript() {
    let antwort = prompt('What is the "official name of JavaScript?"', "");
    if (antwort === "ECMAScript") {
        alert("Richtig!");
    } else {
        alert("Sie wissen es nicht? ECMAScript!");
    }
}
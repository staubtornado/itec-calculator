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

    if (input <= 0) {
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
    if (String(number).length > 15) {
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
        if (!(personalToString(a, base).toLowerCase() === String(element).toLowerCase())) {
            alert("Deine Eingabe ist ungültig.");
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

    if (checkInput(input, 10)) {
        $(`#${outputID}`).text(`　=　${checkSize(personalToString(Number(input), n).toUpperCase())}`);
    }
}

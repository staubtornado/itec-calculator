function checkSize(number) {
    if (String(number).length > 6) {
        alert(number);
        return "Siehe Alert.";
    }
    return number;
}

function universalToDecimal(inputID, outputID, baseID) {
    let ergebnis = 0;
    const input =  String($(`#${inputID}`).val());

    let n = Number($(`#${baseID}`).val());
    if (isNaN(n)) {
        n = Number(baseID);
    }
    if (!(n > 10)) {
        for (let i = 0; i < input.length; i++) {
            ergebnis += Number(input[i]) * n ** (input.length - 1 - i);
        }
    }
    else {
        ergebnis = parseInt(input, n);
    }
    $(`#${outputID}`).text(`　=　${checkSize(ergebnis)}`);
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
            ergebnis = Math.pow(zahl2, 1/zahl1);
    }
    $("#summe1").text(`　=　${checkSize(ergebnis)}`);
}

let decimalToBinary = () => $("#ergebnis2").text(`　=　${checkSize(Number($("#zahl4").val()).toString(2))}`);

function ecmaScript() {
    let antwort = prompt('What is the "official name of JavaScript?"', "");
    if (antwort === "ECMAScript") {
        alert("Richtig!");
    } else {
        alert("Sie wissen es nicht? ECMAScript!");
    }
}


function calcular() {
    const input1 = document.getElementById("one");
    const input2 = document.getElementById("two");
    const res = document.getElementById("res");

    const result = Number(input1) / Number(input2);

    res.innerHTML = ` ${result}`

    if (result <= 0.7) {
        "Vale mais a pena usar Álcool!"
    } else {
        "Vale mais a pena usar Gasolina!"
    }
}
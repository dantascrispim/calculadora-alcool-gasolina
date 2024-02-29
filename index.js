
function calcular() {
    
    const input1 = document.getElementById("one").value;
    const input2 = document.getElementById("two").value;
    const res = document.getElementById("res");

    const result = Number(input1 / input2);

    if(result < 0.7) {
        res.innerHTML = `Vale mais a pena usar Álcool!`
    }else {
        res.innerHTML = `Vale mais a pena usar Gasolina!`
    }
    
}
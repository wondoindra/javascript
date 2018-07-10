console.log("Ni Hao");

setInterval(update, 500);

function update() {
    var inputbar = document.getElementById('input-1').value + document.getElementById('input-2').value;
    document.getElementById('input-bar').value = inputbar;
}

function calculate() {


    var valuetotal = parseInt(document.getElementById('input-1').value) + parseInt(document.getElementById('input-2').value);
    console.log(valuetotal);
    document.getElementById('input-value').value = valuetotal;
}
var errorElement = document.getElementById("error");
var resultElement = document.getElementById("result");

function submit() {
    errorElement.innerHTML = '';

    var numberElement = document.getElementById("number").value;
    
    if (numberElement === '') {
        errorElement.innerHTML = "Please Enter The Number";
     } else
        var a = 0;
        var x = 0;
        var results = "";
        while (12 >= a) {
            x = a * numberElement;
            results += `<h1>${a} x ${numberElement} = ${x}</h1>`;
            a++;
        }
        resultElement.innerHTML = results;
}
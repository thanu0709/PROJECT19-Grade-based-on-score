var errorElement = document.getElementById("error");
var greadElement = document.getElementById("gread");

function submit() {
    errorElement.innerHTML = '';

    var inputElement = document.getElementById("marks").value;

    if (inputElement === '') {
        errorElement.innerHTML = "Please Enter The Marks";
    } else {
        if (inputElement >= 0 && inputElement <= 100) {
            if (inputElement >= 90) {
                greadElement.innerHTML = "A";
            } else if (inputElement >= 80){
                greadElement.innerHTML = "B";
            } else if (inputElement >= 70){
                greadElement.innerHTML = "C";
            } else if (inputElement >= 60){
                greadElement.innerHTML = "D";
            } else {
                greadElement.innerHTML = "F";
            }
        } else {
            greadElement.innerHTML = "Out of Range Value";
        }
    }
}
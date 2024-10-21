var errorElement = document.getElementById("error");
var agecategoryElement = document.getElementById("category");

function ageCategory() {
    errorElement.innerHTML = '';

    var ageElement = document.getElementById("age").value;

    if (ageElement === '') {
        errorElement.innerHTML = "Please Enter The age";
    } else {
        if (ageElement < 0){
            agecategoryElement.innerHTML = "Please enter the Valide age";
        } else if (ageElement >= 0 && ageElement <= 12) {
            agecategoryElement.innerHTML = "Chiled";
        } else if (ageElement >= 13 && ageElement <= 19) {
            agecategoryElement.innerHTML = "Teenager";
        } else if (ageElement >= 20 && ageElement <= 64) {
            agecategoryElement.innerHTML = "Adult";
        } else {
            agecategoryElement.innerHTML = "Senior";
        }
    }
}
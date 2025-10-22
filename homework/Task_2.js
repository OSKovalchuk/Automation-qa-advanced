// function declaration
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}


console.log("25 років:", isAdult(25)); // true
console.log("15 років:", isAdult(15)); // false

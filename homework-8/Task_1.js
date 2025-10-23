
function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven(); // Виклик, якщо число парне
    } else {
        handleOdd(); // Виклик, якщо число непарне
    }
}

// Колбек-функція для парного числа
function handleEven() {
    console.log("number is even");
}

// Колбек-функція для непарного числа
function handleOdd() {
    console.log("number is odd");
}


handleNum(7, handleEven, handleOdd);  // → "number is odd"
handleNum(2, handleEven, handleOdd); // → "number is even"

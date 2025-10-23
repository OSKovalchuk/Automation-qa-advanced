

function divide(numerator, denominator) {
   
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers!");
    }

    
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero!");
    }

   
    return numerator / denominator;
}


try {
    console.log("Result:", divide(10, 2)); 
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Result:", divide(8, 0)); 
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Result:", divide("10", 2)); 
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Робота завершена");
}

 
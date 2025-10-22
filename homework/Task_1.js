// function declaration
function calculateArea(width, height) {
    return width * height;
}


const area1 = calculateArea(5, 10);
console.log("Площа (declaration):", area1);

// function expression
const calculateAreaExpression = function(width, height) {
    return width * height;
};


const area2 = calculateAreaExpression(5, 10);
console.log("Площа (expression):", area2);

// arrow function
const calculateAreaArrow = (width, height) => width * height;


const area3 = calculateAreaArrow(5, 10);
console.log("Площа (arrow):", area3);


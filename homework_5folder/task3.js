const number = 5;

console.log("Таблиця множення за допомогою циклу for:");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("\nТаблиця множення за допомогою циклу while:");
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
const averageGrade = 85;

// Округлюємо оцінку вниз до найближчого десятка для зручності switch
const gradeGroup = Math.floor(averageGrade / 10);

switch (gradeGroup) {
    case 10:
    case 9:
        console.log("Відмінно");
        break;
    case 8:
        console.log("Дуже добре");
        break;
    case 7:
        console.log("Добре");
        break;
    case 6:
        console.log("Задовільно");
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Незадовільно");
        break;
    default:
        console.log("Некоректне значення середньої оцінки");
}
const Book = require("./Book");
const EBook = require("./EBook");

try {
 
  const b1 = new Book("Мистецтво війни", "Сунь-Цзи", 500);
  const b2 = new Book("Гаррі Поттер", "Дж. К. Роулінг", 1997);
  const b3 = new Book("451° за Фаренгейтом", "Рей Бредбері", 1953);

 
  b1.printInfo();
  b2.printInfo();
  b3.printInfo();

 
  const ebook1 = new EBook("1984", "Джордж Орвелл", 1949, "PDF");
  ebook1.printInfo();

 
  ebook1.fileFormat = "epub";
  ebook1.printInfo();


  const oldest = Book.getOldestBook([b1, b2, b3, ebook1]);
  console.log("\nНайдавніша книга:");
  oldest.printInfo();

  
  const ebookFromBook = EBook.fromBook(b2, "mobi");
  console.log("\nEBook створена зі звичайної книги:");
  ebookFromBook.printInfo();
} catch (err) {
  console.error("Помилка:", err.message);
}

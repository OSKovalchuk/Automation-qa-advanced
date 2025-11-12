const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }


  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Формат файлу повинен бути непорожнім рядком.");
    }
    this._fileFormat = value.trim().toLowerCase();
  }

  
  printInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.fileFormat}`
    );
  }

  // --- СТАТИЧНИЙ МЕТОД ---
  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error("Аргумент повинен бути екземпляром класу Book.");
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;

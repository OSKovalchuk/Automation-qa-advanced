class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  
  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Назва книги повинна бути непорожнім рядком.");
    }
    this._title = value.trim();
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Автор повинен бути непорожнім рядком.");
    }
    this._author = value.trim();
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Рік видання має бути додатним числом.");
    }
    this._year = value;
  }

 
  printInfo() {
    console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
  }


  static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Передано некоректний масив книг.");
    }
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}


module.exports = Book;

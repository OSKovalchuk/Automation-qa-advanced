
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні todo");
      }
      return response.json(); // перетворюємо відповідь у JS-об'єкт
    })
    .catch((error) => {
      console.error("Помилка в getTodo:", error.message);
    });
}


function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка в getUser:", error.message);
    });
}


Promise.all([getTodo(), getUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log("Результат Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Помилка в Promise.all:", error.message);
  });


Promise.race([getTodo(), getUser()])
  .then((result) => {
    console.log("Результат Promise.race:", result);
  })
  .catch((error) => {
    console.error("Помилка в Promise.race:", error.message);
  });

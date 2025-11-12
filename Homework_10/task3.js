
async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error("Помилка при завантаженні todo");
    }

    const todo = await response.json();
    return todo;
  } catch (error) {
    console.error("Помилка в getTodo:", error.message);
  }
}


async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("Помилка при завантаженні user");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Помилка в getUser:", error.message);
  }
}


async function main() {
  try {
    
    const results = await Promise.all([getTodo(), getUser()]);
    const [todo, user] = results;

    console.log("Результат Promise.all:");
    console.log("Todo:", todo);
    console.log("User:", user);

 
    const firstResult = await Promise.race([getTodo(), getUser()]);
    console.log("\nРезультат Promise.race:", firstResult);

  } catch (error) {
    console.error("Помилка в main:", error.message);
  }
}


main();

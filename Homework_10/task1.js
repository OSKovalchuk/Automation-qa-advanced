
function delayedMessage(text, milliseconds) {
 
  if (typeof text !== "string" || text.trim() === "") {
    console.error("Помилка: текст повинен бути непорожнім рядком.");
    return;
  }

  if (typeof milliseconds !== "number" || milliseconds < 0) {
    console.error("Помилка: кількість мілісекунд повинна бути невід’ємним числом.");
    return;
  }

 
  setTimeout(() => {
    console.log(text);
  }, milliseconds);
}


delayedMessage("Привіт! Це з’явиться через 2 секунди.", 2000);

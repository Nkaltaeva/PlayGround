document
  .getElementById("reg-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      alert("Заполните все поля");

      event.preventDefault(); // Предотвращаем отправку формы
    } else if (!isValidEmail(email)) {
      alert("Введите корректный Email");

      event.preventDefault();
    }
  });

function isValidEmail(email) {
  // Регулярное выражение для проверки email

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

const express = require("express");

const app = express();

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Заполните все поля" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Введите корректный Email" });
  }
  // Далее проводим проверки на уникальность email и другие бизнес-правила

  // Если все проверки успешны, регистрируем пользователя

  // и отправляем успешный ответ
});
function isValidEmail(email) {
  // Регулярное выражение для проверки email

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

app.listen(3000, () => {
  console.log("данные сохранены");
});

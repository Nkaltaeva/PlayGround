"use strict"

let i = 0;
while (i < 3) {
  console.log(`повтор ${i + 1}`); // + 1 - это начало не от 0 как задано изначально (i=0), а от 1
  i++;
}


let I = 5;
do {
    console.log(`повтор ${I + 1}`);  // сначало выполняется do и только потом идет проверка кода на верное решение. Один раз будет заходить в код, тк сначало выполняется код и только потом проверка
    I++;
} while (I < 3) ;

// обратный отсчет
let initialCount = 10;
function startRocketCountdown() {
  do {
    console.log(`запуск ${initialCount}`);
    initialCount--;
  } while (initialCount >= 0);
  console.log("Старт!");
}
console.log(startRocketCountdown());

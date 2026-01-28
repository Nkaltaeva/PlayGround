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

for (let i = 20; i > 0; i -= 2) {
  // вычитание по -2
  console.log(`показать ${i}`);
}

for (let i = 10; i > 0 && i % 4 !== 0; i -= 3) {
  //  && - оператор должен получить оба выражения true
  // i % 4 - это выражение делит на 4 || !== 0 - это справшивает не равно ли оно "0"
  console.log(`показать ${i}`);
}
// создать внешнюю переменую и будет доступна для вывода тоже внешне
// важгл что в условие for (;;) было две ;;
let i = 1;
for (; i < 4; i++) {
  console.log(`показать ${i}`);
}
console.log(i);


//сравнение двух массивов на идентичность 

let arr1 = [2, 5, -3, -3, 10];
let arr2 = [2, 5, -3, -3, 10];
let result = true;

// Сначала проверяем длину
if (arr1.length !== arr2.length) {
  result = false;
} else {
  // Сравниваем элементы по индексам
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
      break; // Выходим при первом несовпадении
    }
  }
}

console.log(result);

//лестница чисел
function printNumberStaircase(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += i + j;
      if (j < i - 1) {
        row += " ";
      }
    }
    console.log(row);
  }
}
console.log(printNumberStaircase(n));


// Вы имеете двумерный массив в переменной arr, который содержит числа. Необходимо получить сумму всех положительных чисел в этом многомерном массиве и вывести в консоль.
let arr = [[5, 32, 15, 9], [83, -22, 7], [], [81, 10, 0]];
let totalSum = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > 0) {
      totalSum += arr[i][j];
    }
  }
  
}
console.log(totalSum);

// Функция должна принять массив и вернуть новый массив со всеми значениями принятого массива, но в обратном порядке.
// Другими словами, нужно развернуть массив.

let arr = [105, 104, 103, 102, 101];
const arrayReverse = (arr) => {
  const arrResult = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrResult.push(arr[i]);
  }
  return arrResult;
};

console.log(arrayReverse([105, 104, 103, 102, 101]));

// Необходимо реализовать функцию fillArrToLength, в нее передается массив и целое положительное число. Функция должна в массив добавить нули до нужного размера, размер передан вторым параметром.

// Если массив имеет нужный размер (или больше), тогда функция никак не должна менять массив.

function fillArrToLength(arr, length) {
  for (let i = arr.length; i < length; i++) {
    arr.push(0);
  }
}
const arr1 = [2, 8];
fillArrToLength(arr1, 5);
console.log(arr1); // [2, 6, 8, 0, 0]


// Функция getArr принимает целое положительное число, необходимо реализовать функцию так, чтобы она возвращала массив, в котором будут записаны числа в убывающем порядке, которые кратны 3, до нуля включительно (смотри примеры).
function getArr(num) {
  const arr = [];
  for (let i = num - (num % 3); i >= 0; i -= 3) {
    arr.push(i);
  }
  return arr;
}

console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]

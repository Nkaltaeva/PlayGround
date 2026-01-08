// функции
//@ts-check
"use strict";

function countDrinkingResults(
  totalShots,
  claimedDrankShots,
  brokenShots,
  spilledShots
) {
  if (claimedDrankShots + brokenShots + spilledShots >= totalShots) {
    console.log("Игорь явно вас обманывает!");
  } else {
    console.log(`Количество разбитых стопок: ${brokenShots}
    Количество пролитых стопок: ${spilledShots}
    Количество стопок, которое выпил каждый из друзей: ${
      claimedDrankShots / 2
    }`);
  }
}

// отображение времени с 00 значениями
// padStart(2 - это колличество символов, "0" - это что добавлять если цифра 0
// toString() - переводить все значение в строку

function getTimeBySeconds(totalTime) {
  const hour = Math.floor(totalTime / 3600)
    .toString()
    .padStart(2, "0");
  const minut = Math.floor((totalTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const second = Math.floor(totalTime % 60)
    .toString()
    .padStart(2, "0");

  return `${hour}:${minut}:${second}`;
}

// Напишите функцию maskCardNumber, которая принимает строку, представляющую номер кредитной карты (16 цифр, записанных слитно).
// Функция должна вернуть строку, в которой все цифры, кроме последних четырех, заменены на символы *.
// Формат возвращаемой строки должен быть следующим: **** **** **** 5678, где 5678 — это последние четыре цифры исходного номера карты.
// Подсказка: Нам пока не хватает знаний о том, как можно получить последние 4 цифры из строки. Посмотрите, как использовать метод .slice() у строк, чтобы извлечь последние четыре цифры.
// Примечание
// Вызывать функцию не нужно, она будет вызвана, для проверки, автоматически.
// Проверять длину строки в параметре функции не нужно, предполагается, что на вход всегда будет приходить строка из 16 цифр.

// функуия для отображения *** и 4 цифры кредитной карты

function maskCardNumber(num) {
  return `**** **** **** ${num.toString().slice(12, 16)}`;
}
function maskCardNumber(carNumber) {
  const posl = carNumber.slice(12);
  return `**** **** **** ${posl}`;
}
function maskCardNumber(cardNumber) {
  const num = cardNumber.slice(-4);
  return num.padStart(19, "**** ");
}

/**
 *Функция для корректировки ФИО
 * @param {string} first - имя user
 * @param {string} last - фамилия user
 * @returns {string}
 */

// Павел Тарасов
console.log(fullName("Павел", "ТАРАСОВ"));
// Павел Тарасов
console.log(fullName("павеЛ", "тАРаСоВ"));

function fullName(first, last) {
  const transform = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return `${transform(first)} ${transform(last)}`;
}
function fullName(first, last) {
  const firstName =
    first.at(0).toLocaleUpperCase() + first.slice(1).toLocaleLowerCase();
  const lastName =
    last.at(0).toLocaleUpperCase() + last.slice(1).toLocaleLowerCase();
  return `${firstName} ${lastName}`;
}


/**
 * Функция склонения слова для числительного.
 * @param {number} count - Числительное.
 * @param {string} one - Вариант слова для цифры один (например: 1 "яблоко").
 * @param {string} two - Вариант слова для цифры два (например: 2 "яблока").
 * @param {string} five - Вариант слова для цифры пять (например: 5 "яблок").
 * @returns {string} Склоненное слово в зависимости от числительного.
 */
// В данном задании вам предстоит реализовать функцию, которая будет возвращать нужное слово, в зависимости от переданного числа.
// Ваша функция должна принимать количество (целое число) и три формы слова, которые указывают на различные падежи.
// Цель функции — вернуть корректную форму слова в зависимости от указанного числа.

function declinationOfNumber(count, one, two, five) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastTwoDigits >= 5 && lastTwoDigits <= 20) {
    return five;
  }
  if (lastDigit > 1 && lastTwoDigits < 5) {
    return two;
  }
  if (lastDigit === 1) {
    return one;
  }
  return five;
}

{
  const count = 1;
  const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
  // Должна получиться строка: Вам пришло 1 сообщение
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 11;
  const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
  // Должна получиться строка: Вам пришло 11 сообщений
  console.log(`Вам пришло ${count} ${word}.`);
}
{
  const count = 21;
  const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
  // Должна получиться строка: Вам пришло 21 сообщение
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 33;
  const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
  // Должна получиться строка: Вам пришло 33 сообщения
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 45;
  const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
  // Должна получиться строка: Вам пришло 45 сообщений
  console.log(`Вам пришло ${count} ${word}.`);
}

{
  const count = 113;
  const word = declinationOfNumber(count, "сообщение", "сообщения", "сообщений");
  // Должна получиться строка: Вам пришло 113 сообщений
  console.log(`Вам пришло ${count} ${word}.`);
}

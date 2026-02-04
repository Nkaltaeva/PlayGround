// Вам нужно создать функцию createCompanyObject, которая сформирует объект, отражающий информацию о компании.

// Функция принимает 4 параметра:

// name (тип: строка) — название компании.
// address (тип: строка) — адрес компании.
// timeStart (тип: строка) — время начала работы компании (например, "9:00").
// timeEnd (тип: строка) — время окончания работы компании (например, "22:00").
// Функция должна вернуть объект, у которого будут следующие свойства:

// name — значение переданного параметра name.
// address — значение переданного параметра address.
// time — строка, сформированная на основе timeStart и timeEnd в формате "timeStart - timeEnd" (например, "9:00 - 22:00").
// {
//   name: "ТехКорп",
//   address: "ул. Технологий, 123",
//   timeStart: "9:00",
//   timeEnd: "18:00",
// };
// Sample Output 1:
// {"name":"ТехКорп","address":"ул. Технологий, 123","time":"9:00 - 18:00"}

function createCompanyObject(name, address, timeStart, timeEnd) {
  const time = `${timeStart} - ${timeEnd}`;
  const obj = {
    name: name,
    address: address,
    time: time,
  };

  return obj;
}
console.log(createCompanyObject());

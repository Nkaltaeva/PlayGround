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


// Посчитаем ингредиенты
// Напишите функцию cakes(recipe, ingredients), которая рассчитывает количество пирожных, которое мы можем испечь. Функция принимает два объекта: 

// recipe - рецепт, в котором прописаны ингридиенты и их количество для приготовления одного пирожного.
// ingredients - доступные ингредиенты, которые мы имеем на кухне.

// Функция должна вернуть максимальное количество пирожных, которое можно испечь (целое число).

// Примечание
// Для простоты, не существует единиц измерения количества (например, 1 фунт муки или 200 г сахара - это просто 1 или 200).
// Ингредиенты, которых нет в предметах, можно рассматривать как 0.
// Выводить ничего не нужно, необходимо только реализовать функцию.
const recipe = {
  apples: 3,
  flour: 300,
  sugar: 150,
  milk: 100,
};
const ingredients = {
  sugar: 500,
  flour: 2000,
  milk: 2000,
  apples: 25,
};

function cakes(recipe, ingredients) {
  let count = [];
  for (const component in recipe) {
    if (component in ingredients) {
      count.push(Math.floor(ingredients[component] / recipe[component]));
    } else {
      count.push(0);
    }
  }
  return Math.min(...count);
}
console.log(cakes());


// waterPlants() — метод, который уменьшает уровень воды на 10 единиц за каждое растение на грядке и выводит сообщение: Все растения политы.
// Если воды не хватает на поливку всех растений, тогда робот ничего не поливает, но выводит сообщение: Не хватает воды, пополните бак!.
// refillWater() — метод, который полностью заполняет бак робота (устанавливает waterLevel в 100) и выводит сообщение: Бак с водой пополнен.

const robot = {
  plants: ["морковь", "помидор", "картофель"],
  waterLevel: 100,

  waterPlants() {
    const plantsCount = this.plants.length;
    if (plantsCount > 10) {
      console.log("Робот не может полить более 10 растений.");
      return;
    }
    const waterNeeded = plantsCount * 10;
    if (this.waterLevel >= waterNeeded) {
      this.waterLevel -= waterNeeded;
      console.log("Все растения политы");
    } else {
      console.log("Не хватает воды, пополните бак!");
    }
  },
  refillWater() {
    this.waterLevel = 100;
    console.log("Бак с водой пополнен.");
  },
};

console.log(robot);
robot.waterPlants();\

// Анализ коллекции космических артефактов
// Реализуйте функцию analyzeArtifacts(artifacts), которая будет анализировать коллекцию космических артефактов и выводить результаты. Каждый артефакт передается в виде объекта с уникальным идентификатором, типом, годом создания и количеством показов. Ваша функция должна:

// Вывести список всех артефактов в формате:
// Артефакт [ИД]: Тип - [Тип], Год - [Год], Показы - [Количество показов]

// Найти артефакты с наибольшим количеством показов и вывести их информацию.
// Подсчитать, сколько артефактов каждого типа хранится в музее и вывести результат.
// Между каждым заданием, в выводе, должна быть пустая строка.

// const artifacts = {
//   A101: { type: "метеорит", year: 1890, exhibits: 15 },
//   A102: { type: "луноход", year: 1973, exhibits: 20 },
//   A103: { type: "скафандр", year: 1969, exhibits: 12 },
//   A104: { type: "спутник", year: 1957, exhibits: 20 },
//   A105: { type: "луноход", year: 1971, exhibits: 10 },
// };
// function analyzeArtifacts(artifacts) {
//   for (const id in artifacts) {
//     const { type, year, exhibits } = artifacts[id];
//     console.log(
//       `Артефакт ${id}: Тип - ${type}, Год - ${year}, Показы - ${exhibits}`
//     );
//   }

//   console.log("");

//   const maxExhibits = Math.max(
//     ...Object.values(artifacts).map((a) => a.exhibits)
//   );

//   console.log(
//     `Артефакты с наибольшим количеством показов (количество показов ${maxExhibits}):`
//   );

//   for (const id in artifacts) {
//     if (artifacts[id].exhibits === maxExhibits) {
//       const { type, year } = artifacts[id];
//       console.log(`${id}: Тип - ${type}, Год - ${year}`);
//     }
//   }

//   console.log("");

//   const typeCount = {};
//   for (const id in artifacts) {
//     const type = artifacts[id].type;
//     typeCount[type] = (typeCount[type] || 0) + 1;
//   }

//   console.log("Количество артефактов по типу:");
//   for (const type in typeCount) {
//     console.log(`${type}: ${typeCount[type]}`);
//   }
// }

// console.log(analyzeArtifacts(artifacts));

// Артефакт A101: Тип - метеорит, Год - 1890, Показы - 15
// Артефакт A102: Тип - луноход, Год - 1973, Показы - 20
// Артефакт A103: Тип - скафандр, Год - 1969, Показы - 12
// Артефакт A104: Тип - спутник, Год - 1957, Показы - 20
// Артефакт A105: Тип - луноход, Год - 1971, Показы - 10

// Артефакты с наибольшим количеством показов (количество показов 20):
// A102: Тип - луноход, Год - 1973
// A104: Тип - спутник, Год - 1957

// Количество артефактов по типу:
// метеорит: 1
// луноход: 2
// скафандр: 1
// спутник: 1






// Необходимо вывести в консоль объект, в котором будут свойства:

// name - имя пользователя, например "Иван".
// address - строка вида "Город, Улица", например "Москва, Красная площадь".
// friends - массив с именами всех друзей, например ["Мария", "Алексей"].
// notifications - массив с уведомлениями, которые активны у пользователя, в порядке их упоминания, например ["email", "push"].
// activityTypes - массив, с уникальными значениями всех типов активностей, в порядке их упоминания, без повторов, например ["workout", "reading"].

// const data = {
//   user: {
//     id: 1,
//     name: "Иван",
//     age: 30,
//     email: "ivan@example.com",
//     address: {
//       street: "Красная площадь",
//       city: "Москва",
//       postalCode: "101000",
//     },
//     hobbies: ["фотография", "путешествия", "чтение"],
//     friends: [
//       {
//         id: 2,
//         name: "Мария",
//         age: 28,
//         interests: ["живопись", "фотография"],
//       },
//       {
//         id: 3,
//         name: "Алексей",
//         age: 32,
//         interests: ["спорт", "музыка", "путешествия"],
//       },
//     ],
//   },
//   settings: {
//     theme: "dark",
//     notifications: {
//       email: true,
//       sms: false,
//       push: true,
//     },
//     language: "ru",
//   },
//   activities: [
//     {
//       type: "workout",
//       date: "2023-10-01",
//       duration: 60,
//       details: {
//         activityType: "бег",
//         distance: 5,
//       },
//     },
//     {
//       type: "reading",
//       date: "2023-10-02",
//       duration: 90,
//       details: {
//         bookTitle: "Война и мир",
//         pagesRead: 50,
//       },
//     },
//   ],
// };

// const name = data.user.name;
// const address = data.user.address.city + ', ' + data.user.address.street;

// const friends = [];
// for (let i = 0; i < data.user.friends.length; i++) {
//   friends.push(data.user.friends[i].name);
// }

// const notifications = [];
// const notificationSettings = data.settings.notifications;
// if (notificationSettings.email) {
//   notifications.push('email');
// }
// if (notificationSettings.sms) {
//   notifications.push('sms');
// }
// if (notificationSettings.push) {
//   notifications.push('push');
// }

// const activityTypes = [];
// const seenTypes = {}; 
// for (let i = 0; i < data.activities.length; i++) {
//   const type = data.activities[i].type;
//   if (!seenTypes[type]) { 
//     activityTypes.push(type);
//     seenTypes[type] = true;
//   }
// }

// const result = {
//   name: name,
//   address: address,
//   friends: friends,
//   notifications: notifications,
//   activityTypes: activityTypes
// };

// console.log(result);




// Генератор персонажей
// Ваша задача — разработать объект character, который используется для создания игровых персонажей. Объект должен поддерживать методы с возможностью chaining, чтобы можно было вызывать их последовательно.

// Персонаж должен обладать следующими характеристиками:

// Имя (name) - имя персонажа.
// Класс (class) — например, "Воин", "Маг", "Лучник".
// Уровень (level) — начальное значение: 1.
// Список навыков (skills) — изначально пустой массив.
// Объект должен поддерживать следующие методы:

// setName(name) — устанавливает имя персонажа.
// setClass(className) — устанавливает класс персонажа.
// addSkill(skill) — добавляет новый навык в массив навыков.
// levelUp() — увеличивает уровень персонажа на 1.
// getSummary() — возвращает строку с описанием персонажа, например: 
// Имя: Артур, Класс: Маг, Уровень: 3, Навыки: Атака огнем и Ледяная стрела

                  
// Пример
// const hero = character
//   .setName("Химмель")
//   .setClass("Воин")
//   .addSkill("Уворот")
//   .addSkill("Прямая атака")
//   .addSkill("Геройская атака")
//   .levelUp()
//   .levelUp()
//   .levelUp();

// // Имя: Химмель, Класс: Воин, Уровень: 4, Навыки: Уворот, Прямая атака и Геройская атака
// console.log(hero.getSummary());

                  
// Обратите внимание вывод навыков, вывод зависит от их количества.

// Если навыков нет, то необходимо написать просто слово "нет".
// Если навык один, то выводим его.
// Если навыков несколько, тогда необходимо выводить их через запятую, кроме последнего навыка, перед ним ставим "и".
// Подсказка
// Для реализации цепочки методов, нужно возвращать сам объект this из каждого метода, за исключением тех, которые возвращают данные (getSummary).
// Примечание
// Ничего выводить не нужно, ваша задача - создать объект с правильными методами и свойствами. Проверка будет осуществляться автоматически.
// Никаких проверок на ввод данных делать не нужно.

const character = {
    name: '',
    class: '',
    level: 1,
    skills: [],
  
    setName(name) {
      this.name = name;
      return this;
    },
  
    setClass(className) {
      this.class = className;
      return this;
    },
  
    addSkill(skill) {
      this.skills.push(skill);
      return this;
    },
  
    levelUp() {
      this.level++;
      return this;
    },
  
    getSummary() {
      let skillsSummary;
  
      if (this.skills.length === 0) {
        skillsSummary = 'нет';
      } else if (this.skills.length === 1) {
        skillsSummary = this.skills[0];
      } else {
        const lastSkill = this.skills[this.skills.length - 1];
        const otherSkills = this.skills.slice(0, -1).join(', ');
        skillsSummary = `${otherSkills} и ${lastSkill}`;
      }
  
      return `Имя: ${this.name}, Класс: ${this.class}, Уровень: ${this.level}, Навыки: ${skillsSummary}`;
    }
  };
  

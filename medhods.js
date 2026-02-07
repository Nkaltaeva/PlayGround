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
robot.waterPlants();

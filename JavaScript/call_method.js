const teacher = {
  firstName: "Minh",
  lastName: "Thao",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const me = {
  firstName: "Huu Nghia",
  lastName: "Nguyen",
};

teacher.getFullName.call(me); //Huu Nghia Nguyen //mượn hàm getFullName của teacher cho me
teacher.getFullName.call(teacher); //Minh Thao

function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  Animal.call(this, name, weight); //Gọi hàm Animal với this của Chicken
  this.legs = legs;
}

const chicken = new Chicken("Gà", 2, 2);
console.log(chicken); //Chicken { name: 'Gà', weight: 2, legs: 2 }

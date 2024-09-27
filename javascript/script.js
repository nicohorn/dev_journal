var x = 5;
var y = 10;

function sum(a, b) {
  return a + b;
}

sum(x, y);

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " says woof!");
};

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Zeus");

dog1.bark();
dog2.bark();

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(this.name + " meows");
  }
}

const cat1 = new Cat("Spicey");
const cat2 = new Cat("Juana");

cat1.meow();
cat2.meow();

Cat.prototype.mad = function () {
  console.log(this.name + " got mad");
};

cat2.mad();

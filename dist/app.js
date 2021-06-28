"use strict";
let userA;
userA = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
userA.greet("Hi there _ I am");
let user1;
user1 = {
    name: "Max",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there _ I am");
class Human {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
const Gambo = new Human("Gambo");
Gambo.name = "Chika";
Gambo.greet("Hello");
console.log(Gambo);
let add;
add = (a, b) => a + b;
console.log(add(12, 13));
let addFn;
addFn = (n, n1) => n + n1;
class Boyo {
    constructor(name) {
        this.name = name;
    }
}
class Boyo1 {
    constructor(name, outputName) {
        this.name = name;
        this.outputName = outputName;
    }
}
class Parent {
    constructor(age, name) {
        if (name) {
            this.Name = name;
        }
        this.age = age;
    }
}
const mrOjo = new Parent(24);
console.log(mrOjo);
//# sourceMappingURL=app.js.map
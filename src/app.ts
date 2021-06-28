type PersonA = {
  readonly name: string;
  age: number;
  greet(phrase: string): void;
};

let userA: PersonA;

userA = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

userA.greet("Hi there _ I am");

//USING AN INTERFACE TO DEFINE AN OBJECT TYPE

interface Person {
  readonly name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

// user1.name = "John";

user1.greet("Hi there _ I am");

interface Named {
  readonly name: string;
}

// INTERFACE USed TO provide methods that  classes can implement.
interface Greetable extends Named {
  // Extended interface
  greet(phrase: string): void;
}

class Human implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

const Gambo = new Human("Gambo");
Gambo.name = "Chika";
Gambo.greet("Hello");

console.log(Gambo);

// REFRESHER ON DEFINING FUNCTION TYPES

type addFn = (a: number, b: number) => number;

let add: addFn;

add = (a: number, b: number) => a + b;

console.log(add(12, 13));

// USING INTERFACES TO CREATE FUNCTION TYPES

interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (n: number, n1: number) => n + n1;

// OPTIONAL PARAMETERS AND PROPERTIES

interface NamedP {
  readonly name: string;
  outputName?: string;
}

// Here outputName is not implemented
class Boyo implements NamedP {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

// Here outputName is implemented
class Boyo1 implements NamedP {
  name: string;
  outputName?: string | undefined;

  constructor(name: string, outputName: string) {
    this.name = name;
    this.outputName = outputName;
  }
}

class Parent {
  Name?: string;
  age: number;

  constructor(age: number, name?: string) {
    if (name) {
      this.Name = name;
    }

    this.age = age;
  }
}

const mrOjo = new Parent(24);

console.log(mrOjo);

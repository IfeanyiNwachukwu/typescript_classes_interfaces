abstract class Department {
  static fiscalYear = 2021;
  // private name: string;
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }
  // describe1() {
  //   console.log("Department:" + this.name);
  // }

  // describe2 = () => {
  //   console.log("Department:" + this.name);
  // };

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee = (employee: string) => {
    this.employees.push(employee);
  };

  employeeInformation = () => {
    console.log(this.employees.length);
    console.log(this.employees);
  };
}

// class ITDepartment extends Department {
//   constructor(id: string, public admins: string[]) {
//     // with shortcut syntax in the constructor
//     super(id, "ITDepartment"); // Feeding the parent class constructor with its own argumenrs
//   }
// }

//Private properties are only accessible in the class where they are defined and not in inherited classes

class ITDepartment extends Department {
  Admins: string[];
  constructor(id: string, admins: string[]) {
    // with shortcut syntax in the constructor
    super(id, "ITDepartment"); // Feeding the parent class constructor with its own argumenrs
    this.Admins = admins;
  }

  describe() {
    console.log("IT Department - ID:" + this.id);
  }
}

class accountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(val: string) {
    if (!val) {
      throw new Error("please pass in a valid value");
    }
    this.addReport(val);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounts Department");
    this.lastReport = reports[0];
  }
  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
  addEmployee = (name: string) => {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  };
  addReport = (text: string) => {
    this.reports.push(text);
    this.lastReport = text;
  };
  printReport = () => {
    console.log(this.reports);
  };
}

// const accounting = new Department("Accounts Department");
// No issue because the arrow function was used to define the method in the accounting class. This will always refer to the original class and not the calling class
// const accountingCopy1 = { describe: accounting.describe2 };
// accountingCopy1.describe();
// // Here an arrow function was not used and the this keyword would always refer to the calling object which is accountingCopy2 and because describe was not defined the method returns undefined
// const accountingCopy2 = { describe: accounting.describe1 };
// accountingCopy2.describe();

// const accountingCopy3 = { name: "DUMMY", describe: accounting.describe };
// accountingCopy3.describe();

// The readonly property can only be used once after initialization

const itDepartment = new ITDepartment("IT1A", ["Gambo", "Sacred"]);

console.log(itDepartment);

const accountsDepartment = new accountingDepartment("Acc01", [
  "something went wrong",
  "reports are to be attended to",
  "reports are due",
]);

accountsDepartment.addEmployee("Adebowale Ciroma");
accountsDepartment.addEmployee("Max");
accountsDepartment.addReport("bug issues to deal with");
accountsDepartment.employeeInformation();
// accountsDepartment.printReport();

accountsDepartment.mostRecentReport =
  "Carelessness and a cavalier attitude to writing reports";
console.log(accountsDepartment);
accountsDepartment.printReport();

const employee1 = Department.createEmployee("Obichukwu");

console.log(employee1);
console.log(Department.fiscalYear);
accountsDepartment.describe();
itDepartment.describe();

// SINGLETONS
// The singleton ensures that we can only have a single instance of a class at any time/ We do that by making the constructor private
class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment; // store accounting Department instance

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounts Department");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountDepartment.instance) {
      return this.instance;
    }
    return (this.instance = new AccountDepartment("d2", []));
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
  addEmployee = (name: string) => {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  };
  addReport = (text: string) => {
    this.reports.push(text);
    this.lastReport = text;
  };
  printReport = () => {
    console.log(this.reports);
  };

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(val: string) {
    if (!val) {
      throw new Error("please pass in a valid value");
    }
    this.addReport(val);
  }
}

const acc1 = AccountDepartment.getInstance();
const acc2 = AccountDepartment.getInstance();

console.log(acc1);
console.log(acc2);

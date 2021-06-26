"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.addEmployee = (employee) => {
            this.employees.push(employee);
        };
        this.employeeInformation = () => {
            console.log(this.employees.length);
            console.log(this.employees);
        };
    }
    static createEmployee(name) {
        return { name: name };
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "ITDepartment");
        this.Admins = admins;
    }
    describe() {
        console.log("IT Department - ID:" + this.id);
    }
}
class accountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounts Department");
        this.reports = reports;
        this.addEmployee = (name) => {
            if (name === "Max") {
                return;
            }
            this.employees.push(name);
        };
        this.addReport = (text) => {
            this.reports.push(text);
            this.lastReport = text;
        };
        this.printReport = () => {
            console.log(this.reports);
        };
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(val) {
        if (!val) {
            throw new Error("please pass in a valid value");
        }
        this.addReport(val);
    }
    describe() {
        console.log("Accounting Department - ID: " + this.id);
    }
}
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
accountsDepartment.mostRecentReport =
    "Carelessness and a cavalier attitude to writing reports";
console.log(accountsDepartment);
accountsDepartment.printReport();
const employee1 = Department.createEmployee("Obichukwu");
console.log(employee1);
console.log(Department.fiscalYear);
accountsDepartment.describe();
itDepartment.describe();
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounts Department");
        this.reports = reports;
        this.addEmployee = (name) => {
            if (name === "Max") {
                return;
            }
            this.employees.push(name);
        };
        this.addReport = (text) => {
            this.reports.push(text);
            this.lastReport = text;
        };
        this.printReport = () => {
            console.log(this.reports);
        };
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
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(val) {
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
//# sourceMappingURL=classes.js.map
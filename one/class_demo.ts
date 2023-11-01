class Employee {
  name: string;
  age: number;
  isOnRoll: boolean;

  constructor(name: string, age: number, isOnRoll: boolean) {
    this.name = name;
    this.age = age;
    this.isOnRoll = isOnRoll;
  }

  print(): void {
    console.log(`My student name is ${this.name}. He's ${this.age} `);
  }
}

// let newStudent = new Student('Abdul Alii', 21,true);

// newStudent.print()

// Inheritance

class Company extends Employee {
  employeeId: number;
  constructor(name: string, age: number, isOnRoll: boolean, employeeId: number) {
    super(name, age, isOnRoll);
    this.employeeId = employeeId;
  }
}

let com = new Company("MD. Asadul Islam", 30, true, 101);

console.log(com)

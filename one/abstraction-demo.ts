// abstract class couldn't able to create a new object and couldn't any method with body.
// it can be extend

abstract class Car {
  model: string;
  name: string;
  id: number;
  constructor(model: string, name: string, id: number) {
    this.model = model;
    this.name = name;
    this.id = id;
  }

  abstract print(): void;
}

class Tesla extends Car {
  constructor(model: string, name: string, id: number) {
    super(model, name, id);
  }

  print(): void {
    console.log(this.model)
  }
}


let c = new Tesla('vilbo', 'tesla', 123);

c.print();

console.log(c)
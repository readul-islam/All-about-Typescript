// protected member in class can be inherit another class
// can't change out side of class

// private member in class can't be inherit another class(just made for this class)
// can't change out side of class

// readonly member in class can be inherit another class
// can't change/modify out side of class

class Developer {
  protected name: string;
  title: string;
  experienceYear: number;
  protected pin: number;

  constructor(name: string, title: string, experienceYear: number) {
    this.name = name;
    this.title = title;
    this.experienceYear = experienceYear;
    this.setPin();
  }

  private setPin(): void {
    this.pin = this.experienceYear * 2;
  }

  changePin(newPin: number): void {
    this.pin = newPin;
  }

  readPin(): void {
    console.log(`Your pin is ${this.pin}`);
  }
}

let s = new Developer("MD Akash Mahbub", "Software Developer", 2023);
s.readPin();

class Architecture extends Developer {
  constructor(name: string, title: string, experienceYear: number) {
    super(name, title, experienceYear);
  }
}

let d = new Architecture("Sagor", "jr developer", 2020);

d.readPin();

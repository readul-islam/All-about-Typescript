// built in data types : string, number, boolean , void, null , undefined

let age: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isStudent: boolean;

age = 22;
firstName = "Abdul ";
lastName = "Alii",
fullName = firstName.concat(lastName);
isStudent = true;

function printName(): void {
  console.log(fullName);
}
printName()
type User = {
  name: string;
  age: number;
  email: string;
  contact: string;
};

let users1: Array<User>;

users1 = [
  {
    name: "Readul",
    age: 20,
    email: "readul@gmail.com",
    contact: "+8801758819483",
  },
];

type Method = "GET" | "POST";

let requestType: Method;

requestType = "GET";

// union data Type help us for declare multiple data types

let userId: string | number;
userId = "101";
userId = 101;
console.log(userId);

function sendId(userId: string | number): number | string {
  return userId;
}

console.log(sendId(20));

// enum important for constant variables;
// string enum
enum Status {
  Rejected = "rejected",
  Approved = "approved",
  Pending = "pending",
}
console.log(Status['Approved'])



// numeric enum
enum RequestData{
    readData,
    saveData,
    editData
}
console.log(RequestData['readData'])


// heterogeneous enum
enum Status1 {
    Rejected = "rejected",
    Approved = "approved",
    Pending = "pending",
    id=1
  }
  console.log(Status['Approved'])
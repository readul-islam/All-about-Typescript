// enum important for constant variables;
// string enum
var Status;
(function (Status) {
    Status["Rejected"] = "rejected";
    Status["Approved"] = "approved";
    Status["Pending"] = "pending";
})(Status || (Status = {}));
console.log(Status['Approved']);
// numeric enum
var RequestData;
(function (RequestData) {
    RequestData[RequestData["readData"] = 0] = "readData";
    RequestData[RequestData["saveData"] = 1] = "saveData";
    RequestData[RequestData["editData"] = 2] = "editData";
})(RequestData || (RequestData = {}));
console.log(RequestData['readData']);
// heterogeneous enum
var Status1;
(function (Status1) {
    Status1["Rejected"] = "rejected";
    Status1["Approved"] = "approved";
    Status1["Pending"] = "pending";
    Status1[Status1["id"] = 1] = "id";
})(Status1 || (Status1 = {}));
console.log(Status['Approved']);

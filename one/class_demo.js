var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age, isOnRoll) {
        this.name = name;
        this.age = age;
        this.isOnRoll = isOnRoll;
    }
    Employee.prototype.print = function () {
        console.log("My student name is ".concat(this.name, ". He's ").concat(this.age, " "));
    };
    return Employee;
}());
// let newStudent = new Student('Abdul Alii', 21,true);
// newStudent.print()
// Inheritance
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(name, age, isOnRoll, employeeId) {
        var _this = _super.call(this, name, age, isOnRoll) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    return Company;
}(Employee));
var com = new Company("MD. Asadul Islam", 30, true, 101);
console.log(com);

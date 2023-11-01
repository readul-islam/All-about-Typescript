// protected member in class can be inherit another class
// can't change out side of class
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
// private member in class can't be inherit another class(just made for this class)
// can't change out side of class
// readonly member in class can be inherit another class
// can't change/modify out side of class
var Developer = /** @class */ (function () {
    function Developer(name, title, experienceYear) {
        this.name = name;
        this.title = title;
        this.experienceYear = experienceYear;
        this.setPin();
    }
    Developer.prototype.setPin = function () {
        this.pin = this.experienceYear * 2;
    };
    Developer.prototype.changePin = function (newPin) {
        this.pin = newPin;
    };
    Developer.prototype.readPin = function () {
        console.log("Your pin is ".concat(this.pin));
    };
    return Developer;
}());
var s = new Developer("MD Akash Mahbub", "Software Developer", 2023);
s.readPin();
var Architecture = /** @class */ (function (_super) {
    __extends(Architecture, _super);
    function Architecture(name, title, experienceYear) {
        return _super.call(this, name, title, experienceYear) || this;
    }
    return Architecture;
}(Developer));
var d = new Architecture("Sagor", "jr developer", 2020);
d.readPin();

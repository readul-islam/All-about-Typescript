// abstract class couldn't able to create a new object and couldn't any method with body.
// it can be extend
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
var Car = /** @class */ (function () {
    function Car(model, name, id) {
        this.model = model;
        this.name = name;
        this.id = id;
    }
    return Car;
}());
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, name, id) {
        return _super.call(this, model, name, id) || this;
    }
    Tesla.prototype.print = function () {
        console.log(this.model);
    };
    return Tesla;
}(Car));
var c = new Tesla('vilbo', 'tesla', 123);
c.print();
console.log(c);

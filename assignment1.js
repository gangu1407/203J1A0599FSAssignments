//1st task
var n = 1;
var s = 'gangotri';
var b = false;
var arr = [1, 2, 3, 4];
var t = ["gangotri", 20];
var cars;
(function (cars) {
    cars[cars["BMW"] = 0] = "BMW";
    cars[cars["BENZ"] = 1] = "BENZ";
    cars[cars["AUDI"] = 2] = "AUDI";
    cars[cars["THAR"] = 3] = "THAR";
})(cars || (cars = {}));
var user = {
    name: "gangotri",
    age: 20,
    email: "203j1a0599@raghuinstech.com"
};
//2nd task 
var num1;
var num2;
function add2(num1, num2) {
    return num1 + num2;
}
function capital(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
//4th task
var Car = /** @class */ (function () {
    function Car() {
        this.make = "BMW";
        this.model = "B29";
        this.year = 2024;
    }
    Car.prototype.displayInfo = function () {
        console.log("make:" + this.make);
        console.log("model:" + this.model);
        console.log("year:" + this.year);
    };
    return Car;
}());
//5th task
function reversearray(arr) {
    return arr.reverse();
}
var displayinfo = new Car();
displayinfo.displayInfo();
var p = add2(1, 2);
var q = capital("gangotri");
var r = reversearray([1, 3, 4, 5, 7]);
console.log(p);
console.log(q);
console.log(r);

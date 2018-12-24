"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inject_1 = require("./Inject");
var Factory_1 = require("./Factory");
var t = /** @class */ (function () {
    function t() {
    }
    t.prototype.sayHello = function () {
        console.log("hello");
    };
    return t;
}());
Inject_1.Provider(t);
var Person = /** @class */ (function () {
    function Person(t) {
        this.t = t;
    }
    Person.prototype.sayName = function () {
        console.log(this.name || "Anonymous");
    };
    return Person;
}());
var p = Factory_1.Factory(Person);
p.t.sayHello();
//# sourceMappingURL=test.js.map
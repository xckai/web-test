"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Inject_1 = require("./Inject");
var Factory_1 = require("./Factory");
var t = (function () {
    function t() {
    }
    t.prototype.sayHello = function () {
        console.log("hello");
    };
    return t;
}());
Inject_1.Provider(t);
var Person = (function () {
    function Person(t, o) {
        if (o === void 0) { o = 1; }
        this.t = t;
        this.o = o;
    }
    Person.prototype.sayName = function () {
        console.log(this.name || "Anonymous");
    };
    return Person;
}());
Person = __decorate([
    Inject_1.Inject(),
    __metadata("design:paramtypes", [Array, Number])
], Person);
var p = Factory_1.Factory(Person);
p.sayName();
//# sourceMappingURL=test.js.map
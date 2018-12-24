import { Inject, Provider } from "./Inject";
import { Factory } from "./Factory";

class t {
  name: 123;
  sayHello() {
    console.log("hello");
  }
}
Provider(t);
class Person {
  constructor(public t: t) {}
  name: string;
  sayName() {
    console.log(this.name || "Anonymous");
  }
}
let p = Factory(Person);
p.t.sayHello();

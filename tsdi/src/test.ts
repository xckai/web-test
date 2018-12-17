import {Inject, Provider}from './Inject'
import { Factory } from './Factory';

class t{
    name:123
    sayHello(){
        console.log("hello")
    }
}
Provider(t)
@Inject()
class Person{
    constructor(private t:[],private o:number=1){
    
    }
    name:string
    sayName(){
        console.log(this.name||"Anonymous")
    }
}
let p=Factory(Person)
p.sayName()



"use strict"
let persion={
    name:"xiaoming",
    age:19
}
Object.preventExtensions(persion)
console.log(persion)
function showName(){
    console.log(this.name)
}
showName.bind(persion)()
function assignName(name){
    return function(target){
        target.name=name
    }
}
function logName(target,name,descriptor){
    let oldValue=descriptor.value;
    descriptor.value=function(){
        console.log(`Caller name is ${this.name}`)
        return oldValue.apply(this,arguments)
    }
}

let a={
    name:1
};

let b={name:2};
[a,b]=[b,a]
console.log(a,b)
console.log('你好𠮷'.length)
console.log(parseInt("12",16))
console.log(Number(188).toString(16))
let Stack=function(){
    let data=[2],
    method=['push',"pop",'length']
    return new Proxy(data,{
        get:function(target,key){
            if(!!~method.indexOf(key)){
                console.log(target,key)
                return target[key].bind(target)
            }else{
                return undefined
            }
        }
    })
}


import {STORAGEMAP,STORAGESET} from './StorageMap'
import  'reflect-metadata'
export function Factory<T>(fn:{new(...args): T; }):T{
    let args= Reflect.getMetadata("design:paramtypes",fn)||[]
    args.forEach(a=>{
        console.log(STORAGEMAP,a)
        console.log(STORAGEMAP.has(a))
        console.log(STORAGEMAP.get(a))
    })
   
    return new fn(...args)
}
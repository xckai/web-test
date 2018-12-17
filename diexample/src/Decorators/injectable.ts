import { INJECTABLE_STORE } from "../Store/injectable.store";

export function Injectable(){
    return function(target){
        console.log("INJECTABLE_STORE adding ",target)
        INJECTABLE_STORE.register(target);
        return target;
    }
}
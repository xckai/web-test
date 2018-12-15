
let action=(i)=>Math.pow(i,2)
function circulate(acc,action){
    let n=performance.now()
    for(let i=0;i<acc;++i){
        let t= action(i)
    }  
    return performance.now()-n
}
function circulateReverse(acc,action){
    let n=performance.now()
    for(let i=acc;i>=0;--i){
        let t= action(i)
    }  
    return performance.now()-n
}
function getAverageBentchmark(fun,iterateAcc,args){
    let t=0;
    for(let i=1;i<iterateAcc;++i){
        t+=fun.apply(null,args)
    }
    return t/iterateAcc
}
function duff(acc,action){
    let n=performance.now()
    let iterate=Math.ceil(acc/16)
    let startAt=n%16
    let i=0;
    do{
        switch(startAt){
            case 0: action(i++);
            case 15: action(i++);
            case 14: action(i++);
            case 13: action(i++);
            case 12: action(i++);
            case 11: action(i++);
            case 10: action(i++);
            case 9: action(i++);
            case 8: action(i++);
            case 7: action(i++);
            case 6: action(i++);
            case 5: action(i++);
            case 4: action(i++);
            case 3: action(i++);
            case 2: action(i++);
            case 1: action(i++);
        }
        startAt=0
    }while(--iterate)
    return performance.now()-n
}
window.onload=function(){
    setTimeout(()=>{
        let n=100000000
        let circleTime=getAverageBentchmark(circulate,20,[n,action])
        let duffTime=getAverageBentchmark(duff,20,[n,action])
        let circulateDiv=document.createElement("div")
        circulateDiv.textContent=`Circulation consume ${circleTime} ms`
        let circleReverseTime=getAverageBentchmark(circulateReverse,20,[n,action])
        let circulateReverseDiv=document.createElement("div")
        circulateReverseDiv.textContent=`Circulation Reverse consume ${circleReverseTime} ms`
        let duffDiv=document.createElement("div")
        duffDiv.textContent=`Duff consume ${duffTime} ms`
        document.body.append(circulateDiv)
        document.body.append(circulateReverseDiv)
        document.body.append(duffDiv)
    },1000)
}

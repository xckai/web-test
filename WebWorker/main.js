let res=[]
window.onload=function(){
    let blob=new Blob([document.querySelector("#worker").textContent])
    let url=window.URL.createObjectURL(blob)
    res.push("inline worker init time(ms):")
    for(let i=1;i<5;++i){
        let s=performance.now()
        let w=new Worker(url)
        res.push(performance.now()-s)
        w.terminate()
    }
    res.push("js file worker init time(ms)")
    let urlWork="./worker.js"
    for(let i=1;i<5;++i){
        let s=performance.now()
        let w=new Worker(urlWork)
        res.push(performance.now()-s)
        w.terminate()
    }
    
   setTimeout(()=>{
    res.push("Post info test")
    let post=new Worker(urlWork)
    let s=performance.now()
   
    for(let i=1;i<5;++i){
        post.postMessage(i)
    }
    post.onmessage=function(e){
        res.push(e.data+"--"+(performance.now()-s))
    }
   },1000)
    setTimeout(()=>{
        res.push("fib calation test")
        let fib=new Worker(urlWork,{name:"fib"})
        let ss=performance.now()
        for(let i=1;i<5;++i){
            fib.postMessage(i*10)
        }
        fib.onmessage=function(e){
            res.push(e.data+"--"+(performance.now()-ss))
        }
        fib.onerror=function(e){
            console.error(e)
        }
    },2000)


    setInterval(()=>{
        document.querySelector("body").innerHTML=""
        let ul=document.createElement("ul")
        res.forEach(r=>{
            let li=document.createElement("li")
            li.textContent=r
            ul.appendChild(li)
        })
        document.querySelector("body").appendChild(ul)
    },2000)
   
}





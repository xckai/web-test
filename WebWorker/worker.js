onmessage=function(e){
    let v=e.data
    if(self.name=='fib'){
        postMessage(fibonacci(v))
    }else{
        postMessage(v)
    }
  
}
function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
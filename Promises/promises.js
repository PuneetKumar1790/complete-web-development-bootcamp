const promiseOne= new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography,network callls
    setTimeout(function(){
        console.log("Async is complete")
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})

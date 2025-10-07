//async - async marks a function that will return a promise

async function hello(){

}


const sayBye = async function(){

}


const sayHello = async () => {

}


//await - process the function execution until a promise is resolved (or rejected)
//it makes asynchronous code look and behave like


function fetchData(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("data loaded");

        },2000)
    })
}

async function getData(){
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
    
}

getData();
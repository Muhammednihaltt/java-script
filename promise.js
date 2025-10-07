//a promise in js is an object that represent the eventual completion or failure of a asynchronous operation and its resulting value

//resolve - called when the operation is success
//reject - called when the operation fails

//.then - execute if the promise is resolved
//.catch - executes when the promise is rejected
//.finally - executes regardless of wheather the promise is rejected

//creating promise

let myPromise = new Promise((resolve,reject) => {
 
    let success = true;
    setTimeout(()=>{
    if (success) {
        resolve("promise resolved successfully")

    } else {
        reject("promise rejected")
    }

    },2000)
});


myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(()=>console.log("promire execution finished")
)
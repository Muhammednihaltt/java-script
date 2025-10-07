// function passing another function as an argument
//features
//1-asynchronous operation
//2-customized behaviour of general puropos functions
//3-avoid blocking code execution

// this is our callback function
function greetUser(nihal){
    console.log(`hi ${nihal}`);
}

//this function takes another functions (callback function ) as an argument
function getUserInput(callback){
    const name ="eva";
    callback(name) //calling the callback function the user's name 
}

getUserInput(greetUser);


// pyramid of boom (callback hell)
// multiple nested callback make the code difficult read  and maintain

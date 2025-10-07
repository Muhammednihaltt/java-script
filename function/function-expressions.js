// function expression is a way to define a function inside an expression and assign into a variable
// const sum =function(){
//     block of codes
// }
const greet = function () {
    console.log("hi");
}
greet();// calling function
console.log(typeof greet);//check the type


//key features
//1-anonymous or named
//2-not hoisted
//3-can be used as argument
//4-can be used as assigned to variables/objects
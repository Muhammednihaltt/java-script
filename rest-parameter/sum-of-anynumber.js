function sum (...numbers){
       return numbers.reduce((total, num) => total + num,0)
}
console.log(sum(1,2));
console.log(sum(3,5,7,8));
console.log(sum(12.34,56,23));
//logical AND (&&)
console.log("true && true: ", true && true);
console.log("true && false: ", true && false);

let a = 2;
let b = 21;

let x = a > b && b > a
console.log(x);

// logical or (||)

console.log("true || false: ", true || false);
console.log("false || false: ", false || false);

let y = a > b || b > a
console.log('OR: ', y);

//logical NOT  (!)
console.log("!true: ", true);
console.log("!false:", !false);
let z = !(a > b) //!(2 > 21)
console.log("NOT: ", z);





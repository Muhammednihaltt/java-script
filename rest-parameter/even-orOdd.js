const prompt = require('prompt-sync')();


function checkOddEven(...numbers) {
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(`${num} is Even`);
        } else {
            console.log(`${num} is Odd`);
        }
    });
}

let input = prompt("Enter numbers separated by spaces: ");

let numArray = input.split(" ").map(Number);

checkOddEven(...numArray);
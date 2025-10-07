for (let i = 0; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row);    
}
// pyramid.js
let n = 5; // number of rows

for (let i = 1; i <= n; i++) {
  let row = "";

  // spaces
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }

  // stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    row += "*";
  }

  console.log(row);
}

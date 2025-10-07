const students = [ 
    {name:'head', age:32, grade:'A'},
    {name:'smith', age:36, grade:'A+'},
    {name:'marsh', age:36, grade:'B'}
]

//accessing datas
console.log(students[0].name);
console.log(students[1].grade);

//looping through object array

students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old`);
    
})
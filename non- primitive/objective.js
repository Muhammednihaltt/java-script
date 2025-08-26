const person = {
name: "akash",
age: 22,
isstudent: false

}
console.log(person.name);
console.log(person.age);
// add or modify datas
person.city = " new york"
console.log(person)
//delete city from person details
delete person.city;
console.log('final person details is:' ,
     person);
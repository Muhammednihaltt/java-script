//same as reduce(), but works from right to left
const value = [1,2,3].reduceRight((acc,num) => acc - num)
console.log(value);
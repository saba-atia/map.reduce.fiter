const numbers=[1,2,3,4,5,6,7,8,9,10];
const result=numbers
.filter(num =>num%2===0)
.map(num =>num*2)
.reduce((sum,curr) =>sum+curr);

console.log(result);

const numbers=[1,2,3,4,5];
const averageNumbers=(arr)=>
    arr.map(x=>x**2)
.reduce((sum,curr)=>sum+curr,0 )/ arr.length;

const result=averageNumbers(numbers);
console.log(result);
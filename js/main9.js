const num=[1,2,3,4,5,6,7,8,9,10];

const num2=num.filter(num=>num%2!==0);
console.log(num2);

const num3=num.filter(num=>num%2===0||num%5===0);
console.log(num3);

const num4=num.filter(num=>num%3===0).map(num=>num**2);
console.log(num4)

const num5=num.filter(num=>num%5===0).map(num=>num**2).reduce((sum,curr)=>sum+curr);
console.log(num5);
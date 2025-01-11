let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let nums2=nums.filter(num=>num%2===0);
let nums3=nums2.map(num=>num**2);
let sum=nums.reduce((acc,curr)=>acc+curr);
console.log(`squaredEvenNums: ${nums3}`);
console.log(`Sum of array elements: ${sum}`);
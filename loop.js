// for(let i=0;i<9;i++ ){
//     console.log(i);
// }
// console.log("--------------");
// const nums=[7,2,3,4,5,6,7];
// for(let n of nums)
// console.log(n);

// find sum of all numbers from 100 to 300 whichare divisible by 7
let sum=0;
for(let i=100;i<=300;1++){
    if(i%7=== 0 && i%11===0 ){
        console.log(i);
        sum+= i;

    }
}
console.log("sum:", sum);
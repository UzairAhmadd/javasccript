function addNums(a,b){
    c=a+b;
console.log(c);
return c;

}
const ans = addNums(345, 1234);

// console.log(ans);

const getAvg= function(m1,m2,m3){
    return (m1+m2+m3)/3;
}
const avg= getAvg(34, 56,78);
console.log(avg);

// es6 function

const factorial = (n) =>{
    let fact =1 ;
    for(let i=1; i<=n;i++){
        fact *=i;
    }
    return fact; 
}
console.log(factorial(5));
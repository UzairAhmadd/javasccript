const nums= [2,6,1,7,2,8,4,93];
for(let  i=0;i<nums.length;i++){
    console.log(nums[i]);
}
for(let i of nums){
    console.log(i);
}
console.log('forEachfunction');
nums.forEach( (n) => {console.log(n);} );


//sum of all element of array

let um=0
nums.forEach( (i) => { um+=i} );
console.log('sum;', um);

// create a new  array with cube of all arrar elements

let myarr =[];
for(let i of nums){
    myarr.push(i**3);

};
console.log(myarr);


const prices =['$687.35','$23.4', '$123.45','$987.652'];
//remover $ sign and conert it into number
//output  = [ 687, 23, 123, 987 ]
console.log(parseInt('$687.35'.slice(1))); 
const numprices=[];

prices.forEach( (p) => {numprices.push(parseInt(p.slice(1)))})
console.log(numprices);


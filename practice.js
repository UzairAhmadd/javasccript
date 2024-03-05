// 1- given nums = [23, 29,99,32,67,30,41] create new array containing only even number

nums = [23, 29,99,32,67,30,41];
arr=[];
for (let i=0;i<=nums.length;i++){
  if(nums[i]%2==0){
    arr=nums[i];
    console.log('Even number is',arr);
}
}

// 2- create a new array containing square of each elements of above array

nums = [23, 29,99,32,67,30,41];
arr=[];
for (let i=0;i<=nums.length-1;i++){
arr=nums[i]*nums[i];
console.log( 'Square of each element', nums[i], 'is',arr);
}
// using foreachloop
nums = [23, 29,99,32,67,30,41];
let i;
arr=0;
nums.forEach( (i) => {i=i*i

    console.log('square',i);
}

);
// 

//3-  given prices =[2300,150,5600,2500,900] create new array with price less than 3000 and greater thn 2000

prices =[2300,150,5600,2500,900]
arr=[];
for (let i=0;i<=prices.length-1;i++){
if(prices[i] < 3000 && prices[i] > 2000){
    arr= prices[i];
    console.log('price less than 3000 and greater than 2000:', arr);
    
}
}
// using foreach loop
// prices =[2300,150,5600,2500,900]
// let i;
// prices.forEach( (i) => {if (i<3000 && i>2000){
    
//     console.log(i);
// } } );
// 
// 4- create a new array containing first name of each full name in another array
str=['uzair ahmad', 'ashfaque ahmad','ayan alam'];
arr=[];

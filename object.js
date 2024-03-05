const user={name: 'raju',email: 'raju@gmail.com',password: '1234'};
console.log(user.name);
console.log(user.email);
console.log(user['password']);

user.password='abrakadabra'// for changing  value
console.log(user);
user.address = 'lucknow';// for adding value
console.log(user);
delete user.address;//for deleting value
console.log(user);

console.log(Object.keys(user));// for accessing all keys
console.log(Object.values(user));  //for accessing all values


const smartphone ={ 
    brand: "samsung",
    model:"s23",
    prices:"79999",
    colors :['black', 'blue', 'silver']
};
console.log(smartphone.prices);
console.log(smartphone.colors[2]);
console.log(smartphone.colors[1]);
smartphone.colors[1]='red';
console.log(smartphone.colors);




const phonerarr = [
    {
    brand : "samsung",
    model:"s23",
    prices:"79999",
    colors :['black', 'blue', 'silver']
},{
brand : "apple",
model:"iphone15",
prices:"90000",
colors :['black', 'blue']
},
{
    brand : "onleplus",
    model:"12",
    prices:"50000",
    colors :['red', 'blue', ]
},
{
    brand : "vivo",
    model:"y335",
    prices:"35000",
    colors :['gold', 'silver']
}];
console.log(phonerarr[2].colors[1]);
phonerarr[3].prices=5000;
console.log(phonerarr)
phonerarr[1].colors.push('red');
console.log(phonerarr);
 
const pp=phonerarr.filter((n)=>{return n.prices>60000});
console.log(pp)



console.log("---------");
// filter all 
const tr=phonerarr.filter((n)=>{return n.colors.includes('red')});
console.log(tr);



console.log("---------");

const models = phonerarr.map((phone) => { return phone.model});
console.log(models);


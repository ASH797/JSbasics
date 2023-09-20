let ar1=[1,2,3,4,5];
let ar2=[22,33,44];

let ar3=[ar1,ar2];
let ar4=ar1.concat(ar2);////correct way
console.log(ar3);//not correct way to combine as it make a seperate array inside the original one 
console.log(ar4);

ar5=[...ar1,...ar2];//correct way
console.log(ar5);


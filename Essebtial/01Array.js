let ar1=[1,2,3,4,5];
let ar2=new Array(2,3,4,5);
                             
// console.table([ar1,ar2]);

// let sar1=ar1.slice(1,3);/
// let sar2=ar2.splice(1,3);

// console.table([sar1,sar2]);
// console.table([ar1,ar2]);

let sh1= ar1.unshift(9);
let sh2= ar1.shift(9);

console.table([sh1,sh2]);

console.log(ar1);
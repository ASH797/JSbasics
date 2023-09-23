const ar=[1,2,3,4,5];

const redAr=ar.reduce((ac,cv)=>{return ac+cv},1);

console.log(redAr);

const shoppingCart=[
    {
        price: 100,
        bookName: 'Lost Island'
    },

    {
        price: 300,
        bookName: 'Lst Island'
    },

    {
        price: 700,
        bookName: 'Los Island'
    }
];

const netCost=shoppingCart.reduce((ac,cv)=>{return ac+cv.price},0)//cv.price refers to price of each object

console.log(netCost);

const mapAr=shoppingCart.map((item)=>item.price+100);

console.log(mapAr);
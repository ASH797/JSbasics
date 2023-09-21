(function add(a1,a2)
{
    console.log(a1+a2); 
})(7,8);//semicolon is important for 2 IIFE to clear the pollution in global scope

((a1,a2)=>console.log(a1+a2))(2,3)


// function myFunction (a, n)
// {
// return a[n+1];
// }
// console.log(myFunction("abcde",0));


// let array = [1,-2,3,-1,-5]
// function myFunction (a){
//     return a.filter(b=> b< 0).length;
    

// };

// console.log(myFunction(array));

let array=[7,2,1,6,3,4,5,8,9,10]
function myFunction(a,n){

    return a.filter((e,i) => i% n ===n-1);
}
console.log(myFunction(array,2));
////ARROW FUNCTION


const saludar = function(nombre){
    console.log(`Hola ${nombre}`)
};

saludar("Daniel");

const saludar2 = (saludarArrow) => {
    console.log(`Hola ${saludarArrow}`)
};

saludar2("Jose");



let primarios = ["Red","Blue","Yellow"];
let secundarios = ["Purple","Green","Orange","Grey"];

const fusionArrays = (function(array,array2){
    console.log(array.concat(array2))
});

//fusionArrays(primarios,secundarios);

const arrowFuctionFusion = (array,array2) => {
    console.log(array.concat(array2))
};

//arrowFuctionFusion(primarios,secundarios);

///////////////////////////////////////////////////////////////////////

// FILTER

const numeros = [1,2,3,4,5,7,8,9];
//mayores => mayores >= 3
const resultado = numeros.filter(function(mayores){
    return mayores > 3;
})

//console.log(resultado)

///REDUCE
const index = 2;
const suma = numeros.reduce((previousValue, currentValue) => previousValue + currentValue ,index)
console.log(suma);


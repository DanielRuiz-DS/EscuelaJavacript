// Tipos de variables
// Number, Boolean and string
let year = 2022; // tipo numerica
const hola = ` HOLa MeNCOS `; // tipo string
let booleanos = true; //tipo booleana
console.log(typeof hola); // retorna el tipo de dato de la variable

//PROPIEDADES Y METODOS PARA STRINGS 
console.log(hola.length); // tomar la longitud del string length
console.log(hola.toLocaleLowerCase()); // tomar string y convertirlo a minusculas
console.log(hola.toUpperCase()); // tomar string y convertirlo a mayusculas
console.log(hola.trim()); // tomar string y convertirlo a mayusculas

////OPERADORES ARITMETICOS

console.log( 1 + 1);
console.log( 1 - 1);
console.log( 5 * 2);
console.log( 0 / 10);
console.log( "Hola" + " Mundo");

////OPERADORES ASIGNACION 

let x = 98;
x += 1; // x = x + 1
x -= 2;
x *= 2;
x /= 2;
x %= 2; // x = x % 2
x **= 2;
// == igualdad pero no estricta (intenta convertir el valor de la variable)
// != ineguldad 
// === igualdad pero estricta 
// !== inegualdad estricta

//OPERADORES LOGICOS
// AND &&
// OR ||
x = 0;
let y = 1;
if(y === "1" || x == 1){
    console.log("VERDADERO")
}
else {console.log("falso")}

////FUNCION BASICA

function suma(a,b){
    console.log(a + b)
}

suma(x,y);

///CONDICIONALES BASICOS

if ( 10 < 5){
    console.log("verdadero")
} else if(2 > 3 ) {
    console.log("mayor")
}else{

}
/// ARRAYS

let listaDeFrutas = ["apple","melon","papaya"]
console.log(listaDeFrutas[0] + "\n" +  listaDeFrutas[1] + "\n" + listaDeFrutas[2])

/// OBJETO 

let usuarios = {
    name:"DANIEL",
    apellido:"RUIZ",
    edad:"23",
    altura:"120",
    nombreCompleto: function(){
        return this.name + " " + this.apellido;
    }
};

console.log(usuarios.nombreCompleto())






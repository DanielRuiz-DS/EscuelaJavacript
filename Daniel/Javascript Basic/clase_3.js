// PROPIEDADES DE LOS ARRAY
//PUSH
let animals = ['tigre','leon','jirafa']
animals.push('gallina','gato')
//console.log(animals)

//POP
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop()
//console.log(plants);


//SHIFT
let array1 = [1,2,3];
array1.shift()
//console.log(array1)

//unshift
let array2 = [1,2,3];
array2.unshift(10,20);
//console.log(array2);

///CONCAT
let array3 = ['a','b','d']
let array4 = ['d','e','f']
let array5 = array3.concat(array4)
//console.log( array5)

///JOIN
let array6 = ['a','b','d']
let array7 = array6.join('#')
//console.log(array7);

///SLICE
let array8 = ['daniel','oscar','jose','cuastu']
//console.log(array8.slice(-1));

///indexOf
array8 = ['daniel','oscar','jose','cuastu','pedro','jose']
//console.log(array8.indexOf('jose',3))

//INCLUDES
//console.log(array8.includes('oscar',1));

//FIND
//[10,20,1,2,3]
//console.log(array2.find(item => item > 2));

//FINDINDEX
//console.log(array2.findIndex(item => item < 2));

//MAP

let users = [
    {
    nombre:"danie", 
    calificaciones:[3,4,5]},
    {
    nombre:"jose", 
    calificaciones:[1,2,5]
    }
]

const averagePerUser = users.map((user)=>{
    const scores = user.calificaciones
    let sumatoria = 0;
    for (let i = 0; i < scores.length; i++){
        sumatoria += scores[i];
    }
    const average = sumatoria / scores.length;
    let structureObjects = 
        {
            nombre: user.nombre,
            puntajeTotal: average
        }
    return structureObjects
});
console.log(averagePerUser);




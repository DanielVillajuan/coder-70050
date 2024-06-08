


//  let persona1 = {
//     nombre: 'Daniel'
//  }

 const persona2 = {
    nombre: 'Pedro'
 }

//  persona2.apellido = 'Villa'

// console.log(persona2.apellido)

//  persona2.nombre = 'Fabio'

//  console.log(persona2.domicilio) //
 
 
//  console.log(Boolean(0)) // false


//  if(null){
//     console.log('verdero')
//  }else {
//     console.log('falso')
//  }



// function nombreDeLaFuncion(){
//     this

// }


// const flecha = (a,b) => {
//     return a + b
// }


// const anonimas = function(){

// }

// const persona = new nombreDeLaFuncion()


// SCOPE


// const texto = 'Hola'

// function saludo(){

//     console.log(texto)
// }


// saludo(); // Hola


// Template string

// const texto = "Hola " + nombreDeUsuario + " buenas noches"
// const textoTS = `Hola ${nombreDeUsuario} buenas noches '
// 23123
// 21312
// 3213
// 21
// 312
// 3
// `


// Closures


function multiplicarPor(numero){
   return (otroNumero) => {
        return numero * otroNumero
   }
}


const multiplo = multiplicarPor(2); 
const resultado = multiplo(100)

console.log(resultado) // 200

//indexB.js
const tablaPosiciones = [{
    id: 'a',
    puntos: 20,
    nombre: 'Boca'
},{
    id: 'b',
    puntos: 21,
    nombre: 'River'
}]

// indexA.js
// const equipoA = {id: 'b', puntos:21, nombre:''}
// const equipoB = {id: 'b', puntos:21, nombre:''}



// tablaPosiciones.map(actualizarEquipos(equipoA, equipoB))

// function actualizarEquipos(equipoA,equipoB){
//     return (team) => {
//         if(team.id === equipoA.id){
//             // logica para actualizar y retornar el equipo actualizo
//         }
//         if(team.id === equipoB.id){
//             // logica para actualizar y retornar el equipo actualizo
//         }
//         return team
//     }
// }


// class Persona{
//     constructor(){
        
//     }

//     async hablar(){
//         console.log("Hola!!!" + this.nombre)
//         await 
//     }
// }


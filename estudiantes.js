const readlineSync = require('readline-sync')

// function estudiantes(){
//     const cant = parseInt(prompt('Ingrese la cantidad de estudiantes:'))
//     const estudiantes = []
//     for(let i = 0; i < cant; i++){
//         let nombre = prompt('Ingrese el Nombre del Estudiante:')
//         let edad = parseInt(prompt('Ingrese la Edad del Estudiante:'))
//         let estudiante = {nombre, edad}
//         estudiantes.push(estudiante)
//     }

//     console.log('Estudiantes registrados:');
//     for(let i = 0; i < estudiantes.length; i++){
//         console.log(`Estudiante: ${estudiantes[i].nombre} de ${estudiantes[i].edad} años.`);
//     }
// }

function estudiantes(){
    const cant = parseInt(readlineSync.question('Ingrese la cantidad de estudiantes:'))
    const estudiantes = []
    for(let i = 0; i < cant; i++){
        let nombre = readlineSync.question(`Ingrese el Nombre del Estudiante N${i+1}: `)
        let edad = parseInt(readlineSync.question(`Ingrese la Edad del Estudiante N${i+1}: `))
        let estudiante = {nombre, edad}
        estudiantes.push(estudiante)
    }

    console.log('Estudiantes registrados:');
    for(let i = 0; i < estudiantes.length; i++){
        console.log(`Estudiante: ${estudiantes[i].nombre} de ${estudiantes[i].edad} años.`);
    }
}
estudiantes()
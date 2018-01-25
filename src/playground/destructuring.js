//Carlos Quintero -> Reporte de Horas...

// Object Destrcuting
// const book = {
//     title : 'Nombre del libro', 
//     author : 'Nombre del autor', 
//     publisher : {
//         name : 'Quién publica!'
//     }
// };

// if(book.publisher) {
//     const { name : publisherName = "Self Published"} =  book.publisher;
//     console.log(publisherName);
// }

// const person = {
//     name : 'Jorge', 
//     age : 33, 
//     location : {
//         city : "Cajicá", 
//         temp : 90
//     }
// };

// const { name : firstName = "Anónimo", age } = person;
// console.log(`${firstName} is ${age}.`);

// //Para renombrar...
// const { city, temp: temperature  } = person.location;
// if(city && temperature) {
//     console.log(`Es ${temperature} in ${city}`);
// }


//Array Destructing

//Agregar valores por defecto
// const [,,pais = "Ninguno"] = [];
// console.log(`Estás en ${pais}`);

// const [, ciudad, departamento] = ['27263 La estación', 'Cajicá', 'Cundinamarca', '3345'];
// console.log(`Estás en ${ciudad} ${departamento}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
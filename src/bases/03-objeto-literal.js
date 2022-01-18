const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New york',
        zip: 55321321,
        lat: 14.3232,
        lng: 349233321
    }
};

// console.log({persona});
// console.table({persona});
console.log( persona );

// const persona2= persona; // psara crear un clon
const persona2 = {...persona}; //este es un clon de objeto y se usara mi¿ucho en react
persona2.nombre = 'Peter';

console.log(persona2)
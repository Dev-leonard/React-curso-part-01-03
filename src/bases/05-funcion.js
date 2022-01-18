// funciones en js

//  const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`; // mejor es trabajar con funciones de flecha es sumanete usado en react
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({  // retorna pero sin  usar return
    uid: 'ABC123',
    username: 'El_papi1254'
});

const user = getUser();
console.log( getUser() );

// tarea
// 1. Transformar a uan fuancion de flecha
// 2. Tiene que retornar un o0bjeto implicito
// 3. pruebas

/*function getUsuarioActivo( nombre ){
    return {
        uid: 'ABC548',
        username: 'patito'
    }
};
const usuarioActivo = getUsuarioActivo('Leonardo');
console.log( usuarioActivo );*/

// solucion n°1,2,3

const getUsuarioActivo  = ( nombre ) => ({
        uid: 'ABC548',
        username: 'patito'
    });

const usuarioActivo = getUsuarioActivo('Leonardo');
console.log( usuarioActivo );

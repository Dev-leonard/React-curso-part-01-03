

const nombre = 'Edwin';
const apellido = 'Leon';

/*varias  formas de concatenar en js*/
// const nombreCompleto = nombre + ''+ apellido;
// const nombreCompleto = ` Hola Mundo `;
const nombreCompleto = ` ${ nombre } ${ apellido } `;
// const nombreCompleto = `
// ${ nombre }
// ${ apellido }
// ${ 1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return ' Hola ' + nombre;
}

console.log(`Este es un texto : ${getSaludo(nombre) }`);

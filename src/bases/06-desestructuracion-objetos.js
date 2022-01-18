
// Desestruccuracion
//Asigancion Desestructurante


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

// const {nombre}= persona;
// const {nombre:  nombre2}= persona;
// const {edad, clave, nombre} = persona;
//
//
// console.log(nombre);
// console.log(edad);
// console.log(clave);


const useContext = ( {nombre,clave, edad, rango= 'capitan'}) => {
    // const { edad, clave, nombre } = usuario;
    // console.log(nombre,clave, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);

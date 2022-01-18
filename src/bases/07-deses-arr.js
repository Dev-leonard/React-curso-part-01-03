
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const  [, ,p2] = personajes; // se trabaja con comas
console.log(p2);



const retornaArreglo = () => {
    return ['ABC', 123];
}
const [ letras , numeros ] = retornaArreglo();
console.log(letras, numeros)

// Tarea
//1. el primer valor del arr se llamará nombhre
//2. se llamamra setNombre.

const useState = ( valor ) => {
    return [valor , () => {console.log('Hola Mundo')}];
}
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();

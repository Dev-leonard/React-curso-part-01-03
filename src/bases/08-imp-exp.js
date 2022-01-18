// import{ heroes } from'./data/heroes';
// import { heroes } from './data/heroes';
import heroes from '../data/heroes';

// console.log( owners );
// console.log(heroes);

// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) => {
//       if(heroe.id == id ) {
//           return true;
//       }else{
//           return false;
//       }
//     });
// }


// const getHeroeById = (id) => {
//     return heroes.find((heroe) => heroe.id === id);

    // tambien puede ser

   export  const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
    // console.log(getHeroeById(4));


   export  const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner )
// console.log( getHeroesByOwner('Marvel'));


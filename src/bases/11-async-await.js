// const getImagenPromesa = () => {
//     const promesa  = new Promise((resolve, reject) => {
//         resolve('https://ajsfkjfdfskj.com')
//     })
//     return promesa;
// }
// getImagenPromesa().then( console.log);


// otra forma simplificando codigo

// const getImagenPromesa = () => new Promise(resolve => resolve('https://ajsfkjfdfskj.com'))
//
// getImagenPromesa().then( console.log);
//
//
// // orta forma usando Async
//
// const getImage = async() => {
//     return 'https://ajsfkjfdfskj.com';
// }
// getImagen().then( console.log );


// usando el await


const getImagen = async() => {


    try {

        const apiKey = '8EbwyTaNGK63TsKqoupMNTX5ZrpD7LxP';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        console.log(url)

    } catch (error) {
        // manejo de error
        cosnole.log(error)

    }



}

getImagen();


//
//
//
//
// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//
//
//         const img = document.createElement('img');
//         img.src = url;
//
//         document.body.append( img);
//     })
//     .catch(console.warn);
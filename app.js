//////// MAP

//EJERCICIO 1

// const numeros = [1, 2, 3, 4, 5];

// let numerosMasDiez = numeros.map(numero => numero + 10)

// console.log(numeros); // [1, 2, 3, 4, 5]
// console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

//EJERCICIO 2

// const numeros = [3, 7, 13, 99];

// const dobles = numeros.map(numero => numero*2)

// console.log(numeros); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]

//EJERCICIO 3

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// const frasesExclamadas = frases.map(frase => `¡${frase}!`)

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//EJERCICIO 4

// const librosDeJS = [
//     'JavaScript for Kids: A Playful Introduction to Programming',
//     'Composing Software',
//     'Eloquent JavaScript: A Modern Introduction to Programming',
//     'JavaScript: The Good Parts',
//     'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//     'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//     'JavaScript: The Definitive Guide',
//     'You Don’t Know JS',
//     'JavaScript Allongé: The Six Edition'
// ];

// const itemsDeLibrosdeJS = librosDeJS.map(libro =>   `<li>${libro}</li>`)  

// console.log(librosDeJS);
// console.log(itemsDeLibrosdeJS);  

//   //const listaDeLibros = itemsDeLibrosdeJS.map(item => `<ul>${item}</ul>`)
//   console.log(`<ul>${itemsDeLibrosdeJS}</ul>`);  

//   // el resultado final debería ser
//   // <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul


//EJERCICIO 5

// const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// const longitudes = frases.map(frase => frase.length)


// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(longitudes); // [ 17, 18, 16 ]

//EJERCICIO 6

// const playlist = ['Everlong', 'The Pretender', 'Learn to Fly'];

// const agregandoNumero = playlist.map((cancion, index) => ` ${index} - ${cancion}`)

// console.log(agregandoNumero);


// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

//EJERCICIO 7

// const costos = [ 12.5, 56, 98, 45.75 ];

// const agregarIVA = (costo) => {
//   return costo * 1.21;
// }

// const sumarGanancia = (costo) => {
//   return costo * 1.5;
// }

// const preciosFinales = costos.map(costo => costo *1.21 *1.5);


// console.log(preciosFinales);
// // deberia mostrar
// // [ 22.6875, 101.64, 177.87, 83.03625 ]


//EJERCICIO 8

// const productos = [ 'celular', 'notebook', 'monitor' ];
// const costos = [ 12.5, 56, 98 ];

// const agregarIVA = (costo) => {
//   return costo * 1.21;
// }

// const sumarGanancia = (costo) => {
//   return costo * 1.5;
// }


// const preciosFinales = costos.map((costo, index) => `${productos[index]} ${costo * 1.21 *1.15}`)

// console.log(preciosFinales);
// // deberia mostrar
// // [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

//////// FILTER

//EJERCICIO 1

// const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ];

// const losMasCaros = costos.filter(costo => costo > 50)

// console.log(costos);
// console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

//EJERCICIO 2

// const masNumeros = [ 43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32 ];

// const numerosPares = masNumeros.filter(numero => numero % 2 === 0);
// const numerosImpares = masNumeros.filter(numero => numero % 2 !== 0)

// console.log("pares: ", numerosPares);
// console.log("impares: ", numerosImpares);
// // deberias tener como resultado
// // pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// // impares: [43, 11, 37, 29, 9, 3, 37, 25]

//EJERCICIO 3

// const mix = [
//     'Ut vero.',
//     2,
//     function () { console.log('hola mundo!') },
//     56,
//     'Diam rebum nonumy et.',
//     true,
//     false,
//     'Kasd stet.',
//     'Sit et dolor.',
//     null,
//     null,
//     [ 1, 2, 3],
//     'Dolore.'
// ];
// //console.log(typeof mix[0])
// const soloStrings = mix.filter(str => typeof str === 'string') 

// console.log(soloStrings);
  // deberia mostrar
  // [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

//EJERCICIO 4

const playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium'];
const playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']


// const playlistSinEscuchar = playlist.filter((cancion, index) => cancion === playlistEscuchada)

const playlistSinEscuchar = playlist.filter(cancion => playlistEscuchada.indexOf(cancion) === -1 ? true : false )

console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]


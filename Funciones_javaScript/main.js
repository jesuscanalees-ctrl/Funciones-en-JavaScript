//SOME
const numeros = [3, 7, 10, 18, 21];
const numeroMayor = numeros.some(num => num > 15);
const numeroPar = numeros.some(num => num % 2 === 0);
console.log(numeroMayor);
console.log(numeroPar);

//EVERY
const edades = [18, 22, 30, 25, 19];
const todosMayores = edades.every(edad => edad >= 18);
const numerosPares = edades.every(edad => edad % 2 === 0);
console.log(todosMayores);
console.log(numerosPares);

//FILL
let letras = ['a', 'b', 'c', 'd', 'e'];
let letra = ['a', 'b', 'c', 'd', 'e'];
letras.fill('x', 0, 3);
letra.fill('z', 2, 5);
console.log('x',letras);
console.log('z',letra);

//FILTER
const productos = [
    { nombre: 'Laptop', precio: 1200 },
    { nombre: 'Mouse', precio: 25 },
    { nombre: 'Teclado', precio: 75 },
    { nombre: 'Monitor', precio: 300 }
];
const productoCaro = productos.filter(p => p.precio > 100);
const nombreLargo = productos.filter(p => p.nombre.length > 5);
console.log(productoCaro);
console.log(nombreLargo);

//FIND
const alumnos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20},
    { nombre: 'Carmen', edad: 19 },
];
const mayor = alumnos.find(a => a.edad > 18);
const nombreLuis = alumnos.find(a => a.nombre === 'Luis');
console.log(mayor);
console.log(nombreLuis);

//FINDINDEX
const frutas = ['manazana', 'platano', 'pera', 'manago', 'uva'];
const indiceFruta = frutas.findIndex(P => P === 'pera');
const nombreFruta = frutas.findIndex(P => P.length >5);
console.log(indiceFruta);
console.log(nombreFruta);

//SET
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 5];
const setSinDuplicados = new Set(numerosDuplicados);
const arregloSinDuplicados = Array.from(setSinDuplicados);
setSinDuplicados.add(6);
console.log(setSinDuplicados);
console.log(arregloSinDuplicados);
console.log(setSinDuplicados.has(6));

//EJERCICIO
const personas = [
  { nombre: 'Ana', edad: 22, ciudad: 'Madrid' },
  { nombre: 'Irving', edad: 16, ciudad: 'Mexico' },
  { nombre: 'Ramiro', edad: 25, ciudad: 'Bogota' },
  { nombre: 'Fati', edad: 19, ciudad: 'Madrid' }
];

const mayoresPersonas = personas.filter(p => p.edad > 18);
const hayDeMadrid = personas.some(p => p.ciudad === 'Madrid');
const todosMayoress = personas.every(p => p.edad >= 18);
const personaDeMexico = personas.find(p => p.ciudad === 'Mexico');
const posicionAna = personas.findIndex(p => p.nombre === 'Ana');
console.log(mayoresPersonas);
console.log(hayDeMadrid);
console.log(todosMayoress);
console.log(personaDeMexico);
console.log(posicionAna);

















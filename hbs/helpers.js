const hbs = require('hbs');
//Helpers
hbs.registerHelper('getAnio', () => {

    return '2018'; // new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) =>{
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
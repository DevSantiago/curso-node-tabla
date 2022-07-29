const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

console.log( argv );


// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// //const base = 9;

crearArchivoTabla( argv['b'], argv['l'], argv['h'] )
.then( msg => console.log(msg))
.catch( err => console.log(err))


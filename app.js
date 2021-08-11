
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')



console.log('base: yargs', argv.base)

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch(error => console.log(error))


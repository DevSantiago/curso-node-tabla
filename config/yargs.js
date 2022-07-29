const argv = require('yargs')
                .option( 'b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el número hasta donde quieres la tabla.'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b )) {
                        throw 'La base tiene que ser un número.';
                    }

                    return true;
                })
                .argv;


module.exports = argv;
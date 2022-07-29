
const fs = require('fs');
const colors = require('colors')

const crearArchivoTabla = async( base, listar = false, hasta ) => {

    try {

        let salida, consola = '';
    
        return new Promise( (resolve, reject)  => {
    
            for( let i = 1; i <= hasta; i++ ){
                salida += ` ${ base } x ${ i } = ${ base * i } \n`;
                consola += ` ${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i } \n`;
            }
            
            if ( listar ) {
                        
                console.log('=========================='.green);
                console.log(' Tabla del: '.green, colors.blue(base) );
                console.log('=========================='.green);
                
                console.log(consola);
            }
            

            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida)
        
            return resolve(`La tabla del ${ base } ha sido creada.`); 
                
        });
        
    } catch (error) {
        throw error;
    }

}


module.exports = {
    crearArchivoTabla
}
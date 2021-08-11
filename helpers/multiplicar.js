const fs = require('fs')
const colors = require('colors')
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {



  let salida = ''
  for ( let i = 1; i <= hasta; i++){
    salida += `${base} x ${i} = ${base * i} \n`
  }

  if (listar){
    console.log('==================='.green)
    console.log(`Tabla del: ${base}`)
    console.log('==================='.green)
    console.log(salida);
  }
  

  try{
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
  }
  catch (error){
    throw error
  }
  

  return  `tabla-${ base }.txt`

}

module.exports = {
  crearArchivo
}
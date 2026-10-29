//setTime()
function notificardescarga(nombreArchivo){
    console.log("Notificacion: El archivo" + nombreArchivo + 
        "se ah descargado correctamente",);
}

function descargarArchivo(archivo, callbackAlTerminar){
    console.log("01. Iniciando descarga de:"+ archivo +".....");
    //Simulamos una demora 3 segundos (3000 milisegundos)
    setTimeout(function (){
    callbackAlTerminar(archivo);
    }, 3000);
}
descargarArchivo("manual_callbacks.pdf", notificardescarga);
console.log( "o3. El usuario puede seguir navegando por la pagina mientras se descarga el archivo");
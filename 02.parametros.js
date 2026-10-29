function mostrarTotl(montoTotal){
    console.log('El total a pagar con IVA incluido es: $'+ montoTotal)

}
function calcularPrecioConIva (precioBase, callbackMostrar){
    var iva = precioBase + 0.16;
    var total = precioBase + iva;
    //Ejecutamos el callback pasandole como argumento el 'total'
    callbackMostrar(total);
}

calcularPrecioConIva(100, mostrarTotal);
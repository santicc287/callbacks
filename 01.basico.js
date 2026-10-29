//DEFINIR LA FUNCION QUE SERVIRA COMO CALLBACK 
function despedirse(){
    console.log("Adios, hemos terminado la clase ");
}

//Declaramos la funcion principal que recibe 
// una funcion como parametro 

function iniciarProceso (miCallBack){
    console.log ("Iniciando el proceso principal.....")
    //Invocamos la funcion que recibimos como argumento 
    miCallBack();

}

//Llamamos a la funcion principal
//pasando 'despedirse' SIN parentesis 
iniciarProceso(despedirse);
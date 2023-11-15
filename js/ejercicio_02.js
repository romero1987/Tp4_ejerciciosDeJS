/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y 
volver a mostrar la descripción del estado de la cuenta.
 */

const cuenta  = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(a){
        cuenta.saldo += a;
        document.write(`<p>${cuenta.titular}, tu dinero ingresado es de:${a}</p>`)
    },
    extraer: function(b){
        cuenta.saldo -= b;
        document.write(`<p>${cuenta.titular}, el valor extraido es de: ${b}</p>`)
    },
    informar: function(){
        document.write(`<p>${cuenta.titular}, tu estado de cuenta es de: ${cuenta.saldo}</p>`)
    },
}

cuenta.ingresar(1000)
cuenta.extraer(250)
cuenta.informar()
function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == null || creditCardNumber == undefined) { //Prueba 1
    	return "Ingresa un numero";
    }

    if(typeof creditCardNumber != "number"){ //Prueba 2
    	return "Error de dato";
    } 


    if(diezyseisNumeros(creditCardNumber) != true){
    	return "Faltan numeros";
    }



}

function diezyseisNumeros(creditCardNumber) {
	numero = creditCardNumber.toString;
	if(numero.length == 16){
		return true;
	}
}

function validarTarejta(creditCardNumber){

}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}

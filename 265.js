// TO ROMAN CONVERTER

function numToArray(num){
    var arr = (""+num).split('').map(Number)
    console.log('numToArray -> arr', arr);
    return arr
}

function aDecimal(array){
    var datos={
        mil:'',
        centena:'',
        decena:'',
        unidad:''
    }

    for (let index = 0; index < array.length; index++) {
        datos.unidad = array[array.length - 1];
        datos.decena = array[array.length - 2]*10;
        datos.centena = array[array.length - 3]*100;
        datos.mil = array[array.length - 4]*1000;
    }
    
    console.log('aDecimal -> datos', datos);
    return datos;
}



function compute_mil(obj){
    var res = Object.values(obj);
    res = res.filter(Boolean)
    
    if(res.length >= 4){
        console.log('compute_mil -> res', res[res.length-4]);
        return res[res.length-4]
    }

    console.log('compute_mil -> res', res);
}









function convertToRoman(num) {

    var arr = numToArray(num); // separa los digitos a un array
    

    var objeto = aDecimal(arr); // crea un obj con unidades, decenas,  centenas y unidades de mil

    var mil = compute_mil(objeto);
    

    
    








    document.getElementById('target').innerText = `${objeto.mil}, ${objeto.centena}, ${objeto.decena}, ${objeto.unidad}` 
    return num;
}



   
convertToRoman(12984);
   
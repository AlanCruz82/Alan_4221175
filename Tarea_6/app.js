let tamanio = prompt("Dame el número de X que quieres pintar");

var estrellaUno = "";
var estrellaDos = "";

function pintarHorizontal(longitud){
    for (let index = 0; index < longitud; index++) {
        estrellaUno+= "X";
    }
    console.log(estrellaUno);
}

function pintarVertical(longitud){
    for (let index = 0; index < longitud; index++) {
        estrellaDos+= "X \n";
    }
    console.log(estrellaDos);
}

var cuadrado = "";

function pintarCuadrado(longitud){
    for (let index = 0; index < longitud; index++) {
        for (let index = 0; index < longitud; index++) {

        }
    }
}

function tablasMultiplicar(){
    for (let indexUno = 1; indexUno <= 10; indexUno++) {
        console.log("\n");
        for (let indexDos = 1; indexDos <= 10; indexDos++) {
            console.log("" + indexUno + "x" + indexDos + "= " + (indexUno*indexDos));
        }
    }
}

function funcionEspecial(){
    let frutas = ["Manzana", "Platano", "Mora", "Naranja", "Pera", "Sandia", "Pomelo", "Piña", "Uva", "Coco"];

    frutas.forEach(fruta => {
        console.log("" + (frutas.indexOf(fruta)+1) + "-. " + fruta)
    });
}

console.log("-----------------------------");
pintarVertical(tamanio);
console.log("-----------------------------");
pintarHorizontal(tamanio);
console.log("-----------------------------");
tablasMultiplicar();
console.log("-----------------------------");
funcionEspecial();
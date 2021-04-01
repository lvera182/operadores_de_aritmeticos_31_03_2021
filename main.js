

function incremento(numero){
    console.warn('Incremento');
    ++numero;
    numero++;
    console.log(numero);
}
function decremento(numero){
    console.warn('Decremento');
    --numero;
    numero--;
    console.log(numero);
}
function sumaEjemplo(){
    console.warn('sumaEjemplo');

    let numero = parseInt(prompt("Ingrese el numeroero 1"));
    let numero2 = parseInt(prompt("Ingrese el numeroero 2"));
    let numero3 = prompt("Ingrese el numeroero 3");
    let numero4 = parseInt(prompt("Ingrese el numeroero 4"));
    console.log(numero, typeof(numero));
    console.log(numero2, typeof(numero2));
    console.log(numero3, typeof(numero3));
    console.log(numero4, typeof(numero4));
    let res = 0;
    console.log(numero + numero2 + numero3 + numero4);
}
function calculadoraSignosBasicos(numero){
    console.warn('calculadoraSignosBasicos');
    console.log(numero-2);
    console.log(numero+2); 
    console.log(numero/2); 
    console.log(numero*2); 
    console.log(numero**2); 
}
function ejemploUnary(numero, numero2){
    console.warn('ejemploUnary');
    console.log( - (- (numero + (-numero2) - 5) ) + 3 );
}
function unaryNegativo(numero, numero2){
    console.warn('unaryNegativo');
    console.log(-numero); 
    console.log(-(numero2));
    ejemploUnary(numero, numero2);
}
function unaryPocitivo(numero, numero2){
    console.warn('unaryPocitivo');
    console.log(+numero); 
    console.log(+(numero2));
    ejemploUnary(numero, numero2);
}
decremento(5);
incremento(5);
calculadoraSignosBasicos(10);
unaryNegativo(10, -2);
unaryPocitivo(-10, 2);























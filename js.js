window.onload = colocarcajas();

var objeto = document.querySelector('.objeto');

var contadorCajas = 9;
var indice = 0;
//Colocamos las cajas que van a hacer de presentación
function colocarcajas() {
  var caja = document.getElementsByClassName('caja');
    for(var i=0; i<caja.length;i++){
      var anguloColocacion = i * (40);
      caja[i].style.transform= 'rotateY('+ anguloColocacion+'deg) translateZ('+ calcularProfundidad(9,210,360) +'px)';
    };
}
//Calculamos la profundidad en el ejeZ con la fórmula z = (width/2)/tan(grados)
function calcularProfundidad(numeroCajas,anchoCaja,gradosDistribucion) {
    var profundidad = null;
    this.gradosDistribucion = gradosDistribucion;                               //Grados en los que queremos distribuir las cajas
    this.numeroCajas = numeroCajas;                                             //Número de cajas
    this.anchoCajaCalculo = anchoCaja /2;                                       //Calculamos la mitad del ancho de la cada caja
    var anguloMitadCaja = (this.gradosDistribucion/this.numeroCajas)/2;         //Calculamos el ángulo del centro de la caja
    var tangente = Math.tan(anguloMitadCaja * Math.PI /180);                    //Tangente en la circunferencia
    profundidad = this.anchoCajaCalculo/tangente;                               //El resultado se incrusta en la translación del eje Z

  return Math.round(profundidad);
}
/*Función de rotación - Creamos un índice que indique la posición en la que nos encontramos,
  Dividimos el índice por el número de cajas y lo múltplicamos por los grados de la circunferencia
  Esto nos da el ángulo de rotación al que tiene que partir la circunferencia*/

function rotar() {
  var angulo = indice / contadorCajas * (-360);
  objeto.style.transform = 'translateZ(-288px) rotateY(' + angulo + 'deg)';
  objeto.style.transition = '1s';
}
//Ejecuta la función de rotación, añade al ínice uno, para de este modo calcular los grados de desviación 
var botonSiguiente = document.querySelector('.siguiente');
botonSiguiente.addEventListener( 'click', function() {
  indice++;
  rotar();
});
//Ejecuta la función de rotación, resta al ínice uno, para de este modo calcular los grados de desviación 
var botonAnterior = document.querySelector('.anterior');
botonAnterior.addEventListener( 'click', function() {
  indice--;
  rotar();
});



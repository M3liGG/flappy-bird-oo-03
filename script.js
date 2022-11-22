const juego = {
      timerId: 0,
    graveda: 2,

    aleatorio: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  

    // 12. Agrega el método loop()
    loop: function () {
     // Escribe codigo del método
    bird.efectoGravedad();
    bird.dibujar();
    juego.verificaColision()
    },
  
    // 13. Agrega el método iniciar()
    iniciar: function() {
      document.addEventListener("keyup", bird.mover);
      juego.timerId = setInterval(juego.loop, 20);
    }
  
  };
  



const bird = {
  div: document.querySelector(".bird")
   bottom: juego.aleatorio(10, 570),
    left: 250,
    width: 60,
    height: 45,

    efectoGravedad: function (){
      bird.bottom -= juego.gravedad;
    },

    dibujar: function () {
      bird.div.style.bottom = bird.bottom + "px";
      bird.div.style.left = bird.left + "px";
    }, 


  
  

    // 11. Agrega el método mover()
mover: function(){
  bird.bottom = 40 + bird.bottom
}
   

// llama a juego.iniciar()
juego.iniciar()

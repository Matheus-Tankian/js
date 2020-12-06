var x = true;
var count = 0;
var primeiraCelula;

var a1 = document.a1;

function putValue(celula) {
  this.count++;
  console.log(count);

  if (this.x) {
    celula.innerHTML = "X";
    this.x = false;
  } else {
    celula.innerHTML = "O";
    this.x = true;
  }

  setTimeout(function() {
    verificarResultado();
  }, 100);
}

function verificarResultado() {
  if (
    (c11.innerHTML != "" &&
      c12.innerHTML != "" &&
      c13.innerHTML != "" &&
      c11.innerHTML == c12.innerHTML &&
      c12.innerHTML == c13.innerHTML) ||
    (c11.innerHTML != "" &&
      c22.innerHTML != "" &&
      c33.innerHTML != "" &&
      c11.innerHTML == c22.innerHTML &&
      c22.innerHTML == c33.innerHTML) ||
    (c11.innerHTML != "" &&
      c21.innerHTML != "" &&
      c31.innerHTML != "" &&
      c11.innerHTML == c21.innerHTML &&
      c21.innerHTML == c31.innerHTML) ||
    (c21.innerHTML != "" &&
      c22.innerHTML != "" &&
      c23.innerHTML != "" &&
      c21.innerHTML == c22.innerHTML &&
      c22.innerHTML == c23.innerHTML) ||
    (c31.innerHTML != "" &&
      c32.innerHTML != "" &&
      c33.innerHTML != "" &&
      c31.innerHTML == c32.innerHTML &&
      c32.innerHTML == c33.innerHTML) ||
    (c12.innerHTML != "" &&
      c22.innerHTML != "" &&
      c32.innerHTML != "" &&
      c12.innerHTML == c22.innerHTML &&
      c22.innerHTML == c32.innerHTML) ||
    (c13.innerHTML != "" &&
      c23.innerHTML != "" &&
      c33.innerHTML != "" &&
      c13.innerHTML == c23.innerHTML &&
      c23.innerHTML == c33.innerHTML) ||
    (c31.innerHTML != "" &&
      c22.innerHTML != "" &&
      c13.innerHTML != "" &&
      c31.innerHTML == c22.innerHTML &&
      c22.innerHTML == c13.innerHTML)
  ) {
    
    if(this.x) {
      alert("\"O\" ganhou!");
      this.count = 0;
    } else {
      alert("\"X\" ganhou!");
      this.count = 0;
    }
    limpaCelulas();
  }

  if (this.count == 9) {
    alert("EMPATE");
    this.count = 0;
    limpaCelulas();
  }
}

function limpaCelulas() {
  for (var i = 1; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      var x = "c"+i+j;
      document.getElementById(x).innerHTML = "";
    }
  }
}
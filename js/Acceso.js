document.getElementById("capa").style.visibility = "hidden";
function Validar() {
  var contraseña = document.formulario.contraseña.value; //pepe
  var correcto = false;
  var nueva_contraseña = contraseña;
  while (correcto == false) {
    if (nueva_contraseña != "Greatfood") {
      nueva_contraseña = prompt("contraseña incorrecta introduce otra vez");
    } else {
      correcto = true;
      alert("correcto puedes acceder");
      visible_div();
    }
  }
}

function visible_div() {
  document.getElementById("capa").style.visibility = "visible";
}

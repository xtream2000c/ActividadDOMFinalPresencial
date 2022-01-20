window.onload = main;

var filas = 30;
var columnas = 30;
var zonaDibujo;
var tabla;

function main() {

    zonaDibujo = document.getElementById("zonadibujo");
    tabla = document.createElement("table");
    zonaDibujo.appendChild(tabla);

    tabla.style.border="1px solid black"

    for (var i = 0; i < filas; i++) {

        var fila = tabla.insertRow();
        for (var j = 0; j < columnas; j++) {
            
            var celda = fila.insertCell();
            celda.style.border="1px solid black"

            celda.style.width="10px";
            celda.style.height="10px";

            celda.id="";
            celda.className="";
            
        }
    }


}
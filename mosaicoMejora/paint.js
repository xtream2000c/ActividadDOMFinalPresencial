window.onload = main;

var filas = 30;
var columnas = 30;
var zonaDibujo;
var tabla;
var pincel;
var pincelActivo = false;
var celdas;
var paletaColores;
var celdaColores;
var lineaColores;
var clases;
var colorActual = "color1";
var limpiar;
var limpiaCeldas;
function main() {

    //Apartado selector de color

    pincel = document.getElementById("pincel");

    paletaColores = document.getElementById("paleta");
    lineaColores = paletaColores.getElementsByTagName("tr")[0];

    colorNuevo1 = document.createElement("td");
    colorNuevo2 = document.createElement("td");
    colorNuevo3 = document.createElement("td");

    lineaColores.appendChild(colorNuevo1);
    lineaColores.appendChild(colorNuevo2);
    lineaColores.appendChild(colorNuevo3);

    colorNuevo1.className = "color7";
    colorNuevo2.className = "color8";
    colorNuevo3.className = "color9";

    pincel.colSpan="9";

    celdaColores = lineaColores.getElementsByTagName('td');
    for (let index = 0; index < celdaColores.length; index++) {

        celdaColores[index].addEventListener("click", function () {
            
            for (let j = 0; j < celdaColores.length; j++) {
                clases = celdaColores[j].classList;
                clases.remove("seleccionado");
            }

            clases = celdaColores[index].classList;
            clases.add("seleccionado");
            colorActual = clases[0];

        });
        
    }

    //Apartado Tabla

    zonaDibujo = document.getElementById("zonadibujo");
    tabla = document.createElement("table");
    zonaDibujo.appendChild(tabla);

    tabla.style.border="1px solid black"

    for (var i = 0; i < filas; i++) {

        var fila = tabla.insertRow();
        for (var j = 0; j < columnas; j++) {
            
            var celda = fila.insertCell();
            celda.style.border="1px solid black";
            celda.style.width="10px";
            celda.style.height="10px";
            pintar();
            celda.addEventListener("click", function(){
                this.className=colorActual;

                if (pincelActivo) {
                    pincelActivo = false; 
                    pintar();
                }else{
                    pincelActivo = true;
                    pintar();
                }
                
            });
            celda.addEventListener("mouseover", function(){
                if (pincelActivo) {
                    this.className=colorActual;
                }           
            });
            
            celda.id="";
            celda.className="color6";

        }
    }

    //Mejora boton limpiar

    limpiar = document.createElement("button");
    zonaDibujo.appendChild(limpiar);
    limpiar.innerHTML="Limpiar el lienzo";
    limpiar.style.marginTop="30px";

    limpiar.addEventListener("click", function () {
        limpiaCeldas = tabla.getElementsByTagName("td");
        for (let iLimpieza = 0; iLimpieza < limpiaCeldas.length; iLimpieza++) {
           
            limpiaCeldas[iLimpieza].className="color6";

        }
        
        alert(limpiaCeldas)
    });

}

function pintar(){

    if (pincelActivo) {
        pincel.innerText = "Picel activo, ahora puedes pintar";
    }else{
        pincel.innerText = "Picel desactivado, ahora no puedes pintar";
    }

}
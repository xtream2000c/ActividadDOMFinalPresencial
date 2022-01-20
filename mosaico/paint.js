window.onload = main;

var filas = 30;
var columnas = 30;
var zonaDibujo;
var tabla;
var paletaColor;
var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
var colorActual = "color1";
var celdaActiva;
var pincel;
var pincelActivo = false;
var celdas;

function main() {

    //Apartado selector de color

    pincel = document.getElementById("pincel");

    paletaColor = document.getElementById("paleta");

    color1 = paletaColor.getElementsByClassName("color1");
    color2 = paletaColor.getElementsByClassName("color2");
    color3 = paletaColor.getElementsByClassName("color3");
    color4 = paletaColor.getElementsByClassName("color4");
    color5 = paletaColor.getElementsByClassName("color5");
    color6 = paletaColor.getElementsByClassName("color6");
    celdaActiva = color1;
    color1[0].addEventListener("click", function() {
        colorActual = "color1";
        celdaActiva=color1;
        activo();
    });
    color2[0].addEventListener("click", function() {
        colorActual = "color2";
        celdaActiva=color2;
        activo();
    });
    color3[0].addEventListener("click", function() {
        colorActual = "color3";
        celdaActiva=color3;
        activo();
    });
    color4[0].addEventListener("click", function() {
        colorActual = "color4";
        celdaActiva=color4;
        activo();
    });
    color5[0].addEventListener("click", function() {
        colorActual = "color5";
        celdaActiva=color5;
        activo();
    });
    color6[0].addEventListener("click", function() {
        colorActual = "color6";
        celdaActiva=color6;
        activo();
    });

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

}

function pintar(){

    if (pincelActivo) {
        pincel.innerText = "Picel activo, ahora puedes pintar";
    }else{
        pincel.innerText = "Picel desactivado, ahora no puedes pintar";
    }

}

//Cambia el color activo del selector de color

function activo() {

    color1[0].className="color1";
    color2[0].className="color2";
    color3[0].className="color3";
    color4[0].className="color4";
    color5[0].className="color5";
    color6[0].className="color6";

    celdaActiva[0].className = colorActual + " seleccionado";
}

//Funcion para comprobar que funciona Se emplea como metodo de depuracion mientras se escribe el codigo

function funciona() {
    alert("Esto funciona");
}
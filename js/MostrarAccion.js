function Editar(){

	alertify.prompt("Editar");
}

function Crear(){

	alertify.alert("Crear");
}

function Eliminar(){

	document.getElementById("traer").value = document.getElementById("cod").value;
}

function habilita(){
        elementos=document.getElementsByClassName("inputText");
        for(var i = 0; i < elementos.length; i++)
        {
            elementos[i].disabled = false;
        }
    }
 
    function deshabilita(){
        elementos=document.getElementsByClassName("inputText");
        for(var i = 0; i < elementos.length; i++)
        {
            elementos[i].disabled = true;
        }
    } 


    function mostrar(){
    	datos=document.getElementById("cod");
    	alertify.alert("Estos son"+datos[0]);	
    }

    function modificar(caja){
    if (caja.readOnly){
        caja.readOnly = false;
    }
    else{
        caja.readOnly = true;
    }
}
 
/*function guardar(evento, caja){
    var ajax = new XMLHttpRequest();
 
    if (evento.keyCode == 13){
        ajax.open("GET", "update.php?valor=" + caja.value, true);
        ajax.onreadystatechange = function(){
            if (ajax.readyState == 4 && ajax.status == 200){
                alert(ajax.responseText);
            }
        };
        ajax.send();
        caja.readOnly = true;
    }
}
 */

 function capturar(){

 	 var porId=document.getElementById("valor").value;
 	 alertyfi.alert(porId);
 }

 
 function asegurar ()
  {
      rc = confirm("¿Seguro que desea Eliminar?");
      return rc;
  }
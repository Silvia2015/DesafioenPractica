function test(){
    var letras = /^[A-Za-z]+$/;
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    
    document.getElementById("resultado").innerHTML=``;
    document.getElementById("errorNombre").innerHTML=``;
    document.getElementById("errorAsunto").innerHTML=``;
    document.getElementById("errorMensaje").innerHTML=``;
    
    if (nombre.match(letras) && asunto.match(asunto) && mensaje.match(mensaje)  && nombre.length>0 && asunto.length>0 && mensaje.length>0){
            document.getElementById("resultado").innerHTML=`Mensaje enviado con éxito!!!`;

            document.getElementById("nombre").value="";
            document.getElementById("asunto").value="";
            document.getElementById("mensaje").value="";
    
    }else{
         if (!nombre.match(letras)){
             document.getElementById("errorNombre").innerHTML=`El nombre es requerido`;
         }

         if (!asunto.match(letras)){
             document.getElementById("errorAsunto").innerHTML=`El Asunto es requerido`;
         }

         if (!mensaje.match(letras)){
             document.getElementById("errorMensaje").innerHTML=`El Mensaje es requerido`;
         }
    }

    
 }
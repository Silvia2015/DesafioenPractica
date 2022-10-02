function sumar(){
    var sum = parseInt(document.getElementById("valor1").value)+parseInt(document.getElementById("valor2").value);
    if (sum<0){
        sum=0;
    }

    document.getElementById("resultado").innerHTML=sum;
}

function restar(val1,val2){
    var res = parseInt(document.getElementById("valor1").value)-parseInt(document.getElementById("valor2").value);
    if (res<0){
        res=0;
    }

    document.getElementById("resultado").innerHTML=`${res}`;
}
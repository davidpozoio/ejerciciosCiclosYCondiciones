const PASSWORDKEY = "123";

let password;
let monto;
let saldo = 100;
let repetir = false;
let respuesta;

do {

    password = prompt("ingrese contraseña: ");
    
    if(password == PASSWORDKEY){
        alert("saldo actual " + saldo);

        monto = prompt("ingrese monto");

        if(Number.isNaN(parseInt(monto))){
            alert("valor no aceptado");
            repetir = true;
            continue;
        
        }

        saldo = saldo - parseInt(monto);
        alert("le queda: " + saldo);

        respuesta = prompt("desea retirar de nuevo? si | no")

        if(respuesta == "si"){
            repetir = true;
        }else{
            repetir = false;
    }

        
    }else{
        alert("Contraseña incorrecta");
    }

} while (password != PASSWORDKEY || repetir == true);
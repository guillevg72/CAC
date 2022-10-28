bt_resumen.addEventListener('click',function calCosto(){
    let costo=0;
    let total=0;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;
    let varname = document.getElementById("name").value;
    let varsurname = document.getElementById("surname").value;
    let varemail = document.getElementById("email").value;
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(varname==""){
        alert("Ingrese su nombre");
       return;
    }
    if(varsurname==""){
        alert("Ingrese su apellido");
       return;
    }
    
    if( !validEmail.test(varemail) ){ 
        alert('Ingrese un email valido');
        return;
	}


    
    if(isNaN(cantidad)){
        alert("Ingrese una cantidad valida de Tickets");
        return;
    }

    if (categoria==0){
        total=cantidad*200;
        costo=total.toFixed();
    } 
    else if (categoria==1) {
        total=cantidad*0.2*200;
        costo=total.toFixed();
    } 
    else if (categoria==2) {
        total=cantidad*0.5*200;
        costo=total.toFixed();
    } 
    else {
        total=cantidad*0.85*200;
        costo=total.toFixed();
    }
    
    
    document.getElementById('resultado').innerHTML = costo
    console.log(costo);
    console.log(cantidad);
    console.log(categoria);
   
}
)
bt_borrar.addEventListener('click', function(){
    resultado=0
})


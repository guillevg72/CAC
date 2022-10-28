bt_resumen.addEventListener('click',function calCosto(){
        let ticket=200;
        let costo=0;
        let total=0;
        let cantidad = parseInt(document.getElementById("cantidad").value);
        let categoria = document.getElementById("categoria").value;
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let email = document.getElementById("email").value;
        let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let errorColor = "#0000FF";

    if(name==""){
        alert("Ingrese su nombre");
        buy_form.style.backgroundColor=errorColor;
        return;
    }
    if(surname==""){
        alert("Ingrese su apellido");
        return;
    }
    
    if( !validEmail.test(email) ){ 
        alert('Ingrese un email valido');
        return;
	}

    if(isNaN(cantidad)||cantidad==0){
        alert("Ingrese una cantidad valida de Tickets");
        return;
    }

    if (categoria==0){
        total=cantidad*ticket;
        costo=total.toFixed();
    } 
    else if (categoria==1) {
        total=cantidad*0.2*ticket;
        costo=total.toFixed();
    } 
    else if (categoria==2) {
        total=cantidad*0.5*ticket;
        costo=total.toFixed();
    } 
    else {
        total=cantidad*0.85*ticket;
        costo=total.toFixed();
    }
    
    
    document.getElementById('resultado').innerHTML = costo
    console.log(costo);
    console.log(cantidad);
    console.log(categoria);
   
}
)
    bt_borrar.addEventListener('click', function(){
    document.getElementById('resultado').innerHTML = ""
    })


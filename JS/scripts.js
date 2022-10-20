function calCosto(){
    let costo=0;
    let total=0;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;
    let varname = document.getElementById("name").value;
    let varsurname = document.getElementById("surname").value;
    let varemail = document.getElementById("email").value;


    if (categoria==1){
            total=cantidad*0.2*200;
            costo=total.toFixed();
    } 
    else { 
        if (categoria==2) {
            total=cantidad*0.5*200;
            costo=total.toFixed();
        } 
        else {
            total=cantidad*0.85*200;
            costo=total.toFixed();
        }
    }
    document.getElementById('resultado').innerHTML = costo
    console.log(costo);
    console.log(categoria);
   
}



function enviarFormulario(event){
    let contacto  = document.getElementById("contacto");
    let email=event.target.form[1].value;
    contacto.value=`${event.target.form[0].value}  ${email} te ha dejado un mensaje en el portfolio`;
}
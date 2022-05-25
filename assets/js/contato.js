function validandoContato(){
    
    window.event.preventDefault()

    if(document.form.nome.value == ""){
        alert("Campo nome, não deve ser vazio!")
        document.form.nome.focus();
    
    } else if(document.form.mensagem.value.length < 10){
        alert("A mensagem deve contar no mínimo 10 caracteres.")
        document.form.mensagem.focus();   
         
    }else {
        alert("Mensagem enviada com sucesso!")
    }
}

document.querySelector("form").addEventListener("submit", validandoContato);


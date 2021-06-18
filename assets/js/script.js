/* formas de acessar o DOM - Document Object Model - Documento de Objeto de Documento

Lembrando que o JavaScript é Case Sensitive, isso significa que ele reconhece letras 
maiusculas e minusculas para palavras reservadas do JS. 

por Tag: get.ElementByTagName()
por Id: getElementById()
por Nome: getElementsByNome()
por Classe: getElementsByClassName()
por Seletor:querySelector() - pelo seletor, podemos selecionar apenas só tag, a Id ou o nome.
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let mapa = document.querySelector("#mapa")
let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaCampoNome() {

    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red" 
    } else {
        txtNome.innerHTML = "Nome Válido!"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaCampoEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido!"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaCampoMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    if(mensagem.value.length >=100) {
        txtMensagem.innerHTML = "Limite de texto ultrapassado"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && mensagemOk == true) {
        alert("Fomulário enviado com sucesso!")
    } else {
        alert("Prencha todos os campos do formulário antes de enviar")
    }
    
}

function mapaZoomMais () {
mapa.style.width = "800px"
mapa.style.length = "600px"
}

function mapaZoomMenos () {
mapa.style.width = "400px"
mapa.style.length = "250px"

}




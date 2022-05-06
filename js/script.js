const inpuntTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".cx_mensagem");

function btnCriptografar() {
  const textoCriptografar = criptografar(inpuntTexto.value)
  mensagem.value = textoCriptografar
  mensagem.style.backgroundImage="none"
}

function btnDescriptografar() {
  const textoDescriptografar = descriptografar(inpuntTexto.value)
  mensagem.value = textoDescriptografar
  mensagem.style.backgroundImage="none"
}

function limpaInput(){
  inpuntTexto.value = "";
  inpuntTexto.focus();
}

function criptografar(stringCriptografada) {
  let matrizCodigo = [["a", "ap"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
  stringCriptografada = stringCriptografada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
    if(stringCriptografada.includes(matrizCodigo[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    limpaInput();
  }
  return stringCriptografada;
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [["ap", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for(let i=0; i < matrizCodigo.length; i++) {
    if(stringDescriptografada.includes(matrizCodigo[i][0])) {
      stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    limpaInput();
  }
  return stringDescriptografada;
}

document.querySelector('#copiar').addEventListener('click', () => {

  document.querySelector(".cx_mensagem").select();
  document.execCommand("cut");
  document.querySelector('copiar').disabled = true;
  document.querySelector(".cx_mensagem").disabled = true;
  
});
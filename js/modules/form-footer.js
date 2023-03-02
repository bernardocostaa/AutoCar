export default function formFooter(){
  const btn = document.querySelector('#btn-email')
  const input = document.querySelector('.input-footer')

function validarEmail(email){
  let emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email)
}

function verificaEmail(e){
  e.preventDefault()
  let valorInput = input.value
  if(validarEmail(valorInput)){
    console.log('correto');
  }else{
    console.log('erro');
  }
}

  btn.addEventListener('click',verificaEmail)
}
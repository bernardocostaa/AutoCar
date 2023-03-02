export default function formFooter(){
  const btn = document.querySelector('#btn-email')
  const input = document.querySelector('.input-footer')

function validarEmail(email){
  let emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email)
}

function avisoEmail(className,msg){
  const avisoElemente = document.querySelector('.aviso-msg')
  const divEl = document.createElement('div')
  const textAviso = document.createElement('p')
  divEl.classList.add('aviso-msg',className)
  if(avisoElemente){
      avisoElemente.remove()
  }
  textAviso.innerText = msg
  divEl.appendChild(textAviso)
  input.insertAdjacentElement('afterend',divEl)
  
}

function verificaEmail(e){
  e.preventDefault()
  const valorInput = input.value
  const isAValidEmail = validarEmail(valorInput)
  if(isAValidEmail){
    input.value = ''
    input.classList.remove('ativo')
    avisoEmail('sucesso','Email enviado, em breve respoderemos')
    setTimeout(()=>{
      document.querySelector('.aviso-msg').remove()
    },3000)
  }else{
    input.classList.add('ativo')
    avisoEmail('erro','Email invalido')
  }
}
  btn.addEventListener('click',verificaEmail)
}
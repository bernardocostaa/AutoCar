export default function formContatoNew() {
  const form = document.getElementById("contato");

  function verificarInputs(e) {
    const target = e.target;
    console.log(!target.checkValidity());
    if (!target.checkValidity()) {
      target.style.border = "2px solid #D91D04";
      spanStatus(target, false);
    } else {
      target.style.border = "2px solid #4ECA64";
      spanStatus(target, true);
    }
    if(target.value == ''){
      spanStatus(target,null)
      target.style.border = "none";
    }
  }
  const arrayMsg = [
    { inputName:"nome", mensagem:'O nome não esta correto' },
    { inputName:"cel", mensagem:'Seu telefone não é valido' },
    { inputName:"email", mensagem:'Seu email não é valido' },
    { inputName:"mensagem", mensagem:'Explique melhor o motivo do seu contato' }
  ]
  function spanStatus(target, status) {
    // console.log(status);
    const feedbackSpan = target.parentElement.querySelector('[data-js="feedback"]');
    const mensagemSpan = arrayMsg.find(objeto => objeto.inputName === target.id)

    if(status) {
      feedbackSpan.classList.add("sucessoMsg");
      feedbackSpan.classList.remove('erroForm')
      feedbackSpan.innerText = ''
    } else if(status == false) {
      feedbackSpan.classList.remove("sucessoMsg");
      feedbackSpan.classList.add('erroForm')
      feedbackSpan.innerText = mensagemSpan.mensagem
    }else{
      feedbackSpan.classList.remove("sucessoMsg");
      feedbackSpan.classList.remove('erroForm')
      feedbackSpan.innerText = ''
    }
  }

  form.addEventListener("keyup", verificarInputs);
  form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let divEnvio = document.createElement('div')  
    const divPai = document.querySelector('.contato-form ')
    divEnvio.innerText = 'Seu email foi enviado, respoderemos em até 24 horas!'
    divEnvio.classList.add('avisoEmail')
    form.style.display = 'none'
    divPai.append(divEnvio)
  });

  function mascaraCell() {
    cel.value = cel.value.replace(/\D/g, "");
    cel.value = cel.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    cel.value = cel.value.replace(/(\d)(\d{4})$/, "$1-$2");
  }
 form.cel.addEventListener('keyup',mascaraCell)
}

export default function formContato() {
    if(document.forms.contato){
        const cel = document.getElementById("cel");
        const campos = document.forms.contato.elements;
    function limparErro() {
        document.querySelectorAll(".erroForm").forEach((item) => {
          item.remove();
        });
      }
      
      function addErro(index, msg) {
        let span = document.createElement("span");
        campos[index].style.border = "2px solid #D91D04";
        span.classList.add("erroForm");
        span.innerText = msg;
        const removerSpanSucesso = campos[index].parentElement.querySelector('.sucessoMsg')
        if(removerSpanSucesso){
          removerSpanSucesso.remove()
        }
        campos[index].parentElement.append(span);
      }
    
      function addSucesso(index) {
        if(campos[index].nextElementSibling){
            return;
        }
        console.log('1');
        let iconSucesso = document.createElement('span')
        campos[index].style.border = "2px solid #4ECA64";
        iconSucesso.classList.add('sucessoMsg')
      campos[index].parentElement.append(iconSucesso)
      console.log( campos[index].parentElement);
      console.log(iconSucesso);
    }
    
      function validarInputs() {
        let validador = []
        limparErro();
        let emailRegex = /\S+@\S+\.\S+/;
        let cellRegex = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
        if (campos[0].value.length < 3) {
          addErro(0, "O nome não esta correto");
          validador.push(false)
        } else {
          addSucesso(0);
            validador.push(true)
        }
    
        if (!cellRegex.test(campos[1].value)) {
          addErro(1, "Seu telefone não é valido");
          validador.push(false)
        } else {
          addSucesso(1);
          validador.push(true)
    
        }
    
        if (!emailRegex.test(campos[2].value)) {
          addErro(2, "Seu email não é valido");
            validador.push(false)
        } else {
          addSucesso(2);
          validador.push(true)
    
        }
    
        if (campos[3].value.length <= 25) {
          addErro(3, 'Explique melhor o motivo do seu contato');
            validador.push(false)
        } else {
          addSucesso(3);
            validador.push(true)
    
        }
    
        if(validador.every((item) => item === true)){
            const form = document.getElementById('contato')
            const divPai = document.querySelector('.contato-form ')
            let divEnvio = document.createElement('div')
            for(let i = 0; i <= 3; i++){
                campos[i].style.border = 'none'
            }
            divEnvio.innerText = 'Seu email foi enviado, respoderemos em até 24 horas!'
            divEnvio.classList.add('avisoEmail')
            form.style.display = 'none'
            divPai.append(divEnvio)
        }
      }
    
      function validarForm(e) {
        e.preventDefault();
        validarInputs();
      }
    
      campos[4].addEventListener("click", validarForm);
    
      function mascaraCell() {
        cel.value = cel.value.replace(/\D/g, "");
        cel.value = cel.value.replace(/^(\d{2})(\d)/g, "($1) $2");
        cel.value = cel.value.replace(/(\d)(\d{4})$/, "$1-$2");
      }
    
      cel.addEventListener("input",mascaraCell)
}
 
}

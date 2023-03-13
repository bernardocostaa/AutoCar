export default function formContato() {
  const cel = document.getElementById("cel");
  const campos = document.forms.contato.elements;

  function validarInputs() {
    let emailRegex = /\S+@\S+\.\S+/;
    let cellRegex = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
    let valido = false;
    let span = document.createElement('span')
    if (campos[0].value.length < 3) {
      addErro(0);
      valido = false;
    } else {
      removeErro(0);
      valido = true;
    }
    if (!cellRegex.test(campos[1].value)) {
      addErro(1);
      valido = false;
    } else {
      removeErro(1);
      valido = true;
    }
    if (!emailRegex.test(campos[2].value)) {
      addErro(2);
      valido = false;
    } else {
      removeErro(2);
      valido = true;
    }
    if (campos[3].value.length < 25) {
      addErro(3);
      valido = false;
    } else {
      removeErro(3);
      valido = true;
    }
    if (valido) {
      window.open("resp.html");
      for (let i = 0; i <= 3; i++) {
        console.log(campos[i].value);
        campos[i].value = "";
        campos[i].style.border ='none'
        span.innerText = ''
      }
    } else {
      span.innerText = 'Erro no formulario, verifique seus dados'
      span.classList.add('erroForm')
      if(document.querySelector('.erroForm')){
        span.innerText = ''
      }else{
        campos[4].parentElement.insertBefore(span, campos[4].ElementSibling)
      }
    }
    function addErro(index, msg) {
      campos[index].style.border = "2px solid red";
    }
    function removeErro(index) {
      campos[index].style.border = "2px solid #4ECA64";
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

  cel.addEventListener("keyup", mascaraCell);
}

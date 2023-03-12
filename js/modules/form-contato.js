export default function formContato(){
  const form = document.getElementById('contato')
  const cel = document.getElementById('cel')
  const campos = document.forms.contato.elements
  function addErro(index){
   campos[index].style.border = '2px solid red'
  }

   
  function removeErro(index){
    campos[index].style.border = 'none'
    
  }
  function validarForm(){
    validarNome()
    validarEmail()
    validarCell()
    validarMsg()
    
  }
  
  function validarNome(){
    if(campos[0].value.length < 3){
     addErro(0)
    }else{
      removeErro(0)
    }
  }
  function validarCell(){
    let cellRegex = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
    if(!cellRegex.test(campos[1].value)){
     addErro(1)
    }else{
      removeErro(1)
    }
}
  function validarEmail(){
    let emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(campos[2].value)){
     addErro(2)
    }else{
      removeErro(2)
    }
  }

  function validarMsg(){
    if(campos[3].value.length < 25){
     addErro(3)
    }else{
      removeErro(3)
    }
  }
 
  form.addEventListener('keyup',validarForm)

 











  
  function mascaraCell(){
     cel.value = cel.value.replace(/\D/g,"")
     cel.value = cel.value.replace(/^(\d{2})(\d)/g,"($1) $2"); 
     cel.value = cel.value.replace(/(\d)(\d{4})$/,"$1-$2");
   }
 
  cel.addEventListener('keyup',mascaraCell)
}


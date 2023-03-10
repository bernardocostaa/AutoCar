export default function sobreCards(){
  const sobraVan = document.querySelectorAll('.item-js');
  const tituloSobre = document.querySelector('.titulo-esfera')
  const textoSobre = document.querySelector('.texto-esfera')
  const divEsfera = document.querySelector('.esfera-cont')
  
  function ativarEsfera(e){
    const textSelec = e.currentTarget.innerText
    switch(textSelec){
      case 'Segurança':
        tituloSobre.innerText = textSelec;
        textoSobre.innerText ='Antes de mais nada, tudo que fazemos é pensado mais de 3 vezes para garantir a segurança do produto, cliente e empresa.'
      break;
      case 'Manutenção':
        tituloSobre.innerText = textSelec;
        textoSobre.innerText ='Antes de mais nada, tudo que fazemos é pensado mais de 3'
      break;
      case 'Econômico':
        tituloSobre.innerText = textSelec;
        textoSobre.innerText ='Antes de mais nada, tudo que fazemos é pensado mais de 3 vezes para garantir a segurança do produto, cliente e empresa,Antes de mais nada.'
      break;
      case 'Qualidade':
        tituloSobre.innerText = textSelec;
        textoSobre.innerText ='Antes de mais nada, tudo que fazemos é pensado mais de 3 vezes para garantir a segurança do produto'
      break;
    }
  }

  let idTimeount = ''

  const stopTimeout  = id =>{
    clearTimeout(id)
  }

  sobraVan.forEach((item)=>{
    item.addEventListener('mousemove', (event)=>{
      ativarEsfera(event)
      stopTimeout(idTimeount)
      divEsfera.classList.add('ativo')
    })
    item.addEventListener('mouseleave', ()=>{
      divEsfera.classList.remove('ativo')
     idTimeount = setTimeout(()=>{
      divEsfera.classList.add('ativo')
        tituloSobre.innerText = 'Descubra Os Nossos Diferenciais';
        textoSobre.innerText = '';
      },2000)
    })
  })
}

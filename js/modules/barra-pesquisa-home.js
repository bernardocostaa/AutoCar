export default function barraPesquisaHome(){
  const itemBarra = document.querySelectorAll('.item-click')
  
  if(itemBarra.length){
    function navegarBarra(index){
        itemBarra.forEach((item)=>{
          const bolaAtual = item.querySelector('.bola')
          const pAtual = item.querySelector('p')
          bolaAtual.classList.remove('ativo')
          pAtual.classList.remove('ativo')
        })
        const bolaAtiva = document.querySelectorAll('.item-click .bola')
        const pAtivo = document.querySelectorAll('.item-click p')
        bolaAtiva[index].classList.add('ativo')
        pAtivo[index].classList.add('ativo')
        barra(index)
    }
    
    function barra(index){
    const progresso = document.querySelector('.progresso')
    let progressoCont = 100 - (25 * index)
    progresso.style.left = `calc(100% - ${progressoCont}%)`
  
  }
  
    itemBarra.forEach((item,index)=>{
      item.addEventListener('click', () =>{
        navegarBarra(index)
      })
    })
  }
}
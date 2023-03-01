export default function barraPesquisaHome(){
  const itemBarra = document.querySelectorAll('.item-click')
  const progresso = document.querySelector('.progresso')


function navegarBarra(index){
  itemBarra.forEach((item)=>{
    const bolaAtual = item.querySelector('.bola')
    bolaAtual.classList.remove('ativo')
  })
  const bolaAtiva = document.querySelectorAll('.item-click .bola')
  bolaAtiva[index].classList.add('ativo')
  barra(index)
}

function barra(index){

}

  itemBarra.forEach((item,index)=>{
    item.addEventListener('click', () =>{
      navegarBarra(index)
    })
  })
}
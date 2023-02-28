export default function barraPesquisaHome(){
  const itemBarra = document.querySelectorAll('.item-click')
  const progresso = document.querySelector('.progresso')


function navegarBarra(e){
  const itemAtual = e.currentTarget
  console.log(itemAtual.next);
  console.log(itemAtual);
}

  itemBarra.forEach((item)=>{
    item.addEventListener('click', navegarBarra)
  })
}
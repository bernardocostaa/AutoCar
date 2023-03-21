export default function carrosel(){
  const slideDiv = document.querySelector('.item-slide')
  const indexSlide = document.querySelector('.index-slide')
  const nextBnt = document.querySelector('.btn-next')
  const prevBtn = document.querySelector('.btn-prev')
  const slide = slideDiv.querySelectorAll('.slide-carro-ul > *')
  const bolasIndex = indexSlide.querySelectorAll('.bola')
  let ativo = 0
  ativarSlide(0)

  function ativarSlide(index){
    ativo = index
    slide.forEach((item)=>{
      item.classList.remove('ativo')
    })
    slide[ativo].classList.add('ativo')
    bolasIndex.forEach((item)=>{
      item.classList.remove('ativo')
    })
    bolasIndex[ativo].classList.add('ativo')
  }

  function navBola(bola){
    bolasIndex.forEach((item)=>{
      item.classList.remove('ativo')
    })
    bola.classList.add('ativo')
    
  }

  function next(){
    if(ativo < slide.length - 1){
      ativarSlide(ativo+1)
    }else{
      ativarSlide(0)
    }
  }
  function prev(){
    if(ativo > 0){
      ativarSlide(ativo - 1)
    }else{
      ativarSlide(slide.length - 1)
    }
  }

  bolasIndex.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
      navBola(e.target)
      ativarSlide(index)
    })
  })
  nextBnt.addEventListener('click',next)
  prevBtn.addEventListener('click',prev)


}
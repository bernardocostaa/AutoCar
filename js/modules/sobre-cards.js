export default function sobreCards(){
  const sobraVan = document.querySelectorAll('.item-js');
  
  function ativarEsfera(e){
    console.log(e.currentTarget);
  }

  sobraVan.forEach((item)=>{
    item.addEventListener('mousemove', ativarEsfera)
  })
}
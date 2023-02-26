export default function menuMobile(){
  const btnMenu = document.querySelector('.btn-menu img')
  const areaMenu = document.querySelector('.estilo-mobile')
  function ativarMenuMobile(){
    areaMenu.classList.toggle('ativo')
    btnMenu.classList.toggle('ativo')
  }

  btnMenu.addEventListener('click',ativarMenuMobile)
}
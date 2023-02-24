export default function menuMobile(){
  const btnMenu = document.querySelector('.btn-menu')
  const areaMenu = document.querySelector('.nav-menu-prin')
  function ativarMenuMobile(){
    areaMenu.classList.toggle('ativo')
    btnMenu.classList.toggle('ativo')
  }

  btnMenu.addEventListener('click',ativarMenuMobile)
}
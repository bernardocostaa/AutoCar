export default function acordionList() {
  
  const btnAcordion = document.querySelectorAll(".abrirFechar");
  const pAcordion = document.querySelector(".cada-quadro p");
  if(btnAcordion.length){
    pAcordion.classList.add("ativo");
    function toggleAcordion() {
      const pAcordion = this.closest(".cada-quadro").lastElementChild;
      pAcordion.classList.toggle("ativo");
      this.classList.toggle('ativo');
    }
  
    btnAcordion.forEach((item) => {
      item.addEventListener("click", toggleAcordion);
    });
  }
}

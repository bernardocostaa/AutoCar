export default async function carrosTexto(){
  const textoCarro = window.localStorage.getItem('carroName')
  
    const produtoCarro = await fetch('./carros-produto.json')
    const json = await produtoCarro.json();
    const carroSelec = json.filter((carro)=>{
      return carro.home[0].nomeCar === textoCarro
    })
    console.log(carroSelec);
  

}


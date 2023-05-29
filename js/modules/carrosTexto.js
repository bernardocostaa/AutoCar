export default async function carrosTexto() {
  const textoCarro = window.localStorage.getItem("carroName");

  const produtoCarro = await fetch("./carros-produto.json");
  const json = await produtoCarro.json();
  const carroSelec = json.filter(({home}) => {
    const [ carro ] = home
    return carro.nomeCar === textoCarro;
  });
  const { produto }  = carroSelec[0]


  // add no dom


  const bgCar = document.querySelector("[data-bgCar]");
  const nomeCar = document.querySelector("[data-nomeCar]");
  const anoCar = document.querySelector("[data-anoCar]");
  const cambioCar = document.querySelector("[data-cambioCar]");
  const combustivelCar = document.querySelector("[data-combustivelCar]");
  const estoqueCar = document.querySelector("[data-estoqueCar]");
  const velocidadeMaxCar = document.querySelector("[data-velocidadeMaxCar]");
  const cavalosCar = document.querySelector("[data-cavalosCar]");
  const de0a100Car = document.querySelector("[data-de0a100Car]");
  const nomeDestaqueCar = document.querySelector("[data-nomeDestaqueCar]")
  const valorCar = document.querySelector("[data-valorCar]")
  const kmLitroCar = document.querySelector("[data-kmLitroCar]")
  const motorCar = document.querySelector("[data-motorCar]")
  const cavalosDestaqueCar = document.querySelector("[data-cavalosDestaqueCar]")
  const destaqueDe0a100Car = document.querySelector("[data-destaqueDe0a100Car]")
  const kmHCar = document.querySelector("[data-kmH]")
  const torqueCar = document.querySelector("[data-torque]")
  const tanqueCar = document.querySelector("[data-tanque]")
  const carroDestaque = document.querySelector("[data-carroDestaque]")

  const imgsCar = document.querySelectorAll('.js-img')


  if(!bgCar || !nomeCar || !anoCar){
    return
  }

document.title = `AutoCar - ${produto.carroName}`

  bgCar.style.background = `url(${produto.bgHeaderCarro}) no-repeat center center/cover`;
  nomeCar.innerText = produto.carroName;
  anoCar.innerText = produto.ano;
  cambioCar.innerText = produto.cambio
  combustivelCar.innerText = produto.combustivel
  estoqueCar.innerText = produto.estoque
  velocidadeMaxCar.innerText = produto.velocidadeMax
  cavalosCar.innerText = produto.cavalos
  de0a100Car.innerText = produto.de0a100km
  nomeDestaqueCar.innerText = produto.carroName
  valorCar.innerText = produto.valorCarro
  kmLitroCar.innerText = produto.kmLitro
  motorCar.innerText = produto.motor
  cavalosDestaqueCar.innerText = produto.cavalos
  destaqueDe0a100Car.innerText = produto.de0a100km
  kmHCar.innerText = produto.kmH
  torqueCar.innerText = produto.torque
  tanqueCar.innerText = produto.tanqueL
  carroDestaque.setAttribute('src',produto.destaqueCarro)

  imgsCar.forEach((img,index)=>{
    img.setAttribute('src', produto.imgs[index])
  })

  
}

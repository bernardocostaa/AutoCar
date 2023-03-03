export default async function produtosCarros(){
    const produtoCarro = await fetch('./carros-produto.json')
    const json = await produtoCarro.json();
    console.log(json[0].imgHome);
  
}


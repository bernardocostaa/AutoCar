export default async function produtosCarros(){
    const sectionCarros = document.querySelectorAll('.coluna-carro')
    const produtoCarro = await fetch('./carros-produto.json')
    const json = await produtoCarro.json();
    let coluna = 0
    json.forEach((item)=>{
        if(coluna > sectionCarros.length - 1){
            coluna = 0
        }
        sectionCarros[coluna].innerHTML += `
        <div class="carro">
        <img class="img-carro img-response" src="${item.imgHome}" alt="">
        <div>
        <div class="info-carro">
        <div class="valor-potencia mb-8">
        <p class="cor-0 font-24-bold"><span class="cor-p1">RS</span> ${item.preco}</p>
        <div class="cavalos">
        <img src="imgs/icons/cv.svg" alt="">
        <span class="font-p-roboto-16 cor-3">${item.cv} CV</span>
        </div>
        </div>
        <p class="font-p-roboto-16 cor-5 mb-24">${item.nomeCar} </p>
        <a class="btn-primary-carro font-btn" href="produto.html">COMPRE O SEU<img src="imgs/icons/carbtn.svg" alt=""></a>
        </div>
        </div>
        </div>`;
        coluna++;
    })

    const btnsCategoria = document.querySelectorAll('.item-click p')
    function filtrarCarros(e){
      const btnClicado =  e.currentTarget.innerText;
      const categoriaJson = json.filter((item)=>{
        if(btnClicado === item.categoria){
            // console.log(item);
            return item
        }
        if(btnClicado === 'Todos'){
            return item
        }
      })
    }

    btnsCategoria.forEach((btn)=>{
        btn.addEventListener('click',filtrarCarros)
    })
}


export default async function produtosCarros(){
    const sectionCarros = document.querySelectorAll('.coluna-carro')
    if(sectionCarros.length){
        const produtoCarro = await fetch('./carros-produto.json')
        const json = await produtoCarro.json();
        let coluna = 0
        if(sectionCarros.length){
            criarCarros(json)
            function criarCarros(filtro){
                for (let index = 0; index < sectionCarros.length; index++) {
                    sectionCarros[index].innerHTML = ''
                }
                coluna = 0
                filtro.forEach((item)=>{
                     if(coluna > sectionCarros.length - 1){
                         coluna = 0
                     }
                    sectionCarros[coluna].innerHTML += `<div class="carro">
                    <img class="img-carro img-response" src="${item.home[0].imgHome}" alt="">
                    <div>
                    <div class="info-carro">
                    <div class="valor-potencia mb-8">
                    <p class="cor-0 font-24-bold"><span class="cor-p1">RS</span> ${item.home[0].preco}</p>
                    <div class="cavalos">
                    <img src="imgs/icons/cv.svg" alt="">
                    <span class="font-p-roboto-16 cor-3">${item.home[0].cv} CV</span>
                    </div>
                    </div>
                    <p class="font-p-roboto-16 cor-5 mb-24">${item.home[0].nomeCar} </p>
                    <a class="btn-primary-carro font-btn" href="produto.html">COMPRE O SEU<img src="imgs/icons/carbtn.svg" alt=""></a>
                    </div>
                    </div>
                    </div>`;
                    coluna++
                })
            }
            function filtrarCarros(e){
                const clique = e.currentTarget.innerText
                const categoriaJson = json.filter((item)=>{
                    if(clique === item.home[0].categoria){
                       return item.home[0].categoria
                    }
                })
                if(clique === 'Todos'){
                    criarCarros(json)
                }else{
                   criarCarros(categoriaJson)
                }
            }
            const btnsFiltro = document.querySelectorAll('.item-click p')
            btnsFiltro.forEach((item)=>{
                item.addEventListener('click',filtrarCarros)
            })
        }
    }

    function pegarTexto(e){
      const textoCar = e.target.previousElementSibling.innerText
      window.localStorage.setItem('carroName', textoCar)
    }
    const btns = document.querySelectorAll('.btn-primary-carro')
    btns.forEach((btnTexto)=>{
        btnTexto.addEventListener('click',pegarTexto)
    })
   
}


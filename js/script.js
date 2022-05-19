const vitrine = document.querySelector(".vitrine")

function criarCardVitrine (produto, index) {
    //Informaçao dos Produtos
    const ids       = produto.id
    const img       = produto.img
    const nome      = produto.nameItem
    const desc      = produto.description
    const value     = produto.value
    const precoReal = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const addCar    = produto.addCart
    const tag       = produto.tag[0]

    //Criar elementos Card Vitrine
    const tagDiv        = document.createElement("div")
    const tagUl         = document.createElement("ul")
    const tagLiFigure   = document.createElement("li")
    const tagFigure     = document.createElement("figure")
    const tagImg        = document.createElement("img")
    const tagLiCat      = document.createElement("li")
    const tagCat        = document.createElement("p")
    const tagLiTit      = document.createElement("li")
    const tagTit        = document.createElement("p")
    const tagLiDesc     = document.createElement("li")
    const tagDesc       = document.createElement("p")
    const tagLiPreco    = document.createElement("li")
    const tagPreco      = document.createElement("p")
    const tagLiAddCar   = document.createElement("li")
    const tagAddCar     = document.createElement("h2")

    //Adicionar informaçoes de texto html
    tagImg.src = img
    tagImg.alt = nome
    tagCat.innerHTML = tag
    tagTit.innerHTML = nome
    tagDesc.innerHTML = desc
    tagPreco.innerHTML = precoReal
    tagAddCar.innerHTML = addCar
    tagAddCar.id = ids-1  

    //Montar o template card
    tagDiv.appendChild(tagUl)
    tagFigure.appendChild(tagImg)
    tagLiFigure.appendChild(tagFigure)
    tagUl.appendChild(tagLiFigure)
    tagDiv.appendChild(tagUl)
    tagUl.appendChild(tagLiCat)
    tagLiCat.appendChild(tagCat)
    tagUl.appendChild(tagLiTit)
    tagLiTit.appendChild(tagTit)
    tagUl.appendChild(tagLiDesc)
    tagLiDesc.appendChild(tagDesc)
    tagUl.appendChild(tagLiPreco)
    tagLiPreco.appendChild(tagPreco)
    tagUl.appendChild(tagLiAddCar)
    tagLiAddCar.appendChild(tagAddCar)

    // Adcionar CSS
    tagDiv.classList.add("card")
    tagCat.classList.add("categoria")
    tagTit.classList.add("titulo")
    tagDesc.classList.add("descricao")
    tagPreco.classList.add("preco")
    tagAddCar.classList.add("addcar")

    return tagDiv
}

//Listando produtos
function listarCardProdutos(listaProdutos) {
    vitrine.innerHTML = ""
    listaProdutos.forEach(function(produto, index){
    const cardProduto = criarCardVitrine(produto, index)
    vitrine.appendChild(cardProduto)
    })
}
listarCardProdutos(data)


// Template card carrinho

function CardCarrinho(produto, index) {
    //Informaçao dos Produtos no Carrinho
    const img       = produto.img
    const nome      = produto.nameItem
    const value     = produto.value
    const precoReal = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


    //Criar elementos Card Carrinho
    const tagUl         = document.createElement("ul")
    const tagLi         = document.createElement("li")
    const tagLiDivFg    = document.createElement("div")
    const tagFigure     = document.createElement("figure")
    const tagImg        = document.createElement("img")
    const tagLiDivCar   = document.createElement("div")
    const tagUlCar      = document.createElement("ul")
    const tagLiTit      = document.createElement("li")
    const tagTit        = document.createElement("p")
    const tagLiPreco    = document.createElement("li")
    const tagPreco      = document.createElement("p")
    const tagLiRemCar   = document.createElement("li")
    const tagRemCar     = document.createElement("h3")

     //Adicionar informaçoes de texto html
    tagImg.src = img
    tagImg.alt = nome
    tagTit.innerHTML = nome
    tagPreco.innerHTML = precoReal
    tagRemCar.innerHTML = "Remover Produto" 
    tagRemCar.id = index 

    //Montar o template card carrinho

    tagFigure.appendChild(tagImg)
    tagLiDivFg.appendChild(tagFigure)
    tagLi.appendChild(tagLiDivFg)
    tagUl.appendChild(tagLi)

    tagLi.appendChild(tagLiDivCar)
    tagLiDivCar.appendChild(tagUlCar)

    tagUlCar.appendChild(tagLiTit)
    tagLiTit.appendChild(tagTit)

    tagUlCar.appendChild(tagLiPreco)
    tagLiPreco.appendChild(tagPreco)

    tagUlCar.appendChild(tagLiRemCar)
    tagLiRemCar.appendChild(tagRemCar)

    // Adcionar CSS
    tagLi.classList.add("cardcarrinho")
    tagLiDivFg.classList.add("imagemcarrinho")  
    tagLiDivCar.classList.add("infocarrinho") 
    tagTit.classList.add("titulo")
    tagPreco.classList.add("preco")
    tagRemCar.classList.add("removercar")

    return tagUl
}
//Criando Array Carrinho
const prodcarrinho = document.querySelector(".prodcarrinho")

vitrine.addEventListener("click", adicionarAoCarrinho)
const totalProdutos = []

function carrinhoVazio(totalProdutos) {
    if (totalProdutos.length == 0) {
        prodcarrinho.innerHTML = `
        <p class="carrinhovazio">Carrinho Vazio</p>
        <p class="produtovazio">Adicioone Produtos</p>`
    }
}
carrinhoVazio(totalProdutos)
function adicionarAoCarrinho(event) {
    
    const button = event.target
        if (button.tagName === "H2") {
            prodcarrinho.innerHTML = ""
            totalQuantidade.innerHTML = ""
            totalCarrinho.innerHTML = ""
            const indice = button.id
            totalProdutos.push(data[indice])     
            listarCardCarrinho(totalProdutos)
            listarQtdade(totalProdutos)
            listarTotal(totalProdutos) 

        }
}

const vitrineCarrinho = document.querySelector(".vitrineCarrinho")
//Removendo
vitrineCarrinho.addEventListener("click", removerDoCarrinho)

function removerDoCarrinho(event) {
    const button = event.target
    
    if (button.tagName === "H3") {
        prodcarrinho.innerHTML = ""
        totalQuantidade.innerHTML = ""
        totalCarrinho.innerHTML = ""
        const indice = button.id
        totalProdutos.splice(indice,1)
        listarRCardCarrinho(totalProdutos)
        listarQtdade(totalProdutos)
        listarTotal(totalProdutos)
        carrinhoVazio(totalProdutos)
    } 
}
//Listando produtos do Carrinho
function listarCardCarrinho (listaProdutos) {
    listaProdutos.forEach(function(produto, index){
        const cardProduto = CardCarrinho(produto, index)
        prodcarrinho.appendChild(cardProduto)
        })
}

function listarRCardCarrinho(listaProdutos) {
    listaProdutos.forEach(function(produto, index){
    const cardProduto = CardCarrinho(produto, index)
    prodcarrinho.appendChild(cardProduto)
    })
}

const totalQuantidade = document.querySelector(".totalqtdade")

function calcularQuantidade(listaProdutos) {
    const tagQtdade = document.createElement("p")
    tagQtdade.innerHTML = listaProdutos.length 
    return tagQtdade
}

function listarQtdade(listaProdutos) {
    const cardQtdade = calcularQuantidade(listaProdutos)
    totalQuantidade.appendChild(cardQtdade)
}

const totalCarrinho = document.querySelector(".totalcar")

function calcularTotal(listaProdutos) {
    const tagTotal = document.createElement("p")
    let soma = 0
    for (let i = 0; i < listaProdutos.length; i++) {
        soma += listaProdutos[i].value
    }
    const precoReal = soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    tagTotal.innerHTML = precoReal
    return tagTotal
}

function listarTotal(listaProdutos) {
    const cardTotal = calcularTotal(listaProdutos)
    totalCarrinho.appendChild(cardTotal)
}


// Filtrando por categorias

// Categoria All
const menu_nav_all = document.querySelector(".menu_nav_all")
menu_nav_all.addEventListener("click", filtrarAll)
function filtrarAll(event) {
listarCardProdutos(data)
}

// Categoria Vestuario
const menuVasVest = document.querySelector(".menu_nav_vest")
menuVasVest.addEventListener("click", filtrarVest)

function filtrarVest(event) {
    const arrayVest = []
    data.forEach(function(produto, index){
        const produtoVest = produto.tag
            if (produtoVest == `Vestuário`) {
                arrayVest.push(produto) 
            }
        })
    listarCardProdutos(arrayVest)
}

// Categoria Bolsas
const menuVasBolsa = document.querySelector(".menu_nav_bolsas")
menuVasBolsa.addEventListener("click", filtrarBolsa)

function filtrarBolsa(event) {
    const arrayBolsas = []
    data.forEach(function(produto, index){
        const produtoVest = produto.tag
            if (produtoVest == `Bolsas`) {
                arrayBolsas.push(produto) 
            }
        })
    listarCardProdutos(arrayBolsas)
}

// Categoria Canecas
const menuVasCaneca = document.querySelector(".menu_nav_canecas")
menuVasCaneca.addEventListener("click", filtrarCaneca)

function filtrarCaneca(event) {
    const arrayCaneca = []
    data.forEach(function(produto, index){
        const produtoVest = produto.tag
            if (produtoVest == `Canecas`) {
                arrayCaneca.push(produto) 
            }
        })
    listarCardProdutos(arrayCaneca)
}

// Extras Pesquisar
const barraPesquisar = document.querySelector(".pesquisabox")
const btnPesquisar = document.querySelector(".pesquisabotao")
btnPesquisar.addEventListener("click", filtrarPesquisa)
function filtrarPesquisa(event){
    const arrayPesquisa = []
    data.forEach(function(produto, index){
        let guardarPesquisa = barraPesquisar.value
        guardarPesquisa = guardarPesquisa.trim()
        const compPesquisa = produto.nameItem
            if (compPesquisa.includes(guardarPesquisa)) {
                
                arrayPesquisa.push(produto) 
            }
        })
    barraPesquisar.value = ""
    listarCardProdutos(arrayPesquisa)
}
    







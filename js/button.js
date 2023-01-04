// Botão para ir no topo da página
var topo = document.querySelector('.inicio')

var valueTarget = ''

topo.addEventListener('click',()=>{
    window.scroll(0,0)
})

document.addEventListener('click',(e)=> {
    var targetE = e.target

    valueTarget = targetE.value

    //Abrindo a página html
    if(targetE.classList.contains('btnSaibaMais')) {
        window.location.assign('../html/informacaoArte.html')
    }

    // salvando o valor do quadro que foi clicado no localStorage
    produtoEscolhido = valueTarget
    localStorage.meuProdutoEscolhido = JSON.parse(produtoEscolhido)
})
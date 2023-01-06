// Botão para ir no topo da página
var topo = document.querySelector(".inicio");

var valueTarget = "";

topo.addEventListener("click", () => {
  window.scroll(0, 0);
});

document.addEventListener("click", (e) => {
  var targetE = e.target;

  valueTarget = targetE.value;

  // salvando o valor do quadro que foi clicado no localStorage
  if(targetE.classList.contains('btnSaibaMais')) {
    produtoEscolhido = valueTarget;
    localStorage.meuProdutoEscolhido = JSON.parse(produtoEscolhido);
  }
  
});
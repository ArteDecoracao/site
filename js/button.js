var topo = document.querySelector(".inicio");

var valueTarget = "";
// Botão para ir no topo da página
topo.addEventListener("click", () => {
  window.scroll(0, 0);
});

// detectar click
document.addEventListener("click", (e) => {
  var targetE = e.target;

  //Puxar o valor do botão
  valueTarget = targetE.value;

  // salvando o valor do botão
  if(targetE.classList.contains('btnSaibaMais')) {
    produtoEscolhido = valueTarget;
    localStorage.meuProdutoEscolhido = JSON.parse(produtoEscolhido);
  }
  
});
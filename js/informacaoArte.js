var texto =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo in, quisquam, recusandae laboriosam, repudiandae tempore laborum quaerat dicta minus harum ab consequatur mollitia autem iusto nesciunt molestias quasi totam?";

var arrayProduto = [
  { nome: "Quadro 1", descricao: texto },
  { nome: "Quadro 2", descricao: texto },
  { nome: "Quadro 3", descricao: texto },
  { nome: "Quadro 4", descricao: texto },
  { nome: "Quadro 5", descricao: texto },
  { nome: "Quadro 6", descricao: texto },
];

let containerProduto = document.querySelector(".produto");

function atualizarProduto() {
  containerProduto.innerHTML = `
    <div class="imgProduto">
        <img src="../img/exemplo.jpg" alt="" />
    </div>

    <div class="descricao">
        <h1 class="nomeProduto">${
          arrayProduto[localStorage.meuProdutoEscolhido - 1].nome
        }</h1>
        <br />
        <p class="descricaoProduto">
          ${arrayProduto[localStorage.meuProdutoEscolhido - 1].descricao}
        </p>
      </div>
    `;
}

atualizarProduto();
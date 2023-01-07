var texto =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo in, quisquam, recusandae laboriosam, repudiandae tempore laborum quaerat dicta minus harum ab consequatur mollitia autem iusto nesciunt molestias quasi totam?";

//array que tem as informações sobre cada produto
var arrayProduto = [
  {
    nome: "Tela Decorativa Cacto",
    descricao: descricaoQuadro,
    img: "../img-quadro/cacto.png",
    id: "quadro",
  },
  {
    nome: "Tela Decorativa Pranchas ",
    descricao: descricaoQuadro,
    img: "../img-quadro/prancha.jpg",
    id: "quadro",
  },
  {
    nome: "Tela Decorativa Abaporu",
    descricao: descricaoQuadro,
    img: "../img-quadro/abaporu.jpg",
    id: "quadro",
  },
  {
    nome: "Marcador de Páginas Star e Marco ",
    descricao: descricaoMarcador,
    img: "../img-quadro/boygirl.png",
    id: "marcador",
  },
  {
    nome: "Marcador de Páginas Pranchas ",
    descricao: descricaoMarcador,
    img: "../img-quadro/pranchaMarcaPagina.png",
    id: "marcador",
  },
  {
    nome: "Marcador de Páginas Bob Esponja",
    descricao: descricaoMarcador,
    img: "../img-quadro/bob.png",
    id: "marcador",
  },
];

let containerProduto = document.querySelector(".produto");

//Carregar as informações do produto escolhido
function atualizarProduto() {
  containerProduto.innerHTML = `
    <div class="imgProduto" >
        <img src="${
          arrayProduto[localStorage.meuProdutoEscolhido - 1].img
        }" alt="" id="${arrayProduto[localStorage.meuProdutoEscolhido - 1].id}" />
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

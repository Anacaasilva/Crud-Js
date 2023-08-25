const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const buttonSubmit = document.getElementById('submit');
const tbody = document.getElementsByTagName('tbody')[0]; //pegar o indice 0 da lista que o getElement retorna

let list = [];
let editando = false;
let posicao = -1; //posição do item no array quando editado 

const editIten = (index) => {
  let itenSelecionado = list[index];

  inputName.value = itenSelecionado.nome; // atribuindo value do input identificando o item na lista atraves do index
  inputPrice.value = itenSelecionado.preco;

  editando = true;

  buttonLabel();

  posicao = index;
}

const buttonLabel = () => buttonSubmit.innerHTML = `${editando ? 'SALVAR' : 'CADASTRAR'}`;

const salvar = () => {
  tbody.innerHTML = ``; //limpando a tabela antes de adicionar um novo item 

  let newItem = {
    nome: inputName.value,
    preco: inputPrice.value,
  }; //criando o objeto com as propriedades do novo item

  list[posicao] = newItem;

  inputName.value = '';
  inputPrice.value = '';

  showCards();

  editando = false;

  buttonLabel();
}

const deleteIten = (index) => {
  list.splice(index, 1); // apaga 1 item a partir do index passado por parametro
  tbody.innerHTML = ``; // limpo minha tabela 
  showCards(); // renderizo os itens novamente.
}

const showCards = () => {

  list.map((iten, indice) => {

    tbody.innerHTML += `
      <tr class="item">
        <td>${iten.nome}</td>
        <td>${iten.preco}</td>
        <td>
          <button onclick="editIten(${indice})">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button onclick="deleteIten(${indice})">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    `
  })
}

const dadosLocalStorage = () => {
  if (JSON.parse(localStorage.getItem('Dados'))) {
    list = JSON.parse(localStorage.getItem('Dados'))
  }
} //dados que já estão salvos no local Storage

const createItem = () => {
  tbody.innerHTML = ``; //limpando a tabela antes de adicionar um novo item 

  let newItem = {
    nome: inputName.value,
    preco: inputPrice.value,
  }; //criando o objeto com as propriedades do novo item

  list.push(newItem);  //adicionando o objeto criado à lista de objetos

  const listJSON = JSON.stringify(list)

  localStorage.setItem('Dados', listJSON);

  inputName.value = '';
  inputPrice.value = '';

  showCards();
}

const validate = () => {
  if (inputName.value == '') alert('Campo "Nome" deve ser preenchido!!');
  else if (inputPrice.value == '') alert('Campo "Preço" deve ser preenchido!!');
  else if (editando) salvar();
  else createItem();
}

dadosLocalStorage();
showCards()
buttonSubmit.addEventListener('click', validate);

const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const buttonSubmit = document.getElementById('submit');
const tbody = document.getElementsByTagName('tbody')[0]; //pegar o indice 0 da lista que o getElement retorna

let list = [{nome:'arroz', preco:'12,00'}];

const editIten = (index) => {

  inputName.value = list[index].nome; // atribuindo value do input identificando o item na lista atraves do index
  inputPrice.value =list[index].preco;

  console.log(list[index]);
  console.log(list[index].nome);

}

const deleteIten = (index) => {

  list.splice(index, 1)
  tbody.innerHTML = ``;
  showCards();

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

const createItem = () => {

  tbody.innerHTML = ``; //limpando a tabela antes de adicionar um novo item 

  let newItem = {
    nome: inputName.value,
    preco: inputPrice.value,
  }; //criando o objeto com as propriedades do novo item

  list.push(newItem);  //adicionando o objeto criado à lista de objetos

  inputName.value = '';
  inputPrice.value = '';

  showCards();

}

const validate = () => {

  if (inputName.value == '') alert('Campo "Nome" deve ser preenchido!!');
  else if (inputPrice.value == '') alert('Campo "Preço" deve ser preenchido!!');
  else createItem();

}

showCards()

buttonSubmit.addEventListener('click', validate);
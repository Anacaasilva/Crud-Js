const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const buttonSubmit = document.getElementById('submit');
const tbody = document.getElementsByTagName('tbody')[0]; //pegar o indice 0 da lista que o getElement retorna

let list = [];

const editIten = () => {
  console.log('editeii');
}

const deleteIten = () => {
  console.log('deletee');

}

const showCards = () => {

  list.map(iten => {
    console.log(iten);
  })

  // tbody.innerHTML += `
  //   <tr class="item">
  //     <td>${inputName.value}</td>
  //     <td>${inputPrice.value}</td>
  //     <td>
  //       <button onclick="editIten()">
  //         <i class="fa fa-pencil" aria-hidden="true"></i>
  //       </button>
  //       <button onclick="deleteIten()">
  //         <i class="fa fa-trash" aria-hidden="true"></i>
  //       </button>
  //     </td>
  //   </tr>
  // `

}

const createItem = () => {

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

buttonSubmit.addEventListener('click', validate);
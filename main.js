const input = document.querySelector('#inputitem') // para chamar os itens
const button = document.querySelector('#buttonitem')
const ul = document.querySelector('#ulitem')

button.addEventListener( 'click' , () => {
    const itemText= input.value.trim();// item que nao muda 

    if(itemText){
        const listItem = document.createElement('li');
        listItem.innerHTML= `
        ${itemText}
         <button class="deleteButton">Excluir</button>
        `;
        ul.appendChild(listItem);
        input.value = ''; // Limpa a caixa de texto apos apertar ''adicionar''
        const deleteButton = listItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click' , () =>{
            listItem.remove();
        });
    }else{
        alert(' Please, write something') // para adicionar um aviso se nao digitar nada 
    }
})
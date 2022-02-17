const listaGet = document.querySelector("#lista-tarefas");
const selecBotaoRemover = document.querySelector("#remover-tarefa")
const botaoSelect = document.querySelector("#criar-tarefa")
const selecDone = document.querySelector("#lista-tarefas");
const selecDoneList = document.querySelector("#task-done");

//-------------------------------------------------------------------//

//Adiciona um item na lista de tarefas a fazer (função)
function addLiUndone() {

    var txtVal = document.getElementById('texto-tarefa').value;
        listNode = document.getElementById('lista-tarefas');
        liNode = document.createElement("li");
        liNode.classList.add("undone-item");
        txtNode = document.createTextNode(txtVal);
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);

    document.getElementById('texto-tarefa').value = null;
}

function changeToDone(){
    let getNewList = document.querySelector("#task-done")
    let getUndone = document.querySelector(".undone-item");
    getUndone.classList.remove("undone-item")
    getUndone.classList.add("done-item");
    getNewList.appendChild(getUndone);
}

function clearList(){
    listaGet.innerHTML="";
    selecDoneList.innerHTML="";
}

//------------------------SEÇÃO DE EVENTOS-----------------------------//

//Adiciona um item na aba de tarefas a fazer (evento)
botaoSelect.addEventListener("click", addLiUndone);

//Remove todos os itens das listas
selecBotaoRemover.addEventListener("click",clearList);

//Muda um item selecionado para a aba de tarefas a fazer (evento)
selecDone.addEventListener("dblclick", changeToDone)

//---------------------------------------------------------------------//
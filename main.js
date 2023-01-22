function addNewTask(){
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    
    if(text.length === 0){
        alert("Tarefa precisa possuir mais de 1 caracter!")
        return;
    }
    
    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

    var text = document.getElementById("task_name").value='';
}

function subliTask(){
    var list = document.getElementById("list");

    list.onclick = function(){
        list.style = "text-decoration: line-through";
    };

}
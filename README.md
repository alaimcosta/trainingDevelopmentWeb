# Training Development Web

## Requisitos para rodar o projeto

### Tecnologias
HTML<br>
CSS<br>
JavaScript<br>
### Setup de ambiente
- Utilizamos a IDE `VScode`

### Como rodar na minha máquina?
- Clone o projeto `git clone git@github.com:alaimcosta/trainingDevelopmentWeb.git`
- Pronto!!

## Site
### Estrutura do projeto
- O projeto utiliza linguagem de marcação `HTML`, estilização com `CSS` e `JavaScript` para desenvolver a lógica. 
- Temos na estrutura o arquivo `ìndex.html`

### Como me localizar no projeto?
* Todos os arquivos do projeto estão em um único diretório raiz do projeto `./trainingDevelopmentWeb`
    * `index.html`
    * `main.css`
    * `main.js`

### Como funciona a estrutura do JavaScript?
```javascript
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
```
## Autor
| [<img src="https://user-images.githubusercontent.com/71519298/188052888-7d822b41-2950-4e4b-b6e7-0863dc9ef67d.jpg" width=115><br><sub>Alaim Costa</sub>](https://github.com/alaimcosta) |
| :---: |

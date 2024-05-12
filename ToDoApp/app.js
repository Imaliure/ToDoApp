let addButton=document.getElementById("Add-button");
let toDoContainer = document.getElementById("to-dos1");
let inputText = document.getElementById("input-text");
let clearButton = document.getElementById("Clear-button");

addButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph_styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration ='line-through';
    })

    



    clearButton.addEventListener('click',function(){
        paragraph.remove();
    })

    

   })
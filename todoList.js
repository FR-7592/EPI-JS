//id textBox place holder
// id addButton , button add on event
// id todoList list
const textBox = document.getElementById("textBox");
const addButton = document.getElementById("addButton");
const listBox = document.getElementById("todoList");

function addItem(){
    //create element from list
    if(textBox.value.length === 0){
        return;
    }
    let Element = document.createElement("li");
    Element.className = "todoItem";
    //create text element
    let my_span = document.createElement("span");
    my_span.className = "todoText";
    my_span.innerHTML = textBox.value;
    textBox.value ="";

    //create button
    let myButton = document.createElement("button");
    let button_child = document.createTextNode("Delete");
    myButton.appendChild(button_child);
    myButton.addEventListener("click", removeElt);
    //LInk all objects
    Element.appendChild(my_span);
    Element.appendChild(myButton);
    listBox.appendChild(Element);
}
function removeElt(){
    this.parentNode.remove();
}
addButton.addEventListener("click", addItem);


const todoList = []

// On Submit Codes
document.getElementById("myForm").onsubmit = function(event){
    submit(event)
}

function submit(event){
    
    event.preventDefault()
    

    let toDoListName = document.getElementById('toDoListName').value
    let toDoListDescription = document.getElementById('toDoListDescription').value

    const id = todoList.length + 1 
    const todoItem = {
        id: id,
        name: toDoListName,
        description: toDoListName
    }

    console.log(todoItem)
    
    let listTr = document.createElement("tr")
    
    let nameTd = document.createElement("td")
    let descriptionTd = document.createElement("td")
    let optionsTd = document.createElement("td")
    
    let buttonDone = document.createElement("button")
    buttonDone.attributes.id = "btnDone"
    buttonDone.classList.add("options-button")
    buttonDone.attributes.type = "button"

    let buttonEdit = document.createElement("button")
    buttonEdit.classList.add("options-button")
    buttonEdit.attributes.type = "button"

    let buttonDelete = document.createElement("button")
    buttonDelete.classList.add("options-button")
    buttonDelete.attributes.type = "button"
    
    let optionsTdDone = document.createElement("i")
    optionsTdDone.classList.add("fa-solid")
    optionsTdDone.classList.add("fa-check")
    optionsTdDone.attributes.title = "Done"
    
    let optionsTdEdit = document.createElement("i")
    optionsTdEdit.classList.add("fa-solid")
    optionsTdEdit.classList.add("fa-pen-to-square")
    optionsTdEdit.attributes.title = "Edit"
    
    let optionsTdDelete = document.createElement("i")
    optionsTdDelete.classList.add("fa-solid")
    optionsTdDelete.classList.add("fa-xmark")
    optionsTdDelete.attributes.title = "Delete"

    nameTd.innerHTML = toDoListName
    descriptionTd.innerHTML = toDoListDescription
    
    listTr.appendChild(nameTd)
    listTr.appendChild(descriptionTd)
    listTr.appendChild(optionsTd)
    
    optionsTd.appendChild(buttonDone)
    optionsTd.appendChild(buttonEdit)
    optionsTd.appendChild(buttonDelete)

    buttonDone.appendChild(optionsTdDone)
    buttonEdit.appendChild(optionsTdEdit)
    buttonDelete.appendChild(optionsTdDelete)
    
    document.getElementById('tableContainer').appendChild(listTr)
    todoList.push(todoItem)
    console.log("todo list update: ", todoList)
}
function markAsDone(){
    // if 
}
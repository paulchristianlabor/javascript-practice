function submit(){
    let toDoListName = document.getElementById('toDoListName').value
    let toDoListDescription = document.getElementById('toDoListDescription').value

    let listName = document.createElement("td")
    listName.innerHTML = toDoListName
    document.getElementById('toDoListContainer').appendChild(listName)

    let listDescription = document.createElement("td")
    listDescription.innerHTML = toDoListDescription
    document.getElementById('toDoListContainer').appendChild(listDescription)

    let listOption = document.createElement("td")
    listOption.innerHTML = '<i class="fa-solid fa-check" title="Done"></i><i class="fa-solid fa-pen-to-square" title="Edit"></i><i class="fa-solid fa-xmark" title="Delete"></i>'
    document.getElementById('toDoListContainer').appendChild(listOption)
}
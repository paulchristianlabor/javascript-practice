function submit(){
    let toDoList = document.getElementById('toDoList').value

    if(toDoList === ""){
        //Display error message
        alert("Please enter a value")
    }
    else{
        let list = document.createElement("li")
        list.innerHTML = toDoList
        document.getElementById("ul").appendChild(list)
        alert("Task Submitted Succesfully")
    }
}
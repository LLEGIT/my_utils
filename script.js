//Checking if page is well loaded//
window.onload = () => {
    //Checking if button Add Task was clicked//
    let addButton = document.querySelector("button")
    addButton.addEventListener("click", function() {
        let inputTask = document.querySelector("input").value
        if (inputTask === "") {
            alert("No task given")
        }
        else {
            //Adding task to toDoList//
            let taskAdded = document.createElement("li")
            taskAdded.innerHTML = inputTask

            //Creating the done button//
            let doneButton = document.createElement("button")
            doneButton.innerHTML = "Done"
            doneButton.style.color = "green"

            //Creating at the same time the remove task button
            let removeButton = document.createElement("button")
            removeButton.innerHTML = "Remove"
            removeButton.style.color = "red"

            //Putting both in a div//
            let divTask = document.createElement("div")
            divTask.style.display = "flex"
            divTask.style.flexDirection = "row"
            divTask.appendChild(taskAdded)
            divTask.appendChild(doneButton)
            divTask.appendChild(removeButton)

            //Adding to the list//
            let toDoList = document.querySelector(".toDoList")
            toDoList.appendChild(divTask)

            //If add button is clicked//
            let doneList = document.querySelector(".doneList")
            doneButton.addEventListener("click", function() {
                divTask.removeChild(doneButton)
                doneList.appendChild(divTask)
            })

            //If remove button is clicked//
            removeButton.addEventListener("click", function() {
                removeButton.parentNode.remove()
            })            
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("addTodo").onclick = () => {
        var addedTask = document.getElementById("textInput").value;
        if (addedTask === "") {
            return false;
        }

        var todoDiv = document.createElement("div");
        todoDiv.className = "todo-div"

        var li = document.createElement("li");
        li.className = "todo-list";
        li.innerHTML = addedTask;

        var editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.className = "editBtn";

        editBtn.innerHTML = "Edit";

        todoDiv.append(li);
        todoDiv.append(editBtn);

        document.getElementById("tasks").append(todoDiv);
        document.getElementById("textInput").value = "";

        editBtn.onclick = () => {
            child = editBtn.parentElement.firstChild
            var text = child.innerHTML;
            document.getElementById("textInput").value = text;
            editBtn.parentElement.remove();
        }

    }


})
var taskListEl = document.getElementById("task-list");

const form = document.getElementById("input-form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const taskName = form.querySelector("#taskname").value;
    const priority = form.querySelector("input[name=prio_level]:checked");
    const deadLine = form.querySelector("#deadline").value;

    if (!taskName || !deadLine || !priority) {
        console.log("please fill out ALL fields")
        return;
    }

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);

    newTaskBuilder(data);

    e.target.reset();
});


function newTaskBuilder(values) {

    var taskListEls = document.getElementById("task-list");

    var newTaskEl = document.createElement("div");
    taskListEls.appendChild(newTaskEl);

    var taskContent = `
        <div class="task">
            <h3>TASK NAME = ${values.taskname}</h3>
            <p>Priority = ${values.prio_level}</p>
            <p>DeadLine = ${values.deadline}</p>
            <button type="submit" class="delete-task">Complete Task</button>
        </div>
    `;

    newTaskEl.innerHTML = taskContent;

}

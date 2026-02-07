var taskListEls = document.getElementById("task-list");

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

taskListEls.addEventListener("click", e => {
    
})


function newTaskBuilder(values) {


    var newTaskEl = document.createElement("div");
    newTaskEl.className = "task";
    taskListEls.appendChild(newTaskEl);

    var taskContent = `
            <h3>TASK NAME = ${values.taskname}</h3>
            <p>Priority = ${values.prio_level}</p>
            <p>Dead Line = ${values.deadline}</p>
            <button type="button" class="delete-task">Complete Task</button>
    `;

    newTaskEl.innerHTML = taskContent;
}



taskListEls.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-task")) {
        const taskEl = e.target.closest(".task");
        taskEl.remove();
    }
});




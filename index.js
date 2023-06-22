const createIssueBtn = document.getElementById("create-issue");
const box1 = document.getElementsByClassName("box")[0];

const threeDot = document.getElementsByClassName("three-dot");
for(let dot of threeDot){
dot.addEventListener("mouseover",(event) => {
       const menu = document.createElement("div");
       menu.className = "three-dot-menu";
       menu.innerHTML = `<div class = "clear-btn">Clear</div>`
       dot.appendChild(menu);
})
};




const modal = document.createElement("div");
function closeModal(){
modal.remove();
}
function addNewTask(task){
  const userWords = task.user.split(" ");
  let nickName = userWords[0][0].toUpperCase();
  if(userWords.length > 1){
    nickName += userWords[userWords.length-1][0].toUpperCase();
  }
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.draggable = true;
    cardContainer.addEventListener("dragstart",() => {
      draggedElement = cardContainer;
    });
    cardContainer.innerHTML = `<span class="title">${task.taskName}</span>
    <p class="description">${task.description}</p>
    <span class="assignee" data-short-name="${nickName}">${task.user}</span>`

  const box = document.getElementById(task.status);
  box.appendChild(cardContainer);
}
createIssueBtn.addEventListener("click",() => {
  modal.className ="modal";
       modal.innerHTML = `<form action="">
           <span class="material-icons" onclick="closeModal()">close</span>
         <p>Add Task</p>
         <input type="text" placeholder="Task Name" name = "taskName" required />
         <textarea
           name="description"
           id=""
           cols="30"
           rows="3"
           placeholder="Description"
           required
         ></textarea>
         <input type="text" placeholder="Assignee" name = "assignee" required />
         <select name="status" id="">
           <option value="Todo">TODO</option>
           <option value="In_Progress">In Progress</option>
           <option value="Completed">Completed</option>
         </select>
         <button type="submit">Create</button>
       </form>`
      document.body.appendChild(modal);

      let form = document.querySelector(".modal form");
      form.addEventListener("submit", (e) => {
        //prevent default behaviour of form
          e.preventDefault();
          let userData = {
            taskName : form["taskName"].value.trim(),
            description: form["description"].value.trim(),
            user : form["assignee"].value.trim(),
            status : form["status"].value,
          }
          // console.log(userData);
          closeModal();
          addNewTask(userData);
      })
});

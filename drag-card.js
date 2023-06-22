const boxes = document.getElementsByClassName("box");
for(let box of boxes){
    box.addEventListener("dragover",(e) => {
       e.preventDefault();
    })
    box.addEventListener("drop", (e) => {
           e.preventDefault();
           if(box.id === 'Completed')
           draggedElement.draggable = false;

        box.appendChild(draggedElement);
    })
}
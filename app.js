
function onReady() {
  let id = toDos.length || 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
       if (!newToDoText.value) { return; }

       toDos.push({
       title: newToDoText.value,
       complete: false
       id: ++id
  });

  newToDoText.value = '';

    renderTheUI();
 }

 function renderTheUI() {
   const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';

   toDos.forEach(function(toDo) {
       const newLi = document.createElement('li');

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       const deletBtn = document.createElement('button')
       deleteBtn.innerHTML = '<span>Delete</span>';

       newLi.textContent = toDo.title;

       toDoList.appendChild(newLi);
       newLi.appendChild(checkbox);
       newLi.appendChild(deleteBtn);

       deleteBtn.addEventListener('click', () => {
         toDos = deleteToDo(toDo.id);
         renderTheUI();
         saveToDos();
       })
   });
 }

 addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
 });

  renderTheUI();
}

window.onload = function() {
       onReady();
 };

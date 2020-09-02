// function date(){
//     let today = new Date();
//     let dd = String(today.getDate()).padStart(2, '0');
//     let mm = String(today.getMonth() + 1).padStart(2, '0');
//     let yyyy = today.getFullYear();
//     today = dd + '/' + mm + '/' + yyyy;
//     return today
//     }
// const taskList = [];

// const createItem = () => {
//   const value = document.querySelector("input").value;
//   const newItem = {
//     id: 0,
//     title: value,
//     created_at: date(),
//   };
//   taskList.push(newItem);
//   displayItems();
// };
// const deleteItem = () => {
//     console.log(taskList)
// };

// const editItem = () => {
//   console.log('Edited!');
// };
// const displayItems = () => {
//   const notes = document.querySelector(".notes");
//   notes.innerHTML = "";
//   taskList.forEach((item) => {
//     const el = document.createElement("div");
//     el.classList.add('card')
//     el.innerHTML = `${item.title}<br> ${date()}`;
//     notes.appendChild(el);
//     const bottomEl = document.createElement("div");
//     bottomEl.classList.add('bottom-card')
//     el.appendChild(bottomEl)
//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     bottomEl.appendChild(deleteButton);
//     deleteButton.addEventListener("click", function deleteItem(){
//         el.parentNode.removeChild(el);});
//     const editButton = document.createElement("button");
//     editButton.innerText = "Edit";
//     bottomEl.appendChild(editButton);
//     editButton.addEventListener("click", () => editItem(item));

//   });
// };
// document.querySelector("button").addEventListener("click", createItem);



// ______________________________________________________________________________________


let addButton = document.querySelector('.add-btn');
let notes = document.querySelector('.notes')
let input = document.querySelector('.input')
let taskList = [];


function date(){
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
return today
}

function addTaskToObject(){

    taskList.push({
        id : 0,
        task : input.value,
        taskDate : date(),
    });
}
 function cleanUi(){
    document.querySelector('.input').value = '';
 }

// ----------------------------------------------------------------------
addButton.addEventListener('click', function () {

    //1. add new object push to  arr 
    addTaskToObject();

    //2. create task list item ui

    //UI elments creation
    let topCard = document.createElement('div');
    topCard.classList.add('card');
    notes.appendChild(topCard);

    topCard.innerHTML = `${input.value} <br> ${date()}`
    
    let bottomCard = document.createElement('div');
    bottomCard.classList.add('bottom-card');
    topCard.appendChild(bottomCard);
    
    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.innerHTML = 'Edit'
    bottomCard.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = 'Delete'
    bottomCard.appendChild(deleteButton);
    

  //3. CLEan ui
  cleanUi();

   
    deleteButton.addEventListener('click', function () {
        topCard.parentNode.removeChild(topCard); //remove UI
        taskList.pop();
        console.log(taskList)
    })
    console.log(taskList)
    editButton.addEventListener('click', function () {

        let newInput = document.createElement('input')
        let okButton = document.createElement('button')
        topCard.appendChild(newInput)
        okButton.innerHTML = "Ok"
        topCard.appendChild(okButton)
        okButton.addEventListener('click', function () {
            topCard.innerHTML = 'Edited: ' + `${newInput.value} <br> ${date()}`
            notes.appendChild(topCard);
            bottomCard.classList.add('bottom-card')
            topCard.appendChild(bottomCard)
            editButton.classList.add('edit-btn')
            editButton.innerHTML = 'Edit'
            bottomCard.appendChild(editButton)
            deleteButton.classList.add('delete-btn')
            deleteButton.innerHTML = 'Delete'
            bottomCard.appendChild(deleteButton)
            document.querySelector('.input').value = '';
            deleteButton.addEventListener('click', function () {
                topCard.parentNode.removeChild(topCard);
            })

        })
    })
});

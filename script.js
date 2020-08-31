let addButton = document.querySelector('.add-btn');
let notes = document.querySelector('.notes')
let input = document.querySelector('.input')
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy


addButton.addEventListener('click', function () {
    let topCard = document.createElement('div');
    let bottomCard = document.createElement('div')
    let editButton = document.createElement('button')
    let deleteButton = document.createElement('button')
    topCard.classList.add('card');
    topCard.innerHTML = `${input.value} <br> ${today}`
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

    editButton.addEventListener('click', function () {

        let newInput = document.createElement('input')
        let okButton = document.createElement('button')
        topCard.appendChild(newInput)
        okButton.innerHTML = "Ok"
        topCard.appendChild(okButton)
        okButton.addEventListener('click', function () {
            topCard.innerHTML = 'Edited: ' + `${newInput.value} <br> ${today}`
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


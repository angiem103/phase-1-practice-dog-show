document.addEventListener('DOMContentLoaded', () => {


fetch('http://localhost:3000/dogs')
.then(res => res.json())
.then(data => {
    dogTable(data)
});

function dogTable(data) {
    data.forEach(dog => {

        const tableDiv = document.querySelector('#table-body');
        const newTable = document.createElement('tr');
            newTable.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
            <td><button class='edit-button'>'Edit Dog'</button></td>
        `;
        tableDiv.appendChild(newTable);
        });

    btnCollection = document.getElementsByClassName('edit-button');
    const btnArr = Array.from(btnCollection);
    btnArr.forEach(btn=> {
        btn.addEventListener('click', () => {
            console.log('I was clicked');
            dogForm = document.querySelector('#dog-form');
            dogName = dogForm.elements['name'];
            dogBreed = dogForm.elements['breed'];
            dogSex = dogForm.elements['sex'];
        });
    });

}

})

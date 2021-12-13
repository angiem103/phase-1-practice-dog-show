document.addEventListener('DOMContentLoaded', () => {

dogForm = document.querySelector('#dog-form');
dogName = dogForm.elements['name'];
dogBreed = dogForm.elements['breed'];
dogSex = dogForm.elements['sex'];

function getAllDogs(){
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => {
        dogsArray = []
        data.forEach(dog => {
        dogsArray.push(dog)
        });
    console.log(dogsArray)
    renderOneDog(dogsArray)
    submitDogs(dogsArray)

})
}
getAllDogs()

function renderOneDog(dogsArray) {
        dogsArray.forEach(dog => {
        const tableDiv = document.querySelector('#table-body');
        let newTable = document.createElement('tr');
            newTable.innerHTML = `
            <td>${dog.name}</td>
            <td>${dog.breed}</td>
            <td>${dog.sex}</td>
        `;
        const editButton =document.createElement('button')
        editButton.innerHTML = 'Edit Dog'
        editButton.addEventListener('click', () => { 
            console.log('click')

            dogName.value = `${dog.name}`;
            dogBreed.value = `${dog.breed}`;
            dogSex.value = `${dog.sex}`;

            submitDogs(dog)
                
         });

        newTable.appendChild(editButton)
        tableDiv.appendChild(newTable);
        });

}
function submitDogs(dog) {          
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault()
            console.log(dog)
            dog.name = dogName.value
            console.log(dog)
        
    
        }
    )
    }
}
)


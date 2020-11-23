const input = document.getElementById('saisie');
const ajouter = document.getElementById('ajouter');
const list = document.getElementById('list');

// Ajouter la tache
ajouter.addEventListener('click', () => {
    if (!input.value) {
        alert("Veuillez entrer une tâche à ajouter");
    } 
    else {
        CreateTask();
    }
});

// Si touche "Entrée" est appuyé : ajouter la tache
input.onkeydown = function (event) {
    if (event.which == 13) {
        if (!input.value) {
            alert("Veuillez entrer une tâche à ajouter");
        } 
        else {
            CreateTask();
        }
    }
}

// Supprimer la tache
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-minus-circle')) {
        const validation = confirm("Etes-vous sûr de vouloir supprimer cette tâche ?");
        if (validation) {
            alert("Tâche supprimée");
            e.target.parentElement.classList.add('fadeOut');
            setTimeout( () => {
                e.target.parentElement.remove();
            }, 2000);
        }
    }
});

// Création d'une nouvelle tache
function CreateTask () {
    const h2 = document.createElement('h2');
    h2.textContent = input.value;
    h2.innerHTML += '<i class="fa fa-minus-circle" aria-hidden="true"></i>';
    h2.classList.add('fadeIn');
    list.appendChild(h2);
    input.value = "";
}
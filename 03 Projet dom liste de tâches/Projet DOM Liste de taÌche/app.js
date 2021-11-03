// DOM - Document Object Model

// Définir l'interface

/*Pour éviter de mettre "const" à chaque début de ligne on peut séparer chaque variables par une virgule*/
const form = document.querySelector("#course-form")
, listeTache = document.querySelector(".collection")
, supprimerListe = document.querySelector(".supprimer-course") /* => On met un point quand il s'agit d'une classe*/
, contenuTache = document.querySelector("#contenuTache") /*=> On met un # quand il s'agit d'un id*/
, filter = document.querySelector("#filter");

// Application
maListeDeTache()

function maListeDeTache () {

    // ajouter un évènement
    form.addEventListener('submit', ajouterUneTache);

    // supprimer une tâche
    listeTache.addEventListener('click', supprimerUneTache)

    // nettoyer la liste de tâche
    supprimerListe.addEventListener('click', nettoyerLaListe)

    // filtrer les tâches
filter.addEventListener('keyup', filterLesTaches) /* actionne un évènement au moment où l'utilisateur lache la touche du clavier*/

}

// Ajouter une tâche
function ajouterUneTache(e){
    if (contenuTache.value === ''){
        alert('ajouter une tâche')
    }

    // Ajouter une balise
    const li = document.createElement('li');

    // Ajouter une class dans le <li>
    li.className = 'collection-item';

    // Relier le contenu du formulaire dans <li>
    li.appendChild(document.createTextNode(contenuTache.value));

    // créer le lien <a>
    const link = document.createElement('a');

    // Ajouter une class à <a>
    link.className = 'delete-item secondary-content';

    // Ajouter l'icône
    link.innerHTML = '<ion-icon name="close-circle"></ion-icon>';

    // Relier <> dans le <li>
    li.appendChild(link);

    // Relier <li> à la balise <ul>
    listeTache.appendChild(li);


    contenuTache.value = ''

    e.preventDefault()
}

// supprimer une tâche
function supprimerUneTache(e) {
if (e.target.parentElement.classList.contains('delete-item'))
if(confirm('voulez-vous vraiment suprimer ?'))
e.target.parentElement.parentElement.remove();
}

// nettoyer la liste de tâches
function nettoyerLaListe(){
    listeTache.innerHTML = ''
}

// filtrer
function filterLesTaches(e) {
    const contenuClavier = e.target.value.toLowerCase() /* => affiche tous ce que l'utilisateur tape sur son clavier 
    + le "toLowerCase" pour pour garder les caractères en miniscule*/
    document.querySelectorAll('.collection-item').forEach(
        function(tache){
            const motCle = tache.firstChild.textContent;
            if(motCle.toLocaleLowerCase().indexOf(contenuClavier) != -1){
                tache.getElementsByClassName.display='block'
            }else{
                tache.style.display = 'none'
            }
        }
    );

    console.log(contenuClavier);
}
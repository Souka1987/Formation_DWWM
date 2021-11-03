// DOM - Document Object Mode
/*======================================================*/

/*let n;
n = document;
n = document.all
n = document.all [1]
n = document.head
n = document.title
n = document.URL

console.log(n);


// Style

let liste;

/*liste = document.querySelector("li")
liste = document.querySelector("li:nth-child(3)")

liste.style.color = "blue"
liste.style.backgroundColor = "red"*/

/*liste = document.querySelectorAll("ul li")
liste[1].style.color = "blue"

console.log(liste);

for (var i = 0; i < liste.length; i++){
/*liste[i].style.backgroundColor = "green"
liste[i].style.cssText = "color: #fff; background-color: blue"}*/

/*========================================*/

// GetElementById


/*let n;

n = document.getElementById('course-liste')
n.textContent = "coucou !"
n.style.color = "green" 

console.log(n);*/

/*let m;
m = document.getElementById('liste');
m.innerHTML
m.innerHTML = "<h3>Coucou !</h3>"

console.log(m);
*/

// GetElementByClassName

/*let liste;

liste = document.getElementsByClassName('collection-item')
liste[1].style.color = "red"
liste[2].textContent = "des fraises"

for(var i = 0; i < liste.length; i ++){ /*=> pour mettre toute la liste en rouge
    liste[i].style.color = "red"
}


console.log(liste);*/

/* ==================================== *

// Node list

let n = document.querySelectorAll("li")
console.log(n[1]);

n.forEach(function(li){
    li.style.backgroundColor = "blue"

}
)

// HTMLCollection

let n = document.getElementsByTagName("li")

/*n.forEach(function(li){
    li.style.backgroundColor = "blue"
}*/

/*for(var i = 0; i < n.length; i ++){
    n[i].style.backgroundColor = "blue"
}


Array.from(n).forEach(function(li){
    li.style.backgroundColor = "red"
})
console.log(n);*/

// Les events

/*la propriété onclick permet de générer une action*
const h3 = document.querySelector("h3")

/*h3.onclick = function(){
    console.log("coucou !");
}

h3.onmouseover = function(){
    console.log("Hop !");
}

h3.addEventListener("click", function(e){
            console.log(e.target);
}) 

const form = document.getElementById("main")
form.addEventListener("mousemove", mouseTracking);
function mouseTracking(e) {
    h3.textContent = `l'axe X: ${e.offsetX} - l'axe Y: ${e.offsetY}` /*=> Pour afficher l'axe de la souris*
}

function messageBienvenue (){
    let delay = new Date().getTime() + 4000 /*=> 4000 = 4 secondes*
    while(new Date() < delay) {}
    //console.log("Bienvenue");
    prompt("Bonjour, quel est votre prénom ?") /* => avec le prompt cela crée un événement comme un modal*
}

messageBienvenue()

/* ==========================================*/

// Les getAttribute (pour demander la valeur d'une propriété) et setAttribute (modifier la valeur d'une propriété)

/*let li = document.querySelector("li")

let n = li
n = li.getAttribute("class")
n = li.setAttribute("style", "font-style: italic; color: blue")
li.style.fontSize = "30px" /*=> Il s'agit d'une autre manière de modifier une valeur autre que "setAttribute"*
li.removeAttribute("style") /*=> Pour supprimer les modif que l'on vient de créer*

console.log(n);*

let img = document.querySelector("img");
img.onclick = function (){
  //let src = img.getAttribute("src") /*=> Pour afficher la source, ici "logo.png"*
  //alert(src)
  let src = img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/fr/f/f5/Dragon_ball_logo.png") /*=> Pour changer le logo*
}
console.log(img);

/*====================================================*/

// Naviguer dans le DOM

/*let nav;

const liste = document.querySelector("li.collection-item")
/*=> "ParentNode" pour se déplacer d'enfants à parents dans le code*
nav = liste.parentNode.parentNode.style.color = "green"
nav = liste.parentElement.style.color = "pink"

nav = liste.childNodes
nav = liste.children
nav = liste.firstChild
nav = liste.lastChild
nav = liste.firstElementChild

console.log(nav);*/

/*=====================================================*/

// Le local storage

/*Stockage des informations pour afficher sur le navigateur, VOIR DANS "INSPECTER" PUIS "APPLICATION" + "LOCAL STORAGE"*

localStorage.setItem("name", "Yoshikage")
localStorage.setItem("age", "33")
/*localStorage.removeItem("name") /* Pour supprimer la variable "name" depuis le local storage*
localStorage.getItem("name") /*l'attribut "get" permet d'appeler "name"

OU*
let name = localStorage.getItem("name")

/*afficher dans "application" + "session storage"*
sessionStorage.setItem("name", "Ayato")

localStorage.clear() /*=> Pour tous éffacer*/


// créer l'évènement save()

function save() {
    let tache = document.getElementById('tache').value;
    localStorage.setItem('nameTask', tache)
}


// créer l'évènement remove()

function remove() {
    document.getElementById('tache').value = '';
    localStorage.removeItem('nameTask')
}

//Le preventDefault()

/*changer l'état de la case à cocher*/
/*const lienGoogle = document.getElementById("google")
const cg = document.getElementById("cg")

lienGoogle.addEventListener("click", function(e){
    if (!cg.checked){
    e.preventDefault()
    }
})*/
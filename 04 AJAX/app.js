// XHR

//document.getElementById('button').addEventListener('click', message)

//function message(){
// Objet XHR (XMLHttpRequest), il permet d'interagir avec des serveurs.
// const xhr = new XMLHttpRequest();

// Open
//xhr.open('GET', 'data.txt', true)


//  xhr.onload = function(){

//console.log('READYSTATE', xhr.readyState);

//if (this.status === 200){
//  document.getElementById('réponse').innerHTML = `<p>${this.responseText}</p>`
//   console.log(this.responseText);

//   }
// }
// xhr.send()

// valeurs readyState
// 0: requête n'est pas initialisée
// 1: la connection avec le serveur est établie
// 2: la requête est reçue
// 3: la requête est en cours de procédure
// 4: la requête est terminée et la réponse est prête



// status HTTP
// 200: "ok"
// 404: "la page n'existe pas"
// 403: "interdit"
//}



/*=====================================================================*/

// XHR avec un fichier j.son


document.getElementById('button').addEventListener('click', message)

function message() {
    //Objet XHR(XMLHttpRequest) il permet d'interagir avec des serveurs.
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'user.json', true)


    xhr.onload = function () {


        if (this.status === 200) {
            //'parse', pour récuperer des informations
            const user = JSON.parse(this.responseText)


            document.getElementById('réponse').innerHTML = `
            
            <ul>
            <li> id: ${user.id}</li>
            <li> name: ${user.name}</li>
            <li> marié: ${user.married}</li>
            </ul>
            
            
            `


        }
    }
    xhr.send()
}
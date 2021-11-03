// Var, Let, Const

/*var lastname = "Gavroche";
console.log(lastname);

lastname = "Cosette";
console.log(lastname);

// Let

let letFirstName = "Thénardier";
let letAge = "20";
console.log(letFirstName, letAge);
letFirstName = "Valjean";
console.log(letFirstName);

//const

const  ThénardierFamily = {
    name: "Gavroche",
    age: "20"
}
console.log(ThénardierFamily);

const pizza = ["tomates", "pattes", "poulet"]
console.log(pizza);


/*========================================================*/


// types de valeurs

// Valeurs primitives :

// String
/*var firstname = "Thénardier";

// Number
var age = 20;

// Boolean
var job = false;

// Undefined
var country;

// Null
var email = null;

// Symbol

var symbol = (symbol);


//Types de références

// Array
var date = [1789, 1790, 1791];

// Objet litteral
var ThénardierFamily = {
    name: "Gavroche",
    age: 20
}
console.log(typeof ThénardierFamily);*

// Operators
let yearComan = 2020 - 1996;
console.log(yearComan);

let year, yearMuller;
year = 2020;
yearMuller = year - 1989;
console.log(yearMuller);

const yearNereur = 1986;
let ageNeuyer = year - yearNereur;
console.log(ageNeuyer);

//

const trois = 3;
const quatre = 4;
let total;

total = trois + quatre;
console.log(total);

// Math objet

console.log(Math.PI);
console.log(Math.round(10.9));
Math.round();*/

/*console.log(Math.sqrt (9)); /*"sqrt" pour la racine carré d'un nombre*/
/*Math.sqrt();

/*console.log(Math.abs(-14.99)); /*"abs" pour la valeur absolue d'un nombre*/
/*console.log(Math.ceil(2.1));  /* retourne le plus petit entier supérieur ou égal à la valeur passé en paramètre*/
/*console.log(Math.floor(4.9));  /* retourne le plus grand entier supérieur ou égal à la valeur passé en paramètre*/
/*console.log(Math.min(9,8,7,6,5)); /*retourne la plus petite valeur d'une liste de nombres = ici, 5*/
/*console.log(Math.max(9,8,7,4,3)); /*retourne la plus grande valeur d'une liste de nombres = ici, 9*/
/*console.log(Math.random()); /*donne un nombre aléatoire compris entre 0 et 1*/


/*===============================================*/

//Type Coercion

const x = 5 + "5"; /*au lieu de 10 on obtient 55 en résultat car le "5" avec les guillemets est devenu une chaine de caractères eu lieu d'un nombre*/
console.log(x);

//

const z = "Breton" + 3 + 5;
console.log(z); /*cela donne Breton 35*/
const zz = 3 + 5 + "Breton";
console.log(zz); /*cela donne 8 Breton*/

/* Ces valeurs ne sont pas bonnes, ATTENTION ! Javascript lit le code de gauche à droite*/

/*==================================================*/

// PARTIE 1

// On va additionner des chînes de caractères avec l'opérateur +

/*const firstname = "Gavroche";
const lastname = "Thénardier";
const age = 20;
const citation = "Je ne veux pas vieillir"

let user;
/*user = firstname + lastname + age;*/
/*user = " je m'appelle " + firstname + " " + lastname + " et j'ai " + age + " ans."; /*faire des espaces même entre les guillemets*/
/*console.log(user);

// PARTIE 2

// Les méthodes de chaînes de caractères

/* l'objet global "string" est un CONSTRUCTEUR de chaines de caractères séparés par des guillemets de ce genre ''.*/

// Méthode concat.
/*user = firstname.concat(' ', lastname); /*"concat" va chercher la valeur de la variable "fristname"*/
/*console.log(user);

// PARTIE 3

// Méthode lenght => longueur de la chaîne de caractères exprimée en nombre de points de code UTF-16
user = firstname.length;
console.log(user); /*ici, = à 8 car Gavroche contient 8 lettres*/

//PARTIE 4

// Méthode ToUpperCase() => Pour mettre une chaîne de carctères en majuscule
/*user = firstname.toUpperCase();
user = firstname[1] /* ici, c'est le "a" de Gavroche car dans Javascript on commence tjs par "0" qui correspond donc à "1"*/
/*console.log(user);

// PARTIE 5

// Méthode endsWith()
user = citation.endsWith("r") /*ici, on demande si il y a bien un "r" à la fin de la citation. Réponse "true"*/
/*console.log(user);

// PARTIE 6

//Methode includes()
user = citation.includes("vieillir")/*on cherche si un caractère est inclus*/
/*console.log(user);

// PARTIE 7

// Méthode replace()
user = citation.replace(/vieillir/g, "rajeunir");
console.log(user);

// PARTIE 8

// Méthode search()
user = citation.search("vieillir");
console.log(user);

// PARTIE 9

// Méthode split()
user = citation.split(' '); /*diviser pour créer un tableau*/
/*console.log(user);

/*=============================================*/

// Templates literals: Modèles de libéllés. ATTENTION ! A ne pas confondre avec la concaténation.

/*const name = "Gavroche";
const age = 20;

const hello = `Yo ! Je m'appelle ${name} ! Et j'ai ${age} ans.`
console.log(hello);

/*====================================================*/

// les arrays => signifie tableaux, on utilise tjs des crochets [] dont les valeurs sont séparer par des virgules.

// PARTIE 1

/*const number = [1,2,3,4,5]
console.log(number);

/*const avengers = ["Thor", "SpiderMan", "IronMan" ]
console.log(avengers);*/

const hero = ["Thor", 30, true, {LvLAttack: 20, LvLDefense: 30}, [1,2,3], function() {return "Boom!"}]
console.log(hero);

// PARTIE 2

const légumes = new Array ("tomate", "radis", "poireau");
console.log(légumes);

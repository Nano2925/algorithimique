// ------------------------------------ Les Commentaires ------------------------------------
// un comaintair//
//  //  un commentaire multiligne //  en javascript
//
// ------------------------------------------- Affichage ------------------------------------

//Afficher des informations dans la consonle de debbugage du navigateur
console.log("hello, World");

//Afficher une boite de dialogue avec champs à remplir
//let reponse = prompt('Quel est votre age?')
//console.log(reponse)

// --------------------------------------- Les Variables ------------------------------------
// Declarer d'une variable

/*
let uneVariable;

// Affectation d'une variable
uneVariable = "Je suis une Variable";

console.log(uneVariable);

// Les 2 se font généralement en meme temps
// Les variables sont sensibles à la casse
let helloworld = "Hello, World";

console.log(helloworld);
//les differents types de variables
let messages = "un message";
let number = 20;
let decimal = 20.5;
let boolean = true;
let boolean2 = false;

// les opérations arithmétiques
// Déclarer 3 variables sum, number1 , number2
//Affecter le nombre 10 à number1
// Affecter le nombre 20 à number2
// Affecter à sum l'operation de multiplication des 2 variables précédents
let sum;
let number1 = 10;
let number2 = 20;
sum = number1 * number2;
console.log(sum);

----------------------------------------- La Concatenation ----------------------------------
let firstName = "manoj";
let lastName = "gnanavel";

// Je m'appelle (firstName ,lastName)
console.log("je m'appelle" + firstName + lastName);

// Déclarer une variable city, afficher le méssage j'adore vivre à <city>
let city = "paris";
city = `paris`;
city = "paris";

console.log(`j'adore vivre à ${city}`);
console.log(
  `je m'appelle ${firstName} ${lastName} et j'adore vivre à ${city}}`
);

// --------------------------------------- Les Variables ------------------------------------
// Demander à l'utilisateur s'il accepte les cgv

let agree = prompt("Acceptez-vous les Cgv");
// Si, Sinon (if, else)
if (agree == "ok") {
  console.log("vous avez accepté les conditions!");
} else {
  console.log("vous n'avez pas acceptez les conditions");
}


// si, si non si, sinon
// si il répond yes
// vous etes rédirigé vers le site en anglais
// Sinon si il répond oui
// vous etes redirigé vers le site en français
// Sinon si il répond da
// vous etes redirigé vers le site en russe
// Sinon
//Vous ne pouvez pas acceder au site


let accept = prompt("langue du site");
if (accept == "yes") {
  console.log("vous etes dirigé vers le site en anglais");
} else if (accept == "oui") {
  console.log("vous etes dirigé vers le site en français");
} else if (accept == "da") {
  console.log("vous etes dirigé vers le site en russe");
} else if (accept == "jp") {
  console.log("vous etes dirigé vers le site en japonais");
} else {
  console.log("vous ne pouvez pas acceder au site");
}

console.log('la suite..') 


//--------------------------------Les operateurs de comparaison ---------------------------------

// Déclarer une variable qui s' appelle variable, lui assigner la valeur 16
// Si la variable est egale à 16 afficher félicitation

let variable = prompt('variable')
// (> supperieur) (=egale) (>= superieur et egale à)
if (variable >=16){
    console.log('félicitations')
}


// ==, >, >=, <, <=, !=, ===
// ET (&&)


// Ecrire un algorithme qui demande à l'utilisateur son age.
// Il idique ensuite à l'utilisateur quel flim il peut aller voir.
// "action man" si il a moins de 13ans
//"matrix" si il a entre 13et 18ans
// "evil dead" si il a plus de 18 ans


let age = prompt('saisir votre age')

if (age <= 13) {
    console.log('action man')
} else if (age >= 13 && age <= 18 ){   
    console.log('matrix')
} else if (age >= 18){
    console.log('evil dead')
}



// Demander à l'utilisateur 
// sa nationalité

// Si il est français et qu'il a plus de 18 ans ou s'il est etranger et qu'il est etranger
//et qu'il a moins de 18 ans 
// Assistance juridique gratuite

let age = prompt('quel est ton age')
let nationalite = prompt('quelle est votre naionalite')
if (nationalite == 'francais' && age >= 18 ||nationalite != 'francais' && age < 18){
    console.log('vous avez le droit à une assstance juridique')
}

// Demande sa nationalité
// si il est français
// Demander à l'utilisateur son age
// si il a plus de 18 ans
//droit au APL
// sinon
// vous n'avez aucun droit

*/

//let nationalite = prompt("quelle est votre nationalité");
//if (nationalite == "francais"){
//  let age = prompt("quel est votre age");
//  if (age >= 18)
//    console.log("vous avez le droit au Apl");
//  } else {
//    console.log("vous n'avez aucune droit");
//
//}

//----------------------------------------Les boucles-----------------------------------------

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

// Boucle à iteration non definies (while)

//let i = 0
//while(i<9){
//  i=i+1
//  console.log(i);
//}

//

// Afficher la table de  multipillcation de 7

//let a = 0;
//while (a < 10) {
//  let res = a * 7;
//  console.log(`${a} x 7 = ${res}`);
//  a = a = 1}  



// Ecire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
let a = 10
let b = 99
console.log(a, b)
let temp = a
a= b
b= temp 
console.log(a, b)

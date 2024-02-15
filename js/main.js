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

// ----------------------------------------- La Concatenation ----------------------------------
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


// let age = prompt('saisir votre age')
// 
// if (age <= 13) {
    // console.log('action man')
// } else if (age >= 13 && age <= 18 ){   
    // console.log('matrix')
// } else if (age >= 18){nationalit
    // console.log('evil dead')
// }



// Demander à l'utilisateur 
// sa 0é

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
*/

// Afficher la table de  multipillcation de 7

// let i = 0;
// while (i < 10) {
//  let res = i * 7;
// }
//  console.log(`${i} x 7 = ${res}`);

// Ecire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
//let a = 10
//let b = 99
//console.log(a, b)
//let temp = a
//a= b
//b= temp
//console.log(a, b)

// Declarer vos revenus de 20000 euros
// Tant que vos revenu ne sont pas superieur a 30000 euros
// chaque année mes revenus augmennte de 10%
// Au Bout de combien d'année mes revenus dépasseront 30000 euros

let revenu = 20000;
let yea = 0;

while (revenu < 30000) {
  revenu = revenu + revenu * 0.1;
  yea = yea + 1;
}

console.log(`il faudra ${yea} années, mon revenu sera de ${revenu}`);

// La population de la vile Marrakech est de 1, 000, 000 d'habitants et elle augmente de 50, 000 par an.
// La Population de la ville Agadir est  de 500, 000 habitants et elle augmente de 8% par an.
// Ecrire un algo permettant de déterminer dans combien d' années la population de la ville Agadir déparrera
// Celle de la ville Marrakech

let marrakech = 1000000;
let agadir = 500000;
let year = 0;
while (agadir < marrakech) {
  agadir = agadir * 1.08;
  marrakech = marrakech + 50000;
  year++;
  // year = year + 1
  // year +=1
}
console.log(`il faudra ${year} années avant que..`);

// Boucle à iteration definies  (for)
for (let i = 1; i < 11; i++) {
  let res = i * 10;
  console.log(`${i} x 10 = ${res}`);
}
// Ecrire un algo qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus
// ou au dessous de la bonne valeur

// Demande à l'utilisateur un nombre
// Tant que la rponse n'est pas bonne12
// Si sa chiffre est inférieur au chiffre magique
// Le nombre magique est plus grand, donne moi une autre réponse
// Sinon
// Le nombre magique est plus petit , donne moi une autre réponse15
// Le nombre magique était bien

// let mag = prompt("trouve la numero magique");
// let n1 = 12;
// if (mag > n1) {
// console.log("le nombre est plus grand donne une autre réponse");
// }
// if (mag < n1) {
// console.log("le nombre est plus petit donne une autre réponse");
// } else if (mag === n1) {
// console.log("le nombre magique etait bien");
// }

// Correction

// let magic = 135;
// let res = prompt("Donne Moi Ta Réponse");

// while (res != magic) {
//   if (res < magic) {
//     res = prompt("trop petit");
//   } else {
//     res = prompt("trop grand");
//   }
// }
// console.log('bravo')


// ---------------------------------------Les Fonctions--------------------------------------------

// Une Fonction est un block d'instructions réutilisable 
// Elle peut prendre des parametres
// Elle est déclarée avec le mot clé function

function helloWorld(){
  console.log('Hello World')
}


function calculNasa(){
    let resu = 25
    let essence = 65
    let anneeLumiere = 856
    let solution = resu*essence/anneeLumiere*75

    return solution
}
let solution = calculNasa



// Ecrire une Fonction qui affiche bonjour 

function BonJour(){
  console.log('Bonjour!')
}
BonJour()
BonJour()
BonJour()


// Ecrire une fonction qui prend un parametre et qui affiche bonjour [le prénom pasée en parametre]

function BienVenue(name){
  console.log('Bonjour '+ name)
}

BienVenue('manoj')
BienVenue('laoe')



// Ecrire une fonction qui calcule la perimètre d' un carré et l'afficher

function squAre(x, y){
   
    console.log('la perimetre du carré est '+ x * y + ' cm') 
 
}

squAre(15, 15)




// Algorithme qui calcule et affiche le carre d'un nombre 


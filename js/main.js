/* ------------------------------------ Les Commentaires ------------------------------------*/


// un comaintaire

/*  
    un commentaire multiligne 
    en javascript 
*/

/* ------------------------------------------- Affichage ------------------------------------*/

//Afficher des informations dans la consonle de debbugage du navigateur
console.log('hello, World') 

/* --------------------------------------- Les Variables ------------------------------------*/
// Declarer d'une variable
let uneVariable

// Affectation d'une variable
uneVariable = 'Je suis une Variable'

console.log(uneVariable)


// Les 2 se font généralement en meme temps
// Les variables sont sensibles à la casse 
let helloworld = 'Hello, World'

console.log(helloworld)
//les differents types de variables
let messages = 'un message';
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
sum = number1*number2;
console.log(sum);

/* ----------------------------------------- La Concatenation ----------------------------------*/
let firstName = 'manoj'
let lastName = 'gnanavel'

// Je m'appelle (firstName ,lastName)
console.log("je m'appelle"+ firstName + lastName);

// Déclarer une variable city, afficher le méssage j'adore vivre à <city>
 let city = 'paris'
 city = `paris`
 city = "paris"

 console.log(`j'adore vivre à ${city}`)
 console.log(`j'adore vivre à ${city} et je m'appelle ${firstName} ${lastName}`)
 
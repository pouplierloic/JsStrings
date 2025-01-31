let chaine = "Bonjour";

// printing exercise 1 :
console.log(chaine, reverse(chaine));

// printing exercise 2 : (it should actually just be printing the function comp_voy_(str))
console.log(print_vowels_count());


// printing exercise 3 : 
console.log(isAPalindrome(chaine));


// ex 1 : reverse a string
function reverse(str) {
    let str_inv ="";
    for (let i = str.length-1; i >= 0; --i) {
        str_inv += str[i];
    }
    return str_inv;
}

// ex 2 : returns how many vowels are in chaine 
function comp_voy(str) {
    let compteur = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];

    for (let i = 0; i < str.length; ++i) {
        if(voyelles.includes(str[i])) {
            compteur += 1;
        }
    }
    return compteur;
}

// this function is not part of the homework, it returns a phrase saying the result of the previous function 
function print_vowels_count() {
    let combien = comp_voy(chaine);
    let voyelle = ' voyelle';
    if (combien > 1){
        voyelle = ' voyelles';
    }
    return 'il y a ' + combien +  voyelle + ' dans ' + chaine;
}


// ex 3 : checks if chaine is a palindrome, if you change chaine to "kayak" it returns true
function isAPalindrome(str){
    return str.toLowerCase() === reverse(str).toLowerCase();
}


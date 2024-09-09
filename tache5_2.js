// Écrire un script qui permet d'afficher la table de multiplication d'un nombre entier n.
// a refaire avc dom


let nombre = parseInt(prompt('Saisir un nombre'));

const title = document.getElementById('subtitle');
title.textContent = 'la table de '+ nombre +' est: ';

const para = document.getElementsByTagName('p');

for(let i = 1; i <= 10; i++) {
    let resultat = nombre * i;
    
    if (para[i-1]) { 
        para[i-1].textContent = nombre + ' x ' + i + ' = ' + resultat;
    }
}

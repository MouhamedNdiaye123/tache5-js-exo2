// Écrire un script qui permet d'afficher la table de multiplication d'un nombre entier n.

let nombre = parseInt(prompt('Saisir un nombre'));
    // document.write(typeof nombre)
    console.log('la table de '+ nombre + ' est: ');
    
for(let i = 1; i<=10; i++){
    console.log(nombre +' x ' + i +' = ' + nombre*i);
}
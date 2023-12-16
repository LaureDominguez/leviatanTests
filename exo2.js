// ## Exercice 2
// #### Description :
// Dans le langage de votre choix, écrire un programme qui prend en entrée une liste de nombres entiers positifs et qui renvoie la somme des nombres pairs de cette liste.


export function Exo2() {    
    let nombres = [1, 52, 3, 48, 12, 2, 7, 6, 25, 93, 45];
    let totalPair = 0;
    for (let i = 0; i < nombres.length; i++){
        if (nombres[i] % 2 === 0) {
            totalPair += nombres[i];
            // console.log(nombres[i] + ' est un nombre pair. Résultat total = ' + totalPair);
            afficherReponse(nombres[i] + ' est un nombre pair. Résultat total = ' + totalPair);
        } else {
            // console.log(nombres[i]);
            afficherReponse(nombres[i]);
        }
    }
    // console.log('Résulat final = ' + totalPair);
    afficherReponse('Résulat final = ' + totalPair);

    function afficherReponse(reponse) {
        var div = document.getElementById('reponse2');
        var parag = document.createElement('p');
        parag.textContent = reponse;
        div.appendChild(parag);
    }
}
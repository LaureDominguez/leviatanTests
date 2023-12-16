// ## Exercice 3
// #### Description :
// Dans le langage de votre choix, écrire un programme qui prend en entrée une chaîne de caractères et retourne cette chaîne inversée.


export function Exo3() {
    console.log('pouet');
    var userInput = document.getElementById("exo3")

    userInput.addEventListener('input', function () {
        var texte = userInput.value;
        
			console.log(texte);
			afficherReponse(texte);
		});

    function afficherReponse(reponse) {
        var div = document.getElementById('reponse3');
        div.textContent = reponse;
    }
}
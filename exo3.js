// ## Exercice 3
// #### Description :
// Dans le langage de votre choix, écrire un programme qui prend en entrée une chaîne de caractères et retourne cette chaîne inversée.

// #### Contraintes :
// - Les librairies sont interdites.
// - Ne pas utiliser de méthodes ou fonctions intégrées pour inverser la chaîne.


export function Exo3() {
	const userInput = document.getElementById('exo3');

	// Récupère la valeur de l'input à chaque fois qu'elle est modifié par l'utilisateur
	userInput.addEventListener('input', function () {
		const texte = userInput.value;

		// La méthode split() divise la string en array
		const texteArray = texte.split('');

		// ********* correction après avoir relu la contrainte :
		const reverseArray = [];
		for (let i = texteArray.length - 1; i >= 0; i--) {
			reverseArray.push(texteArray[i]);
			console.log(reverseArray);
		}
		// ********* fin de la correction

		// join() combine le array en string
		const inverse = reverseArray.join('');

		afficherReponse(inverse);
	});

	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse3');
		div.textContent = reponse;
	}
}
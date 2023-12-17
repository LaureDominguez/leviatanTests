// ## Exercice 3
// #### Description :
// Dans le langage de votre choix, écrire un programme qui prend en entrée une chaîne de caractères et retourne cette chaîne inversée.


export function Exo3() {
	const userInput = document.getElementById('exo3');

	// Récupère la valeur de l'input à chaque fois qu'elle est modifié par l'utilisateur
	userInput.addEventListener('input', function () {
		const texte = userInput.value;

		const inverse = texte.split('').reverse().join('');
		// La méthode split() divise la string en array,
		// reverse() inverse l'index du array,
		// join() combine le array en string
		
		afficherReponse(inverse);
	});

	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse3');
		div.textContent = reponse;
	}
}
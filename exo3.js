// ## Exercice 3
// #### Description :
// Dans le langage de votre choix, écrire un programme qui prend en entrée une chaîne de caractères et retourne cette chaîne inversée.


export function Exo3() {
	const userInput = document.getElementById('exo3');

	userInput.addEventListener('input', function () {
        const texte = userInput.value;
        // console.log(texte);

		const inverse = texte.split('').reverse().join('');
		// console.log(inverse);
		afficherReponse(inverse);
	});

	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse3');
		div.textContent = reponse;
	}
}
// ## Exercice 4
// #### Description:
// Dans le langage de votre choix, écrire une fonction qui prend en entrée une chaîne de caractères et retourne True si la chaîne est un palindrome, et False sinon.
// > Note : Un palindrome est un mot, une phrase ou une autre séquence de caractères qui se lit de la même manière à l'endroit et à l'envers, en ignorant la casse, la ponctuation, les accents et les espaces (par exemple : radar ou Ève rêve).


export function Exo4() {
	const userInput = document.getElementById('exo4');

	userInput.addEventListener('input', function () {
		const texte = userInput.value.toLowerCase();
		// transforme tous les caractères en minuscules

		const inverse = texte.split('').reverse().join('');

		// si le texte inversé === le texte de base, alors on a un palindrome
		// (j'ai ajouté le texte.length > 1 pour qu'il ne retourne pas "Palindrome!" quand le champ est vide)
		if (texte.length > 1 && texte === inverse) {
			afficherReponse('Palindrome !');
		} else {
			afficherReponse('Nop');
		}
	});

	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse4');
		div.textContent = reponse;
	}
}
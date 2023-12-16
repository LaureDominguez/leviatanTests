// ## Exercice 4
// #### Description:
// Dans le langage de votre choix, écrire une fonction qui prend en entrée une chaîne de caractères et retourne True si la chaîne est un palindrome, et False sinon.
// > Note : Un palindrome est un mot, une phrase ou une autre séquence de caractères qui se lit de la même manière à l'endroit et à l'envers, en ignorant la casse, la ponctuation, les accents et les espaces (par exemple : radar ou Ève rêve).


export function Exo4() {
	const userInput = document.getElementById('exo4');

	userInput.addEventListener('input', function () {
		const texte = userInput.value.toLowerCase();
		// console.log(texte);
		const inverse = texte.split('').reverse().join('');

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
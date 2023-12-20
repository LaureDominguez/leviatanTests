// ## Exercice 4
// #### Description:
// Dans le langage de votre choix, écrire une fonction qui prend en entrée une chaîne de caractères et retourne True si la chaîne est un palindrome, et False sinon.
// > Note : Un palindrome est un mot, une phrase ou une autre séquence de caractères qui se lit de la même manière à l'endroit et à l'envers, en ignorant la casse, la ponctuation, les accents et les espaces (par exemple : radar ou Ève rêve).

// #### Contraintes :
// - Les librairies sont interdites.
// - Ne pas utiliser de méthodes ou fonctions intégrées pour déterminer si la chaîne est un palindrome.
// - Ignorer la casse, la ponctuation, les accents et les espaces


export function Exo4() {
	const userInput = document.getElementById('exo4');

	userInput.addEventListener('input', function () {
		// ********* correction après avoir relu la contrainte :

		const texte = userInput.value
			.toLowerCase() // transforme tous les caractères en minuscules
			.replace(/[.,\/#!$%\^&@\*;:{}=\-_`~()]/g, '') // supprime la ponctuation
			.replace(/[à@äâ]/g, 'a') // remplace les accents par lettre simple
			.replace(/[éëêè]/g, 'e')
			.replace(/[ïî]/g, 'i')
			.replace(/[öô]/g, 'o')
			.replace(/[üû]/g, 'u')
			.replace(/[ç]/g, 'c');

		// fonction reprise de l'exo3
		const texteArray = texte.split('');
		const reverseArray = [];
		for (let i = texteArray.length - 1; i >= 0; i--) {
			reverseArray.push(texteArray[i]);
			console.log(reverseArray);
		}
		// join() combine le array en string
		const inverse = reverseArray.join('');

		// si le texte inversé === le texte de base, alors on a un palindrome
	
		// (********* j'ai appris qu'un lettre seule pouvait être considérée comme un palindrome, donc j'ai réduit ma condition à un champs non vide)
		if (texte != 0 && texte === inverse) {
			afficherReponse(inverse + ' Palindrome !');
		} else {
			afficherReponse(inverse + ' Nop');
		}

		// ********* fin de la correction
	});

	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse4');
		div.textContent = reponse;
	}
}
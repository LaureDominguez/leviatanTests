// ## Exercice bonus 2
// #### Description :
// Écrire une fonction qui prend en entrée une liste d'entiers et un nombre entier K. La fonction doit retourner True si deux nombres distincts de la liste peuvent être additionnés pour obtenir K, et False sinon.

// #### Contraintes :
// - Les librairies sont interdites.


// ********* correction : mes boucles étaient mal imbriquées et ne peremettaient pas de renvoyer le bon résultat :

export function Bonus2() {
	const userInput = document.getElementById('exoB2');
	const nombres = [1, 2, 3, 4, 5];
	// ********* ajout d'un input pour changer plus facilement le nombre K
	userInput.addEventListener('input', function () {
		const K = userInput.value;
		let a = 0;
		let b = 0;
		let somme = 0;
		let paire = false;

		// 1ere boucle for pour parcourir le tableau
		for (let i = 0; i < nombres.length; i++) {
			// on garde la valeur du nombre 'i' dans 'a'
			a = nombres[i];

			// 2eme boucle for pour parcourir le tableau à partir de 'j', soit 'i'+1 (pour ne pas comparer 'a' avec lui même)
			for (let j = i + 1; j < nombres.length; j++) {
				// on garde la valeur du nombre 'j' dans 'b'
				b = nombres[j];
				// on garde la valeur de a + b pour la comparer facilement
				somme = a + b;

				if (somme == K) {
					console.log('pouet');
					// si la somme de 'a'+'b' est bien égale à K, on sort de la boucle et affiche le résultat
					paire = true;
					break;
				}
			}

			if (paire) {
				afficherReponse('True : ' + a + ' + ' + b);
				break;
			} else {
				afficherReponse('False');
			}
		}

// ********* fin de la correction

		/**********************************************/

		// Affiche le nombre K et la liste des nombres à additionner
		const enonce = document.getElementById('enonceB2');

		if (K < 2 || K > 9) {
			enonce.innerHTML =
				'<span class="error">Le chiffre n\'est pas conforme</span>';
		} else {
			enonce.innerHTML =
				'Nombre à trouver : ' + K + '<br> Liste de nombres : ' + nombres;
		}

		function afficherReponse(reponse) {
			const div = document.getElementById('reponseB2');
			div.textContent = reponse;
		}
	});
};
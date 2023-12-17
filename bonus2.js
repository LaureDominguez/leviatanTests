// ## Exercice bonus 2
// #### Description :
// Écrire une fonction qui prend en entrée une liste d'entiers et un nombre entier K. La fonction doit retourner True si deux nombres distincts de la liste peuvent être additionnés pour obtenir K, et False sinon.

export function Bonus2() {
	const nombres = [1, 2, 3, 4, 5];
	const K = 9;
	const paire = false;

	// 1ere boucle for pour parcourir le tableau
	for (let i = 0; i < nombres.length; i++) {
		// on garde la valeur du nombre 'i' dans 'a'
		const a = nombres[i];

		// 2eme boucle for pour parcourir le tableau à partir de 'j', soit 'i'+1 (pour ne pas comparer 'a' avec lui même)
		for (let j = i + 1; j < nombres.length; j++) {
			// on garde la valeur du nombre 'j' dans 'b'
			const b = nombres[j];

			if (a + b === K) {
				// si la somme de 'a'+'b' est bien égale à K, on sort de la boucle et affiche le résultat
				afficherReponse('True');
				break;
			} else {
				// sion on renvoi 'False'
				afficherReponse('False');
				break;
			}
		}
	}

	/**********************************************/

	// Affiche le nombre K et la liste des nombres à additionner
	const enonce = document.getElementById('enonceB2');
	enonce.innerHTML = 'Nombre à trouver : ' + K + '<br> Liste de nombres : ' + nombres;

	function afficherReponse(reponse) {
		const div = document.getElementById('reponseB2');
		div.textContent = reponse;
	}
};
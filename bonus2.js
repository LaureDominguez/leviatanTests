// ## Exercice bonus 2
// #### Description :
// Écrire une fonction qui prend en entrée une liste d'entiers et un nombre entier K. La fonction doit retourner True si deux nombres distincts de la liste peuvent être additionnés pour obtenir K, et False sinon.

export function Bonus2() {
	console.log('giga pouet');

	const nombres = [1, 2, 3, 4, 5];
    const K = 9;
    const paire = false;

	for (let i = 0; i < nombres.length; i++) {
		const a = nombres[i];
		// console.log('a = ' + a);
		for (let j = i + 1; j < nombres.length; j++) {
			const b = nombres[j];
			// console.log('b = ' + b);
			if ((a + b) === K) {
				// console.log('True = ' + (a+b));
                afficherReponse('True = ' + (a + b));
                break;
			} else {
				// console.log('False');
                afficherReponse('False');
                break;
			}
		}
    }
    
	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponseB2');
		div.textContent = reponse;
	}
};
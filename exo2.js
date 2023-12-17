// ## Exercice 2
// #### Description :
// Dans le langage de votre choix, écrire un programme qui prend en entrée une liste de nombres entiers positifs et qui renvoie la somme des nombres pairs de cette liste.


export function Exo2() {
	let nombres = [1, 52, 3, 48, 12, 2, 7, 6, 25, 93, 45];
	let totalPair = 0;

	for (let i = 0; i < nombres.length; i++) {
		if (nombres[i] % 2 === 0) {
			totalPair += nombres[i];
			afficherReponse(
				nombres[i] + ' est un nombre pair. Résultat total = ' + totalPair
			);
		} else {
			afficherReponse(nombres[i]);
		}
	}

	/**********************************************/

	// Affiche la liste des nombres à additionner
	const enonce = document.getElementById('enonce2');
	enonce.textContent = 'Liste de nombres : ' + nombres;

	// Affiche la somme de tous les nombres pairs
	afficherReponse('Résulat final = ' + totalPair);

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse2');
		const parag = document.createElement('p');
		parag.textContent = reponse;
		div.appendChild(parag);
	}
}
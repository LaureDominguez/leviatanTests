// ## Exercice 1
// #### Description :
// Dans le langage de votre choix, écrire un programme, pour les nombres entre 1 et 101 inclus :
// - **si le nombre est divisible par 3** : on écrit Levia
// - **si le nombre est divisible par 5** : on écrit Tan
// - **si le nombre est divisible par 3 et par 5** : on écrit LeviaTan
// - **sinon** : on écrit le nombre


export function Exo1() {
	for (let i = 1; i <= 101; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			// console.log('Leviatan');
			afficherReponse(' Leviatan,');
		} else if (i % 3 === 0) {
			// console.log('Levia');
			afficherReponse(' Levia, ');
		} else if (i % 5 === 0) {
			// console.log('Tan');
			afficherReponse(' Tan, ');
		} else {
			// console.log(i);
			afficherReponse(' ' + i + ',');
		}
	}

	/**********************************************/

	function afficherReponse(reponse) {
		const div = document.getElementById('reponse1');
		const span = document.createElement('span');
		span.textContent = reponse;
		div.appendChild(span);
	}
}
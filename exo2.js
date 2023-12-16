export function Exo2() {
    function afficherReponse(reponse) {
			var div = document.getElementById('reponse2');
			var parag = document.createElement('p');
			parag.textContent = reponse;
			div.appendChild(parag);
    }
    
    let nombres = [1, 52, 3, 48, 12, 2, 7, 6, 25, 93];
    let totalPair = 0;
    for (let i = 0; i < nombres.length; i++){
        if (nombres[i] % 2 === 0) {
            totalPair += nombres[i];
            console.log(nombres[i] + ' est un nombre pair. Résultat total = ' + totalPair);
            afficherReponse(nombres[i] + ' est un nombre pair. Résultat total = ' + totalPair);
        } else {
            console.log(nombres[i]);
            afficherReponse(nombres[i]);
        }
    }
    console.log('Résulat final = ' + totalPair);
    afficherReponse('Résulat final = ' + totalPair);
}
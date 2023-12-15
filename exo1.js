export function Exo1() {
    function afficherReponse(reponse) {
        var div = document.getElementById('reponse1');
        var span = document.createElement('span');
        span.textContent = reponse;
        div.appendChild(span);
    }

    for (let i = 1; i <= 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Leviatan');
            afficherReponse(' Leviatan,');

        } else if (i % 3 === 0) {
            console.log('Levia');
            afficherReponse(' Levia, ');
        } else if (i % 5 === 0) {
            console.log('Tan');
            afficherReponse(' Tan, ');
        } else {
            console.log(i);
            afficherReponse(' ' + i + ',');
        }
    }
}
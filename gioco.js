let punteggi = {
    hongjoong: 0,
    seonghwa: 0,
    yunho: 0,
    yeosang: 0,
    san: 0,
    mingi: 0,
    wooyoung: 0,
    jongho: 0
};

const bottone = document.getElementById("risultato");
const restartBtn = document.getElementById("restart");

bottone.addEventListener("click", controllaQuiz);
restartBtn.addEventListener("click", resetQuiz);

function controllaQuiz() {

    // reset punteggi ogni volta
    punteggi = {
        hongjoong: 0,
        seonghwa: 0,
        yunho: 0,
        yeosang: 0,
        san: 0,
        mingi: 0,
        wooyoung: 0,
        jongho: 0
    };

    let vincitore = "";
    let max = -1;

    for (let i = 1; i <= 5; i++) {

        const risposta = document.querySelector(`input[name="q${i}"]:checked`);

        if (risposta) {
            punteggi[risposta.value]++;
        }
    }

    for (let membro in punteggi) {
        if (punteggi[membro] > max) {
            max = punteggi[membro];
            vincitore = membro;
        }
    }

    document.getElementById("output").textContent =
        "Il tuo membro è: " + vincitore;
}

function resetQuiz() {

    for (let membro in punteggi) {
        punteggi[membro] = 0;
    }

    document.querySelectorAll('input[type="radio"]').forEach(r => {
        r.checked = false;
    });

    document.getElementById("output").textContent = "";
}
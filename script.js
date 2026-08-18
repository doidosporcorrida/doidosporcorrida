const btnMasculino = document.getElementById("btn-masculino");
const btnFeminino = document.getElementById("btn-feminino");

const rankingMasculino = document.getElementById("ranking-masculino");
const rankingFeminino = document.getElementById("ranking-feminino");

const btn5kmMasculino = document.getElementById("btn-5km-masculino");
const btn5kmFeminino = document.getElementById("btn-5km-feminino");

const ranking5kmMasculino = document.getElementById("ranking-5km-masculino");
const ranking5kmFeminino = document.getElementById("ranking-5km-feminino");

const btn10kmMasculino = document.getElementById("btn-10km-masculino");
const btn10kmFeminino = document.getElementById("btn-10km-feminino");

const ranking10kmMasculino = document.getElementById("ranking-10km-masculino");
const ranking10kmFeminino = document.getElementById("ranking-10km-feminino");

const btnMeiaMasculino = document.getElementById("btn-meia-masculino");
const btnMeiaFeminino = document.getElementById("btn-meia-feminino");

const rankingMeiaMasculino = document.getElementById("ranking-meia-masculino");
const rankingMeiaFeminino = document.getElementById("ranking-meia-feminino");

const btnMaratonaMasculino = document.getElementById("btn-maratona-masculino");
const btnMaratonaFeminino = document.getElementById("btn-maratona-feminino");

const rankingMaratonaMasculino = document.getElementById("ranking-maratona-masculino");
const rankingMaratonaFeminino = document.getElementById("ranking-maratona-feminino");

if (
    btnMasculino &&
    btnFeminino &&
    rankingMasculino &&
    rankingFeminino
) {
    btnMasculino.addEventListener("click", function () {
        rankingMasculino.style.display = "block";
        rankingFeminino.style.display = "none";

        btnMasculino.classList.add("active");
        btnFeminino.classList.remove("active");
    });

    btnFeminino.addEventListener("click", function () {
        rankingMasculino.style.display = "none";
        rankingFeminino.style.display = "block";

        btnMasculino.classList.remove("active");
        btnFeminino.classList.add("active");
    });
}
if (
    btn5kmMasculino &&
    btn5kmFeminino &&
    ranking5kmMasculino &&
    ranking5kmFeminino
) {
    btn5kmMasculino.addEventListener("click", function () {
        ranking5kmMasculino.style.display = "block";
        ranking5kmFeminino.style.display = "none";

        btn5kmMasculino.classList.add("active");
        btn5kmFeminino.classList.remove("active");
    });

    btn5kmFeminino.addEventListener("click", function () {
        ranking5kmMasculino.style.display = "none";
        ranking5kmFeminino.style.display = "block";

        btn5kmMasculino.classList.remove("active");
        btn5kmFeminino.classList.add("active");
    });
}
if (
    btn10kmMasculino &&
    btn10kmFeminino &&
    ranking10kmMasculino &&
    ranking10kmFeminino
) {
    btn10kmMasculino.addEventListener("click", function () {
        ranking10kmMasculino.style.display = "block";
        ranking10kmFeminino.style.display = "none";

        btn10kmMasculino.classList.add("active");
        btn10kmFeminino.classList.remove("active");
    });

    btn10kmFeminino.addEventListener("click", function () {
        ranking10kmMasculino.style.display = "none";
        ranking10kmFeminino.style.display = "block";

        btn10kmMasculino.classList.remove("active");
        btn10kmFeminino.classList.add("active");
    });
}

if (
    btnMeiaMasculino &&
    btnMeiaFeminino &&
    rankingMeiaMasculino &&
    rankingMeiaFeminino
) {
    btnMeiaMasculino.addEventListener("click", function () {
        rankingMeiaMasculino.style.display = "block";
        rankingMeiaFeminino.style.display = "none";

        btnMeiaMasculino.classList.add("active");
        btnMeiaFeminino.classList.remove("active");
    });

    btnMeiaFeminino.addEventListener("click", function () {
        rankingMeiaMasculino.style.display = "none";
        rankingMeiaFeminino.style.display = "block";

        btnMeiaMasculino.classList.remove("active");
        btnMeiaFeminino.classList.add("active");
    });
}
if (
    btnMaratonaMasculino &&
    btnMaratonaFeminino &&
    rankingMaratonaMasculino &&
    rankingMaratonaFeminino
) {
    btnMaratonaMasculino.addEventListener("click", function () {
        rankingMaratonaMasculino.style.display = "block";
        rankingMaratonaFeminino.style.display = "none";

        btnMaratonaMasculino.classList.add("active");
        btnMaratonaFeminino.classList.remove("active");
    });

    btnMaratonaFeminino.addEventListener("click", function () {
        rankingMaratonaMasculino.style.display = "none";
        rankingMaratonaFeminino.style.display = "block";

        btnMaratonaMasculino.classList.remove("active");
        btnMaratonaFeminino.classList.add("active");
    });
}
function mostrarSecao(secao) {
    const inicio = document.getElementById("inicio");
    const ranking = document.getElementById("ranking");
    const provas = document.getElementById("provas");
    const provasMilha = document.getElementById("provas-milha");
    const provas5km = document.getElementById("provas-5km");
    const provas10km = document.getElementById("provas-10km");
    const provasMeia = document.getElementById("provas-meia");
    const provasMaratona = document.getElementById("provas-maratona");
    const tempos = document.getElementById("tempos-limites");
    const criterios = document.getElementById("criterios");
    const contato = document.getElementById("contato");
    const milha = document.getElementById("milha");
    const cincoKm = document.getElementById("5km");
    const dezKm = document.getElementById("10km");
    const meiaKm = document.getElementById("meia");
    const maratonaKm = document.getElementById("maratona");

    if (inicio) inicio.style.display = "none";
    if (ranking) ranking.style.display = "none";
    if (provas) provas.style.display = "none";
    if (provasMilha) provasMilha.style.display = "none";
    if (provas5km) provas5km.style.display = "none";
    if (provas10km) provas10km.style.display = "none";
    if (provasMeia) provasMeia.style.display = "none";
    if (provasMaratona) provasMaratona.style.display = "none";
    if (tempos) tempos.style.display = "none";
    if (criterios) criterios.style.display = "none";
    if (contato) contato.style.display = "none";
    if (milha) milha.style.display = "none";
    if (cincoKm) cincoKm.style.display = "none";
    if (dezKm) dezKm.style.display = "none";
    if (meiaKm) meiaKm.style.display = "none";
    if (maratonaKm) maratonaKm.style.display = "none";

    switch (secao) {
        case "inicio":
            if (inicio) inicio.style.display = "block";
            break;

        case "ranking":
            if (ranking) ranking.style.display = "flex";
            break;

        case "provas":
            if (provas) provas.style.display = "flex";
            break;

        case "provas-milha":
            if (provasMilha) provasMilha.style.display = "block";
            break;
        case "provas-5km":
            if (provas5km) provas5km.style.display = "block";
            break;
        case "5km":
    if (cincoKm) cincoKm.style.display = "block";
    break;
        case "10km":
    if (dezKm) dezKm.style.display = "block";
    break;
case "meia":
    if (meia) meia.style.display = "block";
    break;
case "maratona":
    if (maratonaKm) maratonaKm.style.display = "block";
    break;
        case "provas-10km":
            if (provas10km) provas10km.style.display = "block";
            break;
        case "provas-meia":
            if (provasMeia) provasMeia.style.display = "block";
            break;
        case "provas-maratona":
            if (provasMaratona) provasMaratona.style.display = "block";
            break;
        case "tempos":
            if (tempos) tempos.style.display = "block";
            break;

        case "criterios":
            if (criterios) criterios.style.display = "block";
            break;

        case "contato":
            if (contato) contato.style.display = "block";
            break;

        case "milha":
            if (milha) milha.style.display = "block";
            break;
    }
}
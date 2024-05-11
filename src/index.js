// Definição do nome e Experiência do herói
let NomeDoHeroi = "Kraytos";
let xp = 10000; // Exemplo de XP

// Verificação do nível do herói com base na XP
let NivelDeCombate;
if (xp < 1000) {
    NivelDeCombate = "Ferro";
} else if (xp <= 2000) {
    NivelDeCombate = "Bronze";
} else if (xp <= 5000) {
    NivelDeCombate = "Prata";
} else if (xp <= 7000) {
    NivelDeCombate = "Ouro";
} else if (xp <= 8000) {
    NivelDeCombate = "Platina";
} else if (xp <= 9000) {
    NivelDeCombate = "Ascendente";
} else if (xp <= 10000) {
    NivelDeCombate = "Imortal";
} else if (xp <= 12000) {
    NivelDeCombate = "Radiante";
}


console.log(" O Herói de nome " + NomeDoHeroi + " está no nível de " + NivelDeCombate);
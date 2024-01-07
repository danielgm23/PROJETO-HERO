let nomeHeroi = "tucão esponja"

console.log("Olá " + nomeHeroi + "  seja bem vindo ao jogo DANI'RPG, aqui vamos dar inicio a sua jornada!")
console.log("Neste mundo de guerreiros, voce é classificado, pela quantidade de XP que você tem!\ncomo você fez o seu cadastro na pré-venda, estamos disponibizando quantas poções de XP voce quiser! ")
console.log("Ah certo!! Voce escolheu 21 poções?! Vamos começar a tomar entao!")

var experiencia = 0
var rank = ""
for (var i = 1 ; i <= 21; i++){
    console.log("Hmmmmmm! Tomando mais uma poção!")
    experiencia = experiencia + 500
    console.log("seu XP atual é " + experiencia)
    

}
if (experiencia <= 1000){
    rank = "Ferro"
}else if (experiencia <= 2000){
    rank = "Bronze"
}else if (experiencia <= 5000){
    rank = "Prata"
}else if (experiencia <= 7000){
    rank = "Ouro"        
}else if (experiencia <= 8000){
    rank = "Platina"
}else if (experiencia <= 9000){
    rank = "Ascendente"    
}else if (experiencia <= 10000){
    rank = "Imortal"
}else  
    rank = "Radiante"  


console.log("\nO Herói de nome " + nomeHeroi +  " está no nível de: " + rank)
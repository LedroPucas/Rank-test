function rank(victories = 0){
    switch (true) {
        case  victories <= 10:
            return "Ferro"
        case  victories <= 20:
            return "Bronze"
        case victories <= 50:
            return "Prata"
        case victories <= 80:
            return "Ouro"
        case victories <= 90:
            return "Diamante"
        case victories <= 100:
            return "Lendário"
        case victories > 100:
            return "Imortal"
    
        default:
            return "Ferro"
    }
}

let victories = 12
let level = rank(victories)
console.log(`O Herói tem de saldo de ${victories} está no nível de ${level} `)
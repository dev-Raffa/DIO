function heroRank(wins, defeats){
    let nivel = ''
    let saldo = wins - defeats
    
    if(saldo < 11){
       nivel =  'Ferro'
    } else if (saldo < 21){
        nivel = 'Bronze'
    } else if (saldo < 51){
        nivel = 'Prata'
    } else if (saldo < 81){
        nivel = 'Ouro'
    } else if (saldo < 91){
        nivel = 'Diamante'
    } else if (saldo < 101){
        nivel = 'Lendário'
    } else if (saldo >= 101){
        nivel = 'Imortal'
    }

    return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}.`
}


const arr =  [
    {
        wins: 15, defeats: 20
    },
    {
        wins: 78, defeats: 10
    },
    {
        wins: 84, defeats: 50
    },
    {
        wins: 154, defeats: 25
    },
    {
        wins: 95, defeats: 5
    },
]


arr.map((hero)=> console.log(heroRank(hero.wins, hero.defeats)))
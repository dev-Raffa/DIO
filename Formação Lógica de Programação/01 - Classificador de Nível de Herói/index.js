function heroRank(name, xp){
    let rank = ''
    
    if( xp < 1001){
       rank =  'Ferro'
    } else if (xp < 2001){
        rank = 'Bronze'
    } else if (xp < 5001){
        rank = 'Prata'
    } else if (xp < 7001){
        rank = 'Ouro'
    } else if (xp < 8001){
        rank = 'Platina'
    } else if (xp < 9001){
        rank = 'Ascendente'
    } else if (xp < 10001){
        rank = 'Imortal'
    }  else if (xp >= 10001){
        rank = 'Radiante'
    }

    return `O Herói de nome ${name} está no nível de ${rank}.`
}


const arr =  [
    {
        name:'Freez', xp: 1580
    },
    {
        name:'Buzz', xp: 7810
    },
    {
        name:'Litner', xp: 8450
    },
    {
        name:'Jiul', xp: 5415
    },
    {
        name:'Ann', xp: 11580
    },
]


arr.map((hero)=> console.log(heroRank(hero.name, hero.xp)))
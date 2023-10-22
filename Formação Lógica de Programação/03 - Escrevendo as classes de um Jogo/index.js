


class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atack() {
        switch(this.type){
            case 'guerreiro': {
                return 'o guerreito atacou usando espada'
            }
            case 'mago': {
                return 'o mago atacou usando usou magia'
            }
            case 'monge': {
                return 'o monge atacou usando artes maciais'
            } 
            default: {
                return 'o ninja atacou usando shuriken'
            }
        }
    }
            
}



const liu = new hero('Liu', 22, 'nija')
const kang = new hero('kang', 32, 'mago')
const ann = new hero('Ann',27, 'guerreiro')
const mia = new hero('Mia', 58, 'monge')

const arr= [
    liu,
    kang,
    ann,
    mia
]

arr.map(hero=> console.log(hero.atack()))

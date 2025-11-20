class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let ataque;

        switch (this.type) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`O heroi ${this.name}, do tipo ${this.type}, atacou usando ${ataque}`);
    }
}

let myHero = new Hero("Blitera", 20, "ninja");
myHero.atacar();

let anotherHero = new Hero("Arthas", 30, "guerreiro");
anotherHero.atacar();

class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
      }
    }
    
// Solicita ao usuário para digitar o nome, a idade e a classe
const nomeHeroi = gets();
const idadeHeroi = parseInt(gets());
print("Considere apenas 4 classes diferentes de heroi: Mago, Guerreiro, Monge ou Ninja")
const classeHeroi = gets();
  
const heroiPersonalizado = new Heroi(nomeHeroi, idadeHeroi, classeHeroi);

if (classeHeroi ==='Mago'){
    let ataque = "magia";
    print("o "+heroiPersonalizado.tipo+" atacou usando "+ataque+".");
} else if (classeHeroi === 'Guerreiro'){
    let ataque = "espada";
    print("o "+heroiPersonalizado.tipo+" atacou usando "+ataque+".");
} else if (classeHeroi === 'Monge'){
    let ataque = "artes marciais";
    print("o "+heroiPersonalizado.tipo+" atacou usando "+ataque+".");
} else if (classeHeroi === 'Ninja'){
    let ataque = "shuriken";
    print("o "+heroiPersonalizado.tipo+" atacou usando "+ataque+".");
} else {
    print("Você escolheu uma classe inexistente.")
}
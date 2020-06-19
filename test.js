function Person(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;

    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () {};

    this.damage = function () {};

    this.totalDamage = this.damage();

    this.displayChar = function () {
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    }
}
function creationpersonnage1(race1,item1){
    let playerone = new Person(race1,item1);
    return playerone;
}
function creationpersonnage2(race2,item2){
    let playertwo = new Person(race2,item2);
    return playertwo;
}

let joueur1 = creationpersonnage1("Orc","Boots");
let joueur2 = creationpersonnage1("Elf","Staff");
console.log(joueur1);
console.log(joueur2);


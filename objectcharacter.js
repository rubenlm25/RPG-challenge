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
    };
}

function attack() {
    let startdammage;
    let actualdammage;
    let returndammage = 0;
    startdammage = Math.floor(Math.random() * 20) + 3;
    actualdammage = startdammage;
    switch (player1.item) {
        case "Sword":
            actualdammage = startdammage + ((startdammage / 100) * 30);
            break;
        case "Bow":
            actualdammage *= 2;
            break;
    }
    switch (player2.race) {
        case "Human":
            actualdammage = actualdammage - ((actualdammage / 100) * 20);
            break;
        case "elfe":
            let chance = Math.floor(Math.random() * 100);
            if(chance<=30){
                returndammage = actualdammage/2;
                actualdammage = 0;
                currenthealth.player1-=returndammage;
            }
            break;
            }
            currenthealth.player2-=actualdammage;

    }
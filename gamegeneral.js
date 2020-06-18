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
function attack(atacker,defender) {
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
//test personnage//
let playerone = Person("Human","Boots");
let playertwo = Person("Elf","Staff");
///////////////////
let turn = 1;
let finishturn;
let finishgame = 0;
let atacker;
let defenser;
let actionatk;
let actionheal;
let actionyield;
////////////////////
while(finishgame == 0){
    finishturn = 0;
    if(turn%2==0){
        atacker = playertwo;
        defenser = playerone;
        actionatk = document.getElementById("hit-char-2");
        actionheal = document.getElementById("heal-char-2");
        actionyield = document.getElementById("yield-char-2");

    }
    else{
        atacker = playerone;
        defenser = playertwo;
        actionatk = document.getElementById("hit-char-1");
        actionheal = document.getElementById("heal-char-1");
        actionyield = document.getElementById("yield-char-1");
    }
    while(finishturn == 0){
        if(actionatk.click == true){
            attack(atacker,defenser);
            finishturn = 1;
        }
        else if(actionheal.click == true){

        }
        else if(actionyield.click == true){
            finishturn = 1;
            finishgame = 1;
            victory = defenser;
        }
    }
    turn ++;
}

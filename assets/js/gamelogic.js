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

function attack(atacker, defender) {
    let startdammage;
    let actualdammage;
    let returndammage = 0;
    startdammage = Math.floor(Math.random() * 20) + 3;
    actualdammage = startdammage;
    switch (atacker.item) {
        case "Sword":
            actualdammage = startdammage + ((startdammage / 100) * 30);
            break;
        case "Bow":
            actualdammage *= 2;
            break;
    }
    switch (defender.race) {
        case "Human":
            actualdammage = actualdammage - ((actualdammage / 100) * 20);
            break;
        case "elfe":
            let chance = Math.floor(Math.random() * 100);
            if (chance <= 30) {
                returndammage = actualdammage / 2;
                actualdammage = 0;
                atacker.currenthealth -= returndammage;
            }
            break;
    }
    currenthealth.player2 -= actualdammage;
    

}

function commencement() {
    console.log("nous allons voir qui commence");
    let begin = Math.round(Math.random());
    console.log(begin);
    if (begin == 0) {
        console.log("joueur 1 commence");
        return (0);
    } else {
        console.log("joueur 2 commence");
        return (1);
    }

}

function game(race1, race2, item1, item2) {
    let playerone = new Person(race1, item1);
    let playertwo = new Person(race2, item2);
    if (playerone.race == "Orc") {
        playerone.maxHealth = 140;
        playerone.currenthealth = 140;
    }
    if (playertwo.race == "Orc") {
        playertwo.maxHealth = 140;
        playertwo.currenthealth = 140;
    }
    console.log(playerone.currenthealth);
    let turn = 1;
    let finishturn;
    let finishgame = 0;
    let atacker;
    let defenser;
    let actionatk;
    let actionheal;
    let actionyield;
    let valeurdepart = commencement();
    // while (finishgame == 0) {
        finishturn = 0;
        if (valeurdepart == 0) {
            if (turn % 2 == 0) {
                atacker = playertwo;
                defenser = playerone;
                actionatk = document.getElementById("hit-char-2");
                actionheal = document.getElementById("heal-char-2");
                actionyield = document.getElementById("yield-char-2");

            } else {
                atacker = playerone;
                defenser = playertwo;
                actionatk = document.getElementById("hit-char-1");
                actionheal = document.getElementById("heal-char-1");
                actionyield = document.getElementById("yield-char-1");
            }
        }
        else{
            if (turn % 2 == 0) {
                atacker = playerone;
                defenser = playertwo;
                actionatk = document.getElementById("hit-char-1");
                actionheal = document.getElementById("heal-char-1");
                actionyield = document.getElementById("yield-char-1");
    
            } else {
                atacker = playertwo;
                defenser = playerone;
                actionatk = document.getElementById("hit-char-2");
                actionheal = document.getElementById("heal-char-2");
                actionyield = document.getElementById("yield-char-2");
            }
        }
        console.log(atacker);
        console.log(defenser);

        
        while (finishturn == 0) {
            console.log("rentrer dans la boucle");
            if(atacker.race == "Vampire"){
                let lifesteal = (defenser.currenthealth/100)*10;
                defenser.currenthealth-=lifesteal;
                if(atacker.currenthealth+lifesteal>atacker.maxHealth){
                    atacker.currenthealth=atacker.maxHealth
                }
                else{
                    atacker.currenthealth+=lifesteal;
                }
            }
            if (actionatk.click == true) {
                attack(atacker, defenser);
                finishturn = 1;
            } else if (actionheal.click == true) {
                finishturn=1;
            } else if (actionyield.click == true) {
                finishturn = 1;
                finishgame = 1;
                victory = defenser;
            }
        }
        
        turn++;
        console.log(turn);
    }
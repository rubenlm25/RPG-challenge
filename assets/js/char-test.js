function Person(race, item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}




// variables pour les effets des races
let
    humanBonus,
    orcBonus,
    elfBonus,
    vampireBonus,
    health;
    healthBonus;




// fonction gérant le bonus de l'humain
humanBonus = lessDamage();
function lessDamage() {
    finalDamage / 100 * 20;
}


// fonction gérant le bonus de l'orc
orcBonus = moreHealth();
function moreHealth() {
    health + 40;
}


// fonction gérant le bonus de l'elf
elfBonus = deflectAndReturn();
function deflectAndReturn() {
    deflectAndReturnChance = Math.floor(Math.random() * 100);

    if (deflectAndReturnChance <= 30) {
        function attack()
        finalDamage / 100 * 50;
    }
}


// fonction gérant le bonus du vampire
vampireBonus = lifeSteal();
function lifeSteal() {
    
    if (player1) {
        stealValue = (player2.currentHealth / 100) * 10;
        return player1.currentHealth + stealValue;
    }
    else if (player2) {
        stealValue = (player1.currentHealth / 100) * 10;
        return player2.currentHealth = stealValue;
    }
}


// variables pour les effets des items
let
    damage,
    damageValue,
    addedDamage,
    finalDamage,
    healing,
    healingValue,
    addedHealing,
    finalHealing,
    surrender,
    boots,
    dodgeChanceValue,
    staff,
    sword,
    bow,
    attackingTwiceChance;




// fonction gérant l'attaque
damage = attack();
function attack() {
    damageValue = Math.floor(Math.random() * 20 + 3);

    switch (player.item) {
        case "Sword":
            return sword;
            break;
        case "Bow":
            return bow;
            break;
        default:
            return false;
    }
}

// fonction gérant l'effet du sword (offre 30% de dégâts en plus)
sword = swordEffect();
function swordEffect() {
    addedDamage = damage / 100 * 30;
    finalDamage = damage + Math.round(addedDamage);
}

// fonction gérant l'effet du bow (30% de chance d'attaquer une 2ème fois)
bow = bowEffect();
function bowEffect() {
    attackingTwiceChance = Math.floor(Math.random() * 100);
    
    if (attackingTwiceChance <= 30) {
        return attack()
    }
    else {
        return false;
    }
}




// fonction gérant le soin
healing = heal();
function heal() {
    healingValue = Math.floor(Math.random() * 30 + 3);

    switch (player.item) {
        case "Staff":
            return staff;
            break;
        default:
            return false;
    }
}

// fonction gérant l'effet du staff (offre 20% de soin en plus)
staff = staffEffect();
function staffEffect() {
    addedHealing = healingValue / 100 * 20;
    finalHealing = healingValue + Math.round(addedHealing);
    return finalHealing;
}







// fonction gérant l'effet de l'item boots (offrent 30% de chance d'esquiver une attaque)
boots = bootsEffect();
function bootsEffect() {
    dodgeChanceValue = Math.floor(Math.random() * 100);
    
    if (dodgeChanceValue <= 30) {
        return attack();
    }
    else {
        return false;
    }
}




// fonction de tirage au sort
let numberChoice;
numberChoice = randomPick();
function randomPick() {
    numberValue = Math.round(Math.random());
    
    switch(numberValue) {
        case 0:
            return player1.name + " commence la partie.";
            break;
        
        case 1:
            return player2.name + " commence la partie.";
            break;
    }
}
function Person(race,item){
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
var startdammage;
var actualdammage
function attack (){
    startdammage = Math.floor(Math.random() * 20) + 3;
    switch(player1.item){
        case "Sword": actualdammage= startdammage +(startdammage/100*30);
        break;
        case "Bow" : actualdammage*=2;
        break;
        
    }
}
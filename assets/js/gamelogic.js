let buttonatkp1=document.getElementById("hit-char-1");
let buttonhealp1=document.getElementById("heal-char-1");
let buttonyieldp1=document.getElementById("yield-char-1");
let buttonatkp2=document.getElementById("hit-char-1");
let buttonhealp2=document.getElementById("heal-char-1");
let buttonyieldp2=document.getElementById("yield-char-1");
let attacker;
let defender;
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
function verificationmort(healone,healtwo){
    if(healone <= 0){
        finishgame = 2;
    }
    if(healtwo <= 0){
        finishgame = 1;
    }
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
    defender.currenthealth -= actualdammage;
    console.log("atack de "+actualdammage+ "il reste ");
    


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
function disablep1(){
    buttonatkp1.disabled = true;
    buttonhealp1.disabled = true;
    buttonyieldp1.disabled = true;
}
function disablep2(){
    buttonatkp2.disabled = true;
    buttonhealp2.disabled = true;
    buttonyieldp2.disabled = true;
}
function enablep1(){
    buttonatkp1.disabled = false;
    buttonhealp1.disabled = false;
    buttonyieldp1.disabled = false;
}
function enablep2(){
    buttonatkp2.disabled = false;
    buttonhealp2.disabled = false;
    buttonyieldp2.disabled = false;
}
function switchatkdef(){
    let copy = attacker;
    attacker = defender;
    defender = copy;
}
// function game(race1, race2, item1, item2) {
//     let playerone = new Person(race1, item1);
//     let playertwo = new Person(race2, item2);
//     let finishgame = 0;
//     if (playerone.race == "Orc") {
//         playerone.maxHealth = 140;
//         playerone.currenthealth = 140;
//     }
//     if (playertwo.race == "Orc") {
//         playertwo.maxHealth = 140;
//         playertwo.currenthealth = 140;
//     }
//     console.log(playerone.currenthealth);
//     let valeurtour = commencement();
//     console.log(valeurtour);
    
//     if(valeurtour == "0"){
//         disablep1();
//         attacker = playertwo;
//         defender = playerone;
        
//     }
//     if(valeurtour == "1"){
//         disablep2();
//         attacker = playerone;
//         defender = playertwo;
//     }


// }
function creationpersonnage(race,item){
    let player = new Person(race,item);
    return player;
}
buttonatkp1.addEventListener("click",function(){
    attack(attacker,defender);
    disablep1();
    enablep2();
    switchatkdef();
    verificationmort(playerone.currenthealth,playertwo.currenthealth);
    
    
});
buttonhealp1.addEventListener("click",function(){
    heal;
    disablep1();
    enablep2();
    switchatkdef();

});
buttonyieldp1.addEventListener("click",function(){
    finishgame = 2;
});
buttonatkp2.addEventListener("click",function(){
    attack(attacker,defender);
    disablep2();
    enablep1();
    switchatkdef();
});
buttonhealp2.addEventListener("click",function(){
    heal;
    disablep2();
    enablep1();
    switchatkdef();
});
buttonyieldp2.addEventListener("click",function(){
    finishgame = 1;
});
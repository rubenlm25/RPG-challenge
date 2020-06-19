let healthBar = document.getElementById("healthbar");
let value = Number(healthbar.getAttribute("value"));


// damage
let damage;

document.getElementById("button").addEventListener("click", function() {
    if (value >= 1) {
        damage = Math.floor(Math.random() * 17 + 3);
        value = value - damage;
        console.log("You took " + damage + " of damage !");
        healthbar.setAttribute("value", value);
    }
});


// heal
let heal;

document.getElementById("buttonHeal").addEventListener("click", function() {
    if (value <= 99) {
        heal = Math.floor(Math.random() * 27 + 3);
        value = value + heal;
        console.log("You regained " + heal + " points of health !");
        healthbar.setAttribute("value", value);
    }
    else {
        console.log("Your life is full.");
    }
});
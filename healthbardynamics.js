let healthBar = document.getElementById("healthbar");
let value = Number(healthbar.getAttribute("value"));
let damage;

document.getElementById("button").addEventListener("click", function() {
    damage = Math.floor(Math.random() * 27 + 3);
    value = value - damage;
    console.log("You took " + damage + " of damage !");
    healthbar.setAttribute("value", value);
});
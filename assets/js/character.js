

    // differente variable pour pointer les diferents element
    let nav = document.querySelector(".character");
    let choiceracep1 = document.querySelector(".choiceracep1");
    let choiceitemp1 = document.querySelector(".choiceitemp1");
    let choiceracep2 = document.querySelector(".choiceracep2");
    let choiceitemp2 = document.querySelector(".choiceitemp2");
    let titleracep1 = document.querySelector(".titleracep1");
    let titleitemp1 = document.querySelector(".titleitemp1");
    let titleracep2 = document.querySelector(".titleracep2");
    let titleitemp2 = document.querySelector(".titleitemp2");
    let innerracep1 = document.querySelector(".titleracep1").innerHTML;
    let innerracep2 = document.querySelector(".titleracep2").innerHTML;
    let inneritemp1 = document.querySelector(".titleitemp1").innerHTML;
    let inneritemp2 = document.querySelector(".titleitemp2").innerHTML;
    let buttonatkp1=document.getElementById("hit-char-1");
    let buttonhealp1=document.getElementById("heal-char-1");
    let buttonyieldp1=document.getElementById("yield-char-1");
    let buttonatkp2=document.getElementById("hit-char-1");
    let buttonhealp2=document.getElementById("heal-char-1");
    let buttonyieldp2=document.getElementById("yield-char-1");
    let attacker;
    let defender;
    let wordrace = "Race";
    let worditems = "Items";
    let imgitem = [
        "./assets/images/boots.png",
        "./assets/images/bow.png",
        "./assets/images/staff.png",
        "./assets/images/sword.png"
    ]
    let imgrace = [
        "./assets/images/elf.png",
        "./assets/images/human.png",
        "./assets/images/orc.png",
        "./assets/images/vampire.png"
    ]
    let playerone;
    let playertwo;
    let confirm = 0;
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
        if(healone.currenthealth <= 0){
            finishgame = 2;
            console.log("finis");
            
        }
        if(healtwo.currenthealth <= 0){
            finishgame = 1;
            console.log("finis");
            
        }
    }
    function attack(atacker, defender) {
        let startdammage;
        let actualdammage;
        let returndammage = 0;
        console.log("je suis dans attaque");
        console.log(atacker);

        
        
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
        console.log("atack de "+actualdammage+ "il reste "+defender.currenthealth);
        
    
    
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
    // confirmation de la selection personnage et objet
    

    // menu deroulant player 1

    // menu deroulant race
    document.querySelector(".titleracep1").addEventListener("click", function () {
        choiceracep1.classList.add("isopen");
    });
    document.getElementById("orcp1").addEventListener("click", function () {
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Orc";
        document.getElementById("character-visual1").src = imgrace[2];

    });
    document.getElementById("elfp1").addEventListener("click", function () {
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Elf";
        document.getElementById("character-visual1").src = imgrace[0];

    });
    document.getElementById("humanp1").addEventListener("click", function () {
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Human";
        document.getElementById("character-visual1").src = imgrace[1];

    });
    document.getElementById("vampirep1").addEventListener("click", function () {
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Vampire";
        document.getElementById("character-visual1").src = imgrace[3];

    });

    ///////////////////////////////////////////////////////////////////////////////////
    // menu deroulant item
    document.querySelector(".titleitemp1").addEventListener("click", function () {
        choiceitemp1.classList.add("isopen");

    });
    document.getElementById("bootsp1").addEventListener("click", function () {
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Boots";
        document.getElementById("item-visual1").src = imgitem[0];
    });
    document.getElementById("staffp1").addEventListener("click", function () {
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Staff";
        document.getElementById("item-visual1").src = imgitem[2];
    });
    document.getElementById("swordp1").addEventListener("click", function () {
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Sword";
        document.getElementById("item-visual1").src = imgitem[3];

    });
    document.getElementById("bowp1").addEventListener("click", function () {
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Bow";
        document.getElementById("item-visual1").src = imgitem[1];

    });
    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    // menu deroulant player 2
    document.querySelector(".titleracep2").addEventListener("click", function () {
        choiceracep2.classList.add("isopen");
    });
    document.getElementById("orcp2").addEventListener("click", function () {
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Orc";
        document.getElementById("character-visual2").src = imgrace[2];

    });
    document.getElementById("elfp2").addEventListener("click", function () {
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Elf";
        document.getElementById("character-visual2").src = imgrace[0];
    });
    document.getElementById("humanp2").addEventListener("click", function () {
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Human";
        document.getElementById("character-visual2").src = imgrace[1];
    });
    document.getElementById("vampirep2").addEventListener("click", function () {
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Vampire";
        document.getElementById("character-visual2").src = imgrace[3];

    });


    //////////////////////////////////////////////////////////////////
    document.querySelector(".titleitemp2").addEventListener("click", function () {
        choiceitemp2.classList.add("isopen");
    });
    document.getElementById("bootsp2").addEventListener("click", function () {
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Boots";
        document.getElementById("item-visual2").src = imgitem[0];
    });
    document.getElementById("staffp2").addEventListener("click", function () {
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Staff";
        document.getElementById("item-visual2").src = imgitem[2];
    });
    document.getElementById("swordp2").addEventListener("click", function () {
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Sword";
        document.getElementById("item-visual2").src = imgitem[3];
    });
    document.getElementById("bowp2").addEventListener("click", function () {
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Bow";
        document.getElementById("item-visual2").src = imgitem[1];
    });
    document.querySelector(".pconfirm").addEventListener("click", function () {
        innerracep1 = document.querySelector(".titleracep1").innerHTML;
        innerracep2 = document.querySelector(".titleracep2").innerHTML;
        inneritemp1 = document.querySelector(".titleitemp1").innerHTML;
        inneritemp2 = document.querySelector(".titleitemp2").innerHTML;
        let name1 = document.getElementById("nameone").value;
        let name2 = document.getElementById("nametwo").value;
        if (innerracep1 != wordrace && innerracep2 != wordrace && inneritemp1 != worditems && inneritemp2 != worditems && name1 != "" && name2 != "") {
            nav.classList.add("isclose");
            playerone = new Person(innerracep1,inneritemp1);
            playertwo = new Person(innerracep2,inneritemp2);
        } else {
            alert("error");
        }
    });
    buttonatkp1.addEventListener("click",function(){
        attack(playerone,playertwo);
        disablep1();
        enablep2();
        switchatkdef();
        verificationmort(playerone,playertwo);
        
        
    });

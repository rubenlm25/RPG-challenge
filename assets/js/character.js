(function () {

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
    let player1;
    let player2;
    // confirmation de la selection personnage et objet
    document.querySelector(".pconfirm").addEventListener("click", function () {
        let innerracep1 = document.querySelector(".titleracep1").innerHTML;
        let innerracep2 = document.querySelector(".titleracep2").innerHTML;
        let inneritemp1 = document.querySelector(".titleitemp1").innerHTML;
        let inneritemp2 = document.querySelector(".titleitemp2").innerHTML;
        let name1 = document.getElementById("nameone").value;
        let name2 = document.getElementById("nametwo").value;
        if (innerracep1 != wordrace && innerracep2 != wordrace && inneritemp1 != worditems && inneritemp2 != worditems && name1 != "" && name2 != "") {
            nav.classList.add("isclose");
            player1 = new Person(titleracep1, titleracep2);
            player2 = new Person(titleracep2, titleitemp2);
            game(innerracep1,innerracep2,inneritemp1,inneritemp2);
        } else {
            alert("error");
        }
    });

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



})();
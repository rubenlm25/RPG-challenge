(function() {
    // differente variable pour pointer les diferents element
    var nav = document.querySelector(".character");
    var choiceracep1 = document.querySelector(".choiceracep1");
    var choiceitemp1 = document.querySelector(".choiceitemp1");
    var choiceracep2 = document.querySelector(".choiceracep2");
    var choiceitemp2 = document.querySelector(".choiceitemp2");
    var titleracep1 = document.querySelector(".titleracep1");
    var titleitemp1 = document.querySelector(".titleitemp1");
    var titleracep2 = document.querySelector(".titleracep2");
    var titleitemp2 = document.querySelector(".titleitemp2");

    var example1 = "Race";
    var example2 = "Items";
    var imgitem =[
        "./assets/images/boots.png",
        "./assets/images/bow.png",
        "./assets/images/staff.png",
        "./assets/images/sword.png"
    ]
    var imgrace = [
        "./assets/images/elf.png",
        "./assets/images/human.png",
        "./assets/images/orc.png",
        "./assets/images/vampire.png"
    ]
// confirmation de la selection personnage et objet
    document.querySelector(".pconfirm").addEventListener("click",function(){
        var innerracep1 = document.querySelector(".titleracep1").innerHTML;
        var innerracep2 = document.querySelector(".titleracep2").innerHTML;
        var inneritemp1 = document.querySelector(".titleitemp1").innerHTML;
        var inneritemp2 = document.querySelector(".titleitemp2").innerHTML;
        var name1 = document.getElementById("nameone").value;
        var name2 = document.getElementById("nametwo").value;
        if(innerracep1 != example1 && innerracep2 != example1 && inneritemp1 != example2 && inneritemp2!= example2 && name1!="" && name2 != ""){
            nav.classList.add("isclose");
        }
        else{
            alert("error");
        }
    });

// menu deroulant player 1

// menu deroulant race
    document.querySelector(".titleracep1").addEventListener("click",function(){
        choiceracep1.classList.add("isopen");
    });
    document.getElementById("orcp1").addEventListener("click",function(){
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Orc";
        document.getElementById("character-visual1").src =imgrace[2];
        
    });
    document.getElementById("elfp1").addEventListener("click",function(){
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Elf";
        document.getElementById("character-visual1").src =imgrace[0];
        
    });
    document.getElementById("humanp1").addEventListener("click",function(){
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Human";
        document.getElementById("character-visual1").src =imgrace[1];
        
    });
    document.getElementById("vampirep1").addEventListener("click",function(){
        choiceracep1.classList.remove("isopen");
        titleracep1.innerHTML = "Vampire";
        document.getElementById("character-visual1").src =imgrace[3];
        
    });

///////////////////////////////////////////////////////////////////////////////////
    // menu deroulant item
    document.querySelector(".titleitemp1").addEventListener("click",function(){
        choiceitemp1.classList.add("isopen");

    });
    document.getElementById("bootsp1").addEventListener("click",function(){
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Boots";
        document.getElementById("item-visual1").src =imgitem[0];
    });
    document.getElementById("staffp1").addEventListener("click",function(){
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Staff";
        document.getElementById("item-visual1").src =imgitem[2];
    });
    document.getElementById("swordp1").addEventListener("click",function(){
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Sword";
        document.getElementById("item-visual1").src =imgitem[3];
        
    });
    document.getElementById("bowp1").addEventListener("click",function(){
        choiceitemp1.classList.remove("isopen");
        titleitemp1.innerHTML = "Bow";
        document.getElementById("item-visual1").src =imgitem[1];
        
    });
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
    // menu deroulant player 2
    document.querySelector(".titleracep2").addEventListener("click",function(){
        choiceracep2.classList.add("isopen");
    });
    document.getElementById("orcp2").addEventListener("click",function(){
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Orc";
        document.getElementById("character-visual2").src =imgrace[2];
        
    });
    document.getElementById("elfp2").addEventListener("click",function(){
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Elf";
        document.getElementById("character-visual2").src =imgrace[0];
    });
    document.getElementById("humanp2").addEventListener("click",function(){
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Human";
        document.getElementById("character-visual2").src =imgrace[1];
    });
    document.getElementById("vampirep2").addEventListener("click",function(){
        choiceracep2.classList.remove("isopen");
        titleracep2.innerHTML = "Vampire";
        document.getElementById("character-visual2").src =imgrace[3];
        
    });


    //////////////////////////////////////////////////////////////////
    document.querySelector(".titleitemp2").addEventListener("click",function(){
        choiceitemp2.classList.add("isopen");
    });
    document.getElementById("bootsp2").addEventListener("click",function(){
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Boots";
        document.getElementById("item-visual2").src =imgitem[0];
    });
    document.getElementById("staffp2").addEventListener("click",function(){
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Staff";
        document.getElementById("item-visual2").src =imgitem[2];
    });
    document.getElementById("swordp2").addEventListener("click",function(){
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Sword";
        document.getElementById("item-visual2").src =imgitem[3];
    });
    document.getElementById("bowp2").addEventListener("click",function(){
        choiceitemp2.classList.remove("isopen");
        titleitemp2.innerHTML = "Bow";
        document.getElementById("item-visual2").src =imgitem[1];
    });





})();
var character = document.getElementById("character");
var game = document.getElementById("game");
var interval 
var both=0
var counter = 0
var currentBlocks=[]
function moveleft(){
var left =parseInt (window.getComputedStyle(character).getpropertyvalue("left"));
character.style.left = left + 2 + "px";
}
function moveRight(){
    var left =parseInt (window.getComputedStyle(character).getpropertyvalue("left"));
    character.style.left = left + 2 + "px";
    }
   
    document.addEventListener("keyup", event =>{
        clearInterval(interval)
        both=0
       function setInterval() {
            var blockLast = document.getElementById("block" + (counter-1))
            var holeLast = document.getElementById("hole" + (counter-1))
            if (counter>0){
            var blockLastTop = 
         parseInt (window.getComputedStyle(blockLast).getpropertyvalue("top"));
         var holeLastTop = 
         parseInt (window.getComputedStyle(holeLast).getpropertyvalue("top"));
            }
            document.addEventListener ("keydown", event => {
                if(both==0)
                both++;
                if (event.key==="Arrowleft"){
                    interval = setInterval(moveleft, 1)
                }
                if(event.key==="ArrowRight"){
                    interval = setInterval(moveRight, 1)
                }
            })


            var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class","block" );
    hole.setAttribute("class","hole" );
    block.setAttribute("Id","block"  + counter);
    hole.setAttribute("Id","hole" + counter);
    block.style.top = blockLastTop + 100 + "px";
    hole.style.top = holeLastTop + 100 + "px";
    var random = math.random() * 360;
    game.appendchild(block);
    game.appendchild(hole);

        }
    });
    if (blockLastTop<400|| counter==0){
    var block = document.createElement("div");
    var hole = document.createElement("div");
    block.setAttribute("class","block");
    hole.setAttribute("class","hole" );
    block.setAttribute("Id","block");
    hole.setAttribute("Id","hole");
    var random = math.floor (math.random() * 360)
    hole.style.left = random + "px";
    game.appendchild(block);
    game.appendchild(hole);
    currentBlocks.push(counter);
    counter++;
    }
    for(var i=0;i<currentBlocks.length;i++){

        let current =currentBlocks[i];
        let ihole = document.getElementById("hole" + current);
        let iblock = document.getElementById("block" + current);
        parsefloat (window.getComputedStyle(iblock).getpropertyvalue("top"));
        iblock.style.top = blocktop -0.5 + "px";
        ihole.style.top = holetop -0.5 + "px";
        if(iblockTop < -20){
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }

    }

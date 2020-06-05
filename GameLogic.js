
////----------- FUNCTION AND VARIABLE DECLARATIONS
// Tijera -- 1
// Papel  -- 2
// Piedra -- 3
var ValueFromMachine  = 0,
    ResultPhrase = document.querySelector(".Container .Container__resultMatch");
    ImagechallengersList = document.querySelectorAll(".Container__image img");

function startTheGame(){
    var ValueFromUser = parseInt(this.getAttribute("data-value")),
        MathResult = DeterminateTheWinner(ValueFromUser);
    
    //CHANGE THE IMAGE
    ImagechallengersList[0].src = ValueFromMachine === 1?  "Tijera.png" : ValueFromMachine === 2? "Papel.png" : "Piedra.png";
    ImagechallengersList[1].src = ValueFromUser === 1?     "Tijera.png" : ValueFromUser === 2?    "Papel.png" : "Piedra.png";  

    //SHOW THE RESULTS
    if(MathResult === 0){
        ResultPhrase.innerHTML = "EMPATE!!!";
    }else if(MathResult === 1){
        ResultPhrase.innerHTML = "GANASTE!!!";
    }else if(MathResult === 2){
        ResultPhrase.innerHTML = "PERDISTE!!!";
    }else{
        ResultPhrase.innerHTML = "Algo salio mal";
    }
}

function DeterminateTheWinner(ValueFromUser){

    ValueFromMachine = parseInt(Math.random()*3)+1;

    //VALIDACION DE POSIBLES ERRORES
    if((ValueFromUser > 3 && ValueFromUser < 1) || (ValueFromMachine > 3 && ValueFromMachine < 1)){
        return -1;
    } 

    //SABER QUIEN GANO O PERDIO
    if(ValueFromUser === ValueFromMachine){//EMPATE
        return 0;
    }else if((ValueFromUser === 1 && ValueFromMachine === 2) || (ValueFromUser === 2 && ValueFromMachine === 3) || (ValueFromUser === 3 && ValueFromMachine === 1)){//GANASTE
        return 1;
    }else{//PERDISTE
        return 2;
    }
}

//-----------START MAIN PROGRAM
var buttonList = document.querySelectorAll("button");
for(element of buttonList){
    element.addEventListener("click",startTheGame);
}

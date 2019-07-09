var aim = 0;
var total = 0;
var win = 0;
var score = 0;
var valueOfTheDim  = [];

$(document).ready(function(){
    gameStart();
    $("#img1").on("click",function(){
        let dimValue = valueOfTheDim[0]; 
        console.log(dimValue);
        scoreAndCount(dimValue);
    });
    $("#img2").on("click",function(){
        let dimValue = valueOfTheDim[1]; 
        console.log(dimValue);
        scoreAndCount(dimValue);
    });
    $("#img3").on("click",function(){
        let dimValue = valueOfTheDim[2]; 
        console.log(dimValue);
        scoreAndCount(dimValue);
    });
    $("#img4").on("click",function(){
        let dimValue = valueOfTheDim[3]; 
        console.log(dimValue);
        scoreAndCount(dimValue);
    });
});

function randomInt(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function scoreAndCount(x){
    total += x;
    console.log(total);
    if ( total == aim){
        win ++;
        gameNext();
        total = 0;
    }
    if (total > aim){
        score --;
        if(score <= 0){
            gameStart();
        }
        total = 0;
    }
    console.log("total " + total);
    console.log("Win " + win);
    console.log("Score " + score);
    
}

function gameNext(){
    for(let i = 0; i<4; i++){
        valueOfTheDim.push(randomInt(1,12))
    }
    aim = randomInt(19,120);
    console.log("Head " + aim);
    
}
function gameStart(){
    score = 10;
    win = 0;
    total = 0;
    gameNext();
}
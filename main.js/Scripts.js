var counter=0;
var randNumber =generateRandomNum();
document.getElementById('mybtn').addEventListener('click',guessNumber);
document.getElementById('rest').addEventListener('click',restart);
function guessNumber(){
    var inpNumber=document.getElementById('inpNumber').value;
    if(inpNumber<1 || inpNumber>100){
        display(`Please enter a number bteween 1 and 100`);
        return;
    }
    counter+=1;
    if(counter>10){
        display(`Good luck, you failed, the Number is ${randNumber}`);
        return;
    }
    if(inpNumber>randNumber){
        display(`Number is less ,try again you have made ${counter} Guesses`);
    }
    if(inpNumber<randNumber){
        display(`Number is larger ,try again you have made ${counter} Guesses`);
    }
    if(inpNumber==randNumber){
        display(`Congratulations, you won a game!,the number is ${inpNumber}`);
    }
}
function restart(){
    counter=0;
    randNumber=generateRandomNum();
    display(``);
}
function display(value){
    document.getElementById('demo').innerHTML=value;
}
function generateRandomNum(){
    return Math.floor(Math.random() * (100 - 1 + 1)) +1;
}




















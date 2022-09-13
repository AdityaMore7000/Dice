var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);
var attr1 = ("images/dice"+randomNumber1+".png");
var attr2 = ("images/dice"+randomNumber2+".png");
document.getElementsByTagName("img")[0].setAttribute("src",attr1); 
document.getElementsByTagName("img")[1].setAttribute("src",attr2); 
if( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins!!🚩";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText = "Player 2 Wins!!🚩";
}
else{
    document.querySelector("h1").innerText = "Its a draw!!!";
}
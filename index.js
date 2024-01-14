//alert("hi")


var randomNumber1 =Math.floor( Math.random() * 6) + 1;

var randomdice = "dice" + randomNumber1 + ".png" ;

var image1 =document.querySelectorAll("img")[0];//query selectorall is used to get all img i.e two of them and index 0 describe first one.

image1.setAttribute("src",randomdice);


var randomNumber2 =Math.floor( Math.random()*6) +1;

var randomdice2 = "dice" + randomNumber2 + ".png" ;

document.querySelectorAll("img")[1].setAttribute("src",randomdice2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}


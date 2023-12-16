//DOM ELEMENTS
//let containerAccess=document.getElementsByClassName("container");
let domAccess=document.querySelector(".input");
let newNumber= document.querySelector("#newnumber");
let newUser= document.querySelector("#username");
let useAgain= document.querySelector("#goagain");


//function on click 
function magicTrick() {

    
    const randomNumber=Math.floor(Math.random()*8);
    let eightBall= randomNumber; 
    let showNumber=document.getElementById("newnumber")
    const textInput=document.createTextNode( newuser.value + " ");
    showNumber= " " + eightBall+ " ";
    newNumber.append(showNumber);
    newUser.appendChild(textInput);


    const p = document.createElement("h2");
    domAccess.appendChild(p);
    switch (eightBall){
      case 0:
      p.innerHTML='Do not count on it';
      break;
      case 1:
      p.innerHTML='Reply hazy try again';
      break;
      case 2:
      p.innerHTML='My sources say no';
      break;
      case 3:
      p.innerHTML='Outlook not so good';
      break;
      case 4:
      p.innerHTML='Signs point to yes';
      break;
      case 5:
      p.innerHTML='Cannot predict now';
      case 6:
      p.innerHTML='It is decidedly so';
      break;
      case 7:
      p.innerHTML='It is certain';
      break;
    }
   
  }
 

  setTimeout(function(){
    window.location.reload(1);
 }, 10000);

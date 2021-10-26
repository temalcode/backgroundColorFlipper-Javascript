const colors = ["red", "blue", "yellow", "pink", "purple", "green"];
const btn = document.getElementsByClassName("btn");
const text = document.getElementById("color-text");


function generateRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


function clickMeButton(){
    const randomNumber = generateRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    text.textContent = colors[randomNumber];
    
}
  

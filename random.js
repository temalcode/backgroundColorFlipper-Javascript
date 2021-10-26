const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function generateRandomNumber() {
  return Math.floor(Math.random() * num.length);
}
function clickMeButton() {
    let color = '#' ;
    for(i=0; i<6; i++){
    
    color += num[generateRandomNumber()];
    }
    
    document.body.style.backgroundColor = color;
    document.getElementById('color-text').textContent = color;
    

    
    
}

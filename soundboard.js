var btn1 = document.getElementById('btn1')
var ahem = document.getElementById('ahem')

function playAhem(){
    ahem.play();
}

btn1.addEventListner('click', playAhem);
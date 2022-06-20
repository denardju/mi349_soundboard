var btn1 = document.getElementById('btn1')
var ahem = document.getElementById('ahem')

function playAhem(){
    ahem.play();
}

btn1.addEventListner('click', playAhem);

var btn2 = document.getElementById('btn2')
var arrow = document.getElementById('arrow')

function playArrow(){
    arrow.play();
}

btn2.addEventListner('click', playArrow);

var btn3 = document.getElementById('btn3')
var boing = document.getElementById('boing')

function playBoing(){
    boing.play();
}

btn3.addEventListner('click', playBoing);

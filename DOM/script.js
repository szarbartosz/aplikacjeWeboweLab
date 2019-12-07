//3
function mouseOver(obj){
    obj.style.backgroundColor = "#f00";
    obj.style.color = "#000";
    obj.innerHTML = "świetnie"
}

function mouseOut(obj){
    obj.style.backgroundColor = "#000";
    obj.style.color = "#fff";
    obj.innerHTML = "dawaj jeszcze raz"
}

function mouseDown(obj){
    obj.style.backgroundColor = "#0f0";
    obj.style.color = "#000";
    obj.innerHTML = "znakomicie"
}

function mouseUp(obj){
    obj.style.backgroundColor = "#000";
    obj.style.color = "#fff";
    obj.innerHTML = "dawaj jeszcze raz"
}

//4
var x = document.getElementById('button1')

x.addEventListener('click', myFunction);
x.addEventListener('mouseover', mySecondFunction);
x.addEventListener('mouseout', myThirdFunction);

function myFunction(){
    alert ("elegancko");
}

function mySecondFunction(){
    document.getElementById('info1').innerHTML = '( ͡° ͜ʖ ͡°)';
}

function myThirdFunction(){
    document.getElementById('info1').innerHTML = '(·̿Ĺ̯·̿ ̿)';
}

//5
document.getElementById('square1').addEventListener('click', function(){
    document.getElementById('info2').innerHTML = 'kliknięto niebieski';
});
document.getElementById('square2').addEventListener('click', function(){
    document.getElementById('info2').innerHTML = 'kliknięto zielony';
});
document.getElementById('square3').addEventListener('click', function(){
    document.getElementById('info2').innerHTML = 'kliknięto czerwony';
});
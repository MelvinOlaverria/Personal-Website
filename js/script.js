var interval = 3000;
function getFigures(){
    return document.getElementById('carousel').getElementsByTagName('figure');
}
function moveForward(){
    var pointer;
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++){
        if (figures[i].className == 'visible') {
            figures[i].className = "";
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className= 'visible';
    setTimeout(moveForward,interval);
}
function start(){
    setTimeout(moveForward,interval);
}
start();
/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck');
var speed = 50;

puck.style.left = puck_x+'px';
puck.style.top = puck_y+'px';

function logCoordinates() {
    console.log('x:'+puck_x+' y:'+puck_y);
}

function checkCollisions() {
    if (puck_x > 250
        &&
        puck_x < 350
        &&
        puck_y > 150
        &&
        puck_y < 250) {
        document.getElementById('gap').style.backgroundColor = 'red';
        }
        else {document.getElementById('gap').style.backgroundColor = 'white';}
    if  (puck_x > 500
        &&
        puck_x < 520
        &&
        puck_y > 50
        &&
        puck_y < 70) {
            document.getElementById('puckBig')}
    }



document.getElementById('right').addEventListener('click', function () {
    if (puck_x < 600) {
    puck_x += speed;
    puck.style.left = puck_x+'px';
    logCoordinates();
    checkCollisions();
    }
});

document.getElementById('left').addEventListener('click', function () {
    if (puck_x > 0) {
    puck_x -= speed;
    puck.style.left = puck_x+'px';
    logCoordinates();
    checkCollisions();
    }
});

document.getElementById('down').addEventListener('click', function () {
    if (puck_y < 400) {
    puck_y += speed;
    puck.style.top = puck_y+'px';
    logCoordinates();
    checkCollisions();
    }
});

document.getElementById('up').addEventListener('click', function () {
    if (puck_y > 0) {
    puck_y -= speed;
    puck.style.top = puck_y+'px';
    logCoordinates();
    checkCollisions();
    }
});


































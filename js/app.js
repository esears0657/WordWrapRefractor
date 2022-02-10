
//World Wrap:

let cirP = {x:0, y:300, radius:30}


function setup(){
    createCanvas(800,600);
    c = 0;
    fill(255, 255, 0);
}

//Declared my variables, created the canvas, and gave values to my variables

function draw(){
    background(40);
    c = (c + 5)%width;
    circle(cirP.x+c, cirP.y, cirP.radius)
}

//Background is blackish, gives circle its radius and diamete and color and draws it + 5 every frame.

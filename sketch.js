let hearts = [];
let colors = [];
let img;
let squareAlpha = 255;
let countHeart = 0;
let xText_1 = 20;
let yText_1 = 20;
let total = 457;
const { PI: π } = Math;
let x, y, r, t;
let scence = 0;
let done = 0;
let alpha = 0;

function preload() {
    img = loadImage('official.jpg');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = ["#edbba8", "#e66f3c", "#c6b6d5", "#f1d147", "#a4cd98", "#95accb"];
    r = min(width, height) / 32;
}

function draw() {
    if(scence == 0){
        background("#FFC4A4");

        drawImageWithBorder(img, 10);
    
        fill(255, 196, 164, squareAlpha);
        noStroke();
        rect(0, 0, width, height);
    
        for (let i=0; i<hearts.length; i++) {
            hearts[i].display();
            hearts[i].fall();
        }
        
        for (let i=0; i<hearts.length; i++) {
            if (hearts[i].y > height+20) {
            hearts.splice(i, 1);
            }
        }
    
        let textWidth = 200;
        let textHeight = 120;
        let text_1 = countHeart + "/" + total; 
        drawTextBox(xText_1, yText_1, textWidth, textHeight, text_1, "#fba2d0", "#6c7ee1");    
        if(done == 1) {
            drawWhiteBg(alpha);
            alpha++;
            if(alpha == 255){
                scence = 1;
            }
        } 
    }
    else{
        drawHeart();
    }
    
}

function mouseDragged() {
    if(countHeart < total){
        countHeart ++;
        hearts.push(new Heart(mouseX, mouseY));
    }
    if (squareAlpha > 0) {
        squareAlpha -= 255/total;
    } else{
        done = 1;
    }   
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function drawTextBox(x, y, width, height, textContent, textColor, boxColor) {
    noStroke();

    fill(boxColor);
    
    rect(x, y, width, height, 30);

    noStroke();
    stroke(0);
    strokeWeight(0.5);
    fill(textColor);
    textSize(30);
    textAlign(LEFT, TOP);
    text(textContent, x + 10, y + 10, width - 20, height - 20);
}

function drawImageWithBorder(img, borderSize) {
    let imgX = width / 2 - img.width / 2;
    let imgY = height / 2 - img.height / 2;

    stroke(0, 0, 0, 7); 
    strokeWeight(borderSize);
    noFill();
    rect(imgX - borderSize / 2, imgY - borderSize / 2, img.width + borderSize, img.height + borderSize);

    image(img, imgX, imgY);
}

function drawHeart() {
    background(50, 5);
    translate(width / 2, height / 2);
    rotate(π);
    stroke(255, 50, 50);
    strokeWeight(2);
    fill(255, 0, 0); 
    
    t = frameCount / 180;
    x = r * 16 * pow(sin(t), 3);
    y = r * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
    line(0, 0, x, y);
}

function drawWhiteBg(alpha){
    fill(255, 255, 255, alpha);
    noStroke();
    rect(0, 0, width, height);
}
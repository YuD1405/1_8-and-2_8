let hearts = [];
let colors = [];
let img;
let step = 0;
let squareAlpha = 255;
let countHeart = 0;
let xText_1 = 20;
let yText_1 = 20;
let total = 205;
const { PI: π } = Math;
let x, y, r, t;

function preload() {
    img = loadImage('frame.jpg');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    colors = ["#edbba8", "#e66f3c", "#c6b6d5", "#f1d147", "#a4cd98", "#95accb"];
    r = min(width, height) / 32;
}

function draw() {
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
    let text_1 = "STEP 1 \nGiả bộ click rùi rê chuột xí xí iiii 😏\n0" + countHeart + "/0" + total; 
    if(step == 0){
        drawTextBox(xText_1, yText_1, textWidth, textHeight, text_1, "#fba2d0", "#6c7ee1");   
    }
    drawHeart();
}

function mouseDragged() {
    if(countHeart < 205){
        countHeart ++;
        hearts.push(new Heart(mouseX, mouseY));
    }
    if(step == 0){
        if (squareAlpha > 0) {
            squareAlpha -= 255/205;
        } else{
            step = 1;
        }   
    }
    else if (step == 1) {

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
    textSize(18);
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
    fill(255, 0, 0); // Ví dụ, màu đỏ cho phần bên trong
    
    t = frameCount / 180;
    x = r * 16 * pow(sin(t), 3);
    y = r * (13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t));
    line(0, 0, x, y);
}
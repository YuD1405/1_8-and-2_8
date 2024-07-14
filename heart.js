class Heart {
    constructor(x, y) {
      this.x = x; 
      this.y = y;
      this.r = random(0.3, 1);
      
      this.dy = random(1, 2);
      
      this.c = random(colors);
    }
    
    display() {
      push();
      translate(this.x, this.y);
      beginShape();
      fill(this.c);
      stroke(0);
      strokeWeight(1); 
      for(let i=0; i <TWO_PI; i+= 0.05){
        let x = 16*sin(i)*sin(i)*sin(i) * this.r;
        let y = (13 * cos(i) - 5*cos(2*i) - 2*cos(3*i) -  cos(4*i)) * -this.r;
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
      
    }
    
    fall() {
      this.y += this.dy;
    }
    
  }
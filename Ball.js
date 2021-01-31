class Ball {
  constructor(x, y, width, height, angle) {
    
    var options = {
      density : 1,
      friction : 0.005,
    }
    this.body = Bodies.rectangle(x,y,width,height,angle , options) ;
    this.width = width;
    this.height = height;
   World.add(world , this.body);
        
    
  }

  display() {
    var angle = this.body.angle
    push()
    translate(this.body.position.x , this.body.position.y);
    rotate(angle);
    stroke("black");
    strokeWeight(4);
    fill("brown");
   ellipseMode(RADIUS);
    ellipse(0,0 , this.width ,this.height)
    pop()
  }
}

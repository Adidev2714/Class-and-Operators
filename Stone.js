class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 1.0,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 200, 50, options);
      this.width = 200;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('white')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
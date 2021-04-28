class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3.0,
        'restitution':0.2
      };
      this.body = Bodies.rectangle(x, y, 400, 50, options);
      this.width = 400;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('white')
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
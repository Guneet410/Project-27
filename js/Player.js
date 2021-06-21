class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");


    World.add(world, this.body);
  }

 

 
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
     
     rectMode(CENTER)
     push();
     textSize (20)
     fill("white")
     text("Player",width-width+250, height-height+30)
     fill ("green");
     rect(width-width +100,height - height +70,80,50)
     rect(width-width +190,height - height +70,80,50)
     rect(width-width +280,height - height +70,80,50)
     pop();}
   










    }

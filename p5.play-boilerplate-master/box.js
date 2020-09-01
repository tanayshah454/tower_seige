class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.4,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y,30,40, options);
        this.width = 30;
        this.height =40;
        this.image=loadImage("Capture2.PNG")
        this.visibility=255
        World.add(world, this.body);
      }
      display(){    
          push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        this.visibility=this.visibility-5;
        tint(255,this.visibilty)
        imageMode(CENTER);
        image(this.image,0,0,30,40);
        pop();
        }
      }
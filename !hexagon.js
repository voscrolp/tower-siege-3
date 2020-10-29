class Hexagon{
    constructor(x,y,width,height){
        var options = {
            restitution:0,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("sprites/hexagon.png");
        this.width = width;
        this.height = height;
        
        World.add(world,this.body);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }

    shrink(){
        this.width = this.width - 10;
        this.height = this.height - 10;
    }

    reset(){
        this.width = 50;
        this.height = 50;
    }
}
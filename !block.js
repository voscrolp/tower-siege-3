class Block{
    constructor(x,y){
        var options = {
            restitution:0.04,
            density:0.5
        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.image = loadImage('sprites/red square.jpg');
        World.add(world,this.body);

        this.width = width;
        this.height = height;
        this.Visibility = 255;
        
        
    }

    display(){
        imageMode(CENTER);
        if(this.body.speed < 3){
            image(this.image,this.body.position.x,this.body.position.y,50,50);
        }else{
            Matter.Composite.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 20;
            tint(255,this.Visibility);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
        }
    }

    score(){
        if(this.Visibility < 0 && this.Visibility > -1005){
            score = score + 2;
        }
    }
}
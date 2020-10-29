class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 75,
            damping: 0.1
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(){
        this.rope.bodyA = hexagon.body;
    }


    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        stroke('white');
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}
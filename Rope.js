class Rope{
    constructor(bodyA,bodyB,pointB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : pointB,
            length : 400
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x+pointB.x, posB.y+pointB.y);
        
    }
}
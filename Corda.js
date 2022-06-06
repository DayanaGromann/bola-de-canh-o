class Corda{
    constructor(corpoA, pontoB){
        var options = {
            bodyA: corpoA,
            pointB: pontoB,
            stiffness: 1.5,
            length: 450
        }
        this.corda = Constraint.create(options);
        this.pontoB = pontoB;
        World.add(world, this.corda);
    }

    display(){
        var pontoB = this.pontoB;
        var corpoA = this.corda.bodyA.position;

        push();
        strokeWeight(3);
        stroke(0);
        line(pontoB.x, pontoB.y, corpoA.x, corpoA.y);
        pop();
    }
}
class BolaDemolicao{
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.1,
            density: 4
        }
        this.corpo = Bodies.circle(0,0, 100, options);
         
        World.add(world, this.corpo);
    }

    display(){
        //this.corpo.position.x = mouseX;
        //this.corpo.position.y = mouseY;
        var angulo = this.corpo.angle;
        push();
        ellipseMode(RADIUS);
        rotate(angulo);
        fill(0)
        translate(this.corpo.position.x, this.corpo.position.y);
        ellipse(0,0, 100);
        pop();
    }
}
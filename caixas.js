class Caixa{
    constructor(x,y){
        var options = {
            restitution: 1.0,
            friction: 0
        }
        this.corpo = Bodies.rectangle(x,y, 100, 100, options);
        this.cores = ["cyan", "magenta", "purple", "pink", "lightgreen", "crimson"];
        World.add(world, this.corpo);
    }

    display(){
        var angulo = this.corpo.angle;
        

        //Para parar de piscar é só transformas o aletório em propriedade this.aleatorio
        var aleatorio = Math.round(random(0,5));

        push();
        rectMode(CENTER);
        rotate(angulo);
        strokeWeight(3);
        stroke(0);
        fill(this.cores[aleatorio]);
        
        translate(this.corpo.position.x, this.corpo.position.y);
        rect(0,0, 100, 100);
        pop();
    }
}
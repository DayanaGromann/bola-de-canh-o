class solo{
    constructor(x,y,largura,altura){
        var options = {
            isStatic: true
        }

        this.corpo = Bodies.rectangle(x, y, largura, altura, options);
        this.largura = largura;
        this.altura = altura;
        World.add(world, this.corpo);
    }

    display(){
        push();
        rectMode(CENTER);
        fill(0);
        rect(this.corpo.position.x, this.corpo.position.y, this.largura, this.altura );
        pop();
    }
}
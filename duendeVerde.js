class duendeVerde {
    constructor(x,y){
        var options = {resitution: 0.7,friction:0.01,density:0.01}//resitution es para el rebote, la friction es para saber que tan resbaloso es el suelo y density es el bolumen del cuerpo
        this.body = Bodies.rectangle(x,y,50,50,options); //son las propiedades del cuerpo
        this.width = 200;
        this.height = 200;
        this.image = loadImage("duendeVerdeImage.png")
       // this.image = loadImage("sprites/enemy.png");
        World.add(world,this.body)//agregamos el cuerpo al mundo
}
display(){
var pos = this.body.position;
var angle = this.body.angle; //posiciones del angulo en el cuerpo
push();
translate(pos.x,pos.y);//permite al cuerpo trasladarse por cualquier posicion de las X o Y
rotate(angle)//es el angulo en el que el cuerpo va rotar 
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}
}
class bombas {
    constructor(x,y)
    {
        var options = {restitution: 0.7,friction: 1.0,density: 1.5}
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("bombasanimada.png")
        World.add(world,this.body)
    }
    
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push(); //actualizando las posiciones en el x,y y el angulo del objeto
       translate(pos.x,pos.y);//generas la traslacion del objeto
       rotate(angle);//generas la rotacion del objeto
       imageMode(CENTER);//la cordenadas del objeto esten en el centro
       image(this.image,0,0,this.width,this.height);//dibujamos el objeto
       pop(); //te regresa a la configuracion inicial del objeto
    
    }
    }
    
    
    
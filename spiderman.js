class spiderman{
    constructor(bodyA,pointB){ //son los parametros del cuerpoA y el puntoB(que esta fijo)
        var options = {
            bodyA: bodyA,
            pointB: pointB,//el cuerpo B va estar conectado con el A por medio de la cadena
            stiffness: 0.08,//rigidez que va tener la liga 
            length: 10//es el largo de la liga 
        }
         this.spiderImage3 = loadImage("SPIDERMAN3.png")
         this.pointB = pointB;
         this.Sling = Constraint.create(options);//se crea la cadena para el cuerpo restringido
         World.add(world,this.Sling);
    }
     fly(){ //para que se suelte el ave 
         this.Sling.bodyA = null;
     }
    display(){
        
        if(this.Sling.bodyA){ //la liga de la resortera tiene agarrado al ave 
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3)// es el grosor de la liga 
        line(pointA.x+100, pointA.y, pointB.x-10, pointB.y)
        line(pointA.x+100, pointA.y, pointB.x-5, pointB.y-3)
        image(this.spiderImage3, pointA.x, pointA.y, 200, 200)
        pop();
        
        }
       
    }
}
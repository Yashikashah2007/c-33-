class Dew{
    constructor(x,y){
        var options={
            restitution:0.04
        }
        this.r=5;
        this.body=Bodies.circle(x,y,5,options);
        this.image=loadImage("snow4.webp");
        this.trajectory=[];
       World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.image);
        pop();
        for(var i=0;i<this.trajectory.length;i++){
            image(this.image,this.trajectory[i][0],this.trajectory[i][1]);
            
        }
    }
}
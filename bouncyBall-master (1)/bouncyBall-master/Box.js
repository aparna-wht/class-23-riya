class Box
{
    //constructor
    constructor(x,y,width,height)
    {
        var options ={
            restitution: 0.8,
            friction : 0.3,
            density : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    //methods/functions
    display()
    {
        var p = this.body.position;
        var angle = this.body.angle;

        push()
        translate(p.x,p.y);
        rotate(angle);
        angleMode(RADIANS); 
        rectMode(CENTER);
        fill("pink")
        rect(0,0,this.width,this.height);
        pop();   
    }
}
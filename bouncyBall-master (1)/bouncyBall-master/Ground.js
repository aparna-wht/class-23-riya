class Ground
{
    //constructor
    constructor(x,y,width,height)
    {
        var options ={
            isStatic: true
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
        rectMode(CENTER);
        //fill("pink")
        rect(p.x,p.y,this.width,this.height);   
    }
}
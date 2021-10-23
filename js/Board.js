class Board{


    constructor(x,y,width,height){
        this.width = width
        this.height = height
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)

        World.add(world,this.body)
        this.img = loadImage("assets/board.png")
        
    }
    display(){
    
        var pos = this.body.position
            push()
            imageMode(CENTER)
            image (this.img,pos.x,pos.y,this.width,this.height)
            pop()


    }
    
}

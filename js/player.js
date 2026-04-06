export class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.health=100;
        this.hunger=100;
        this.thirst=100;
        this.speed=2;
        this.gameSpeed=1;
    }

    update(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="w") this.y-=this.speed*this.gameSpeed;
            if(e.key==="s") this.y+=this.speed*this.gameSpeed;
            if(e.key==="a") this.x-=this.speed*this.gameSpeed;
            if(e.key==="d") this.x+=this.speed*this.gameSpeed;
        });
    }

    draw(ctx){
        ctx.fillStyle="cyan";
        ctx.fillRect(this.x-15,this.y-15,30,30);
    }
}
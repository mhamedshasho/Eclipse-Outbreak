export class Boss{
    constructor(player){
        this.player=player;
        this.x=500; this.y=300;
        this.hp=1000; this.active=true;
    }

    update(){
        if(!this.active) return;
        this.x+=(this.player.x-this.x)*0.02;
        this.y+=(this.player.y-this.y)*0.02;

        if(Math.hypot(this.x-this.player.x,this.y-this.player.y)<40){
            this.player.health-=0.5;
        }
        if(this.hp<=0) this.active=false;
    }

    draw(ctx){
        if(!this.active) return;
        ctx.fillStyle="purple";
        ctx.fillRect(this.x,this.y,60,60);
        ctx.fillStyle="red";
        ctx.fillRect(this.x,this.y-10,this.hp/10,5);
    }
}
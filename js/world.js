export class World{
    constructor(player){
        this.player=player;
        this.width=3000; this.height=3000;
    }

    applyCamera(ctx){
        ctx.translate(-this.player.x+window.innerWidth/2,-this.player.y+window.innerHeight/2);
    }

    drawGround(ctx){
        ctx.fillStyle="#111";
        ctx.fillRect(0,0,this.width,this.height);
    }
}
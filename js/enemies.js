export class Enemies{
    constructor(player){
        this.player=player;
        this.list=Array.from({length:10},()=>({
            x:Math.random()*2000,
            y:Math.random()*2000,
            hp:100
        }));
    }

    update(walls){
        this.list.forEach(e=>{
            e.x+=(this.player.x-e.x)*0.01;
            e.y+=(this.player.y-e.y)*0.01;
            walls.forEach(w=>{
                if(Math.hypot(e.x-w.x,e.y-w.y)<30){
                    w.hp-=0.2;
                }
            });
        });
        this.list=this.list.filter(e=>e.hp>0);
    }

    draw(ctx){
        ctx.fillStyle="red";
        this.list.forEach(e=>{
            ctx.fillRect(e.x-15,e.y-15,30,30);
        });
    }
}
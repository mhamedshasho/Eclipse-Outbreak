export class Bullets{
    constructor(player,enemies,walls){
        this.player=player;
        this.enemies=enemies;
        this.walls=walls;
        this.list=[];
        this.recoil=0;

        window.addEventListener("mousedown",(e)=>this.shoot(e));
    }

    shoot(e){
        const dx=e.clientX-this.player.x;
        const dy=e.clientY-this.player.y;
        let angle=Math.atan2(dy,dx);
        angle += (Math.random()-0.5)*this.recoil;
        this.recoil+=0.02;

        this.list.push({x:this.player.x,y:this.player.y,vx:Math.cos(angle)*10,vy:Math.sin(angle)*10});
    }

    update(){
        this.recoil*=0.9;
        this.list.forEach(b=>{
            b.x+=b.vx;
            b.y+=b.vy;

            this.enemies.list.forEach(e=>{
                if(Math.hypot(b.x-e.x,b.y-e.y)<15){
                    e.hp-=25;
                    b.dead=true;
                }
            });

            this.walls.forEach(w=>{
                if(b.x>w.x && b.x<w.x+w.w && b.y>w.y && b.y<w.y+w.h){
                    w.hp-=10;
                    b.dead=true;
                }
            });
        });
        this.list=this.list.filter(b=>!b.dead);
    }

    draw(ctx){
        ctx.fillStyle="yellow";
        this.list.forEach(b=>ctx.fillRect(b.x,b.y,4,4));
    }
}
export class Skills{
    constructor(player){this.player=player;this.points=0;this.tree={damage:1,speed:1,regen:0};
        window.addEventListener("keydown",(e)=>{
            if(e.key==="p") this.points++;
            if(e.key==="1"&&this.points>0){this.tree.damage++;this.points--;}
            if(e.key==="2"&&this.points>0){this.tree.speed++;this.points--;}
            if(e.key==="3"&&this.points>0){this.tree.regen++;this.points--;}
        });
    }
    apply(){this.player.speed=2+this.tree.speed; if(this.tree.regen>0)this.player.health+=0.01*this.tree.regen;}
}
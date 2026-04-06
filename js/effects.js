export class Effects{
    constructor(player){this.player=player;this.shake=0;this.blood=0;this.blur=0;}
    damage(){this.shake=10;this.blood=1;this.blur=5;}
    update(){this.shake*=0.9;this.blood*=0.95;this.blur*=0.9;}
    apply(ctx){if(this.shake>0){const dx=(Math.random()-0.5)*this.shake,dy=(Math.random()-0.5)*this.shake;ctx.translate(dx,dy);} ctx.filter=`blur(${this.blur}px)`;}
    drawOverlay(ctx){ctx.filter="none";if(this.blood>0.01){ctx.fillStyle=`rgba(255,0,0,${this.blood})`;ctx.fillRect(0,0,window.innerWidth,window.innerHeight);}}
}
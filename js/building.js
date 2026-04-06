export class AdvancedBuilding{
    constructor(){
        this.structures=[];
        window.addEventListener("keydown",(e)=>{
            if(e.key==="b") this.buildWall();
            if(e.key==="n") this.buildDoor();
            if(e.key==="u") this.upgrade();
        });
    }

    buildWall(){
        this.structures.push({type:"wall",x:Math.random()*2000,y:Math.random()*2000,w:50,h:10,hp:100,level:1});
    }

    buildDoor(){
        this.structures.push({type:"door",x:Math.random()*2000,y:Math.random()*2000,w:40,h:10,hp:80,open:false});
    }

    upgrade(){
        this.structures.forEach(s=>{s.level++;s.hp+=50;});
    }

    update(){
        this.structures=this.structures.filter(s=>s.hp>0);
    }

    draw(ctx){
        this.structures.forEach(s=>{
            ctx.fillStyle=s.type==="wall"?"gray":s.open?"green":"brown";
            ctx.fillRect(s.x,s.y,s.w,s.h);
        });
    }
}
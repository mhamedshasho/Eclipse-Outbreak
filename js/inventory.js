export class Inventory{
    constructor(){
        this.items=[]; this.selected=0;
        window.addEventListener("keydown",(e)=>{
            if(e.key==="1") this.selected=0;
            if(e.key==="2") this.selected=1;
        });
    }

    add(item){this.items.push(item);}
    use(player){
        const item=this.items[this.selected];
        if(!item) return;
        if(item==="food") player.hunger+=30;
        if(item==="water") player.thirst+=30;
        this.items.splice(this.selected,1);
    }
}
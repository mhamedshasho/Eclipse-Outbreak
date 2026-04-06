export class SaveSystem{
    static save(player){
        localStorage.setItem("game_save",JSON.stringify({
            x:player.x,y:player.y,health:player.health,hunger:player.hunger,thirst:player.thirst
        }));
    }
    static load(player){
        const data=JSON.parse(localStorage.getItem("game_save"));
        if(!data) return;
        player.x=data.x; player.y=data.y; player.health=data.health; player.hunger=data.hunger; player.thirst=data.thirst;
    }
}
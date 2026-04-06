export class AudioSystem{
    constructor(){
        this.shoot=new Audio("shoot.mp3");
        this.ambient=new Audio("ambient.mp3");
        this.finisher=new Audio("finisher.mp3");
        this.ambient.loop=true; this.ambient.volume=0.3; this.ambient.play();
    }
    playShoot(){this.shoot.currentTime=0;this.shoot.play();}
    playFinisher(){this.finisher.currentTime=0;this.finisher.play();}
}
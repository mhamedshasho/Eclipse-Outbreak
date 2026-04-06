import {Player} from "./player.js";
import {Enemies} from "./enemies.js";
import {Bullets} from "./bullets.js";
import {Combat} from "./combat.js";
import {AdvancedBuilding} from "./building.js";
import {Boss} from "./boss.js";
import {World} from "./world.js";
import {SaveSystem} from "./save.js";
import {Inventory} from "./inventory.js";
import {AudioSystem} from "./audio.js";
import {Effects} from "./effects.js";
import {Skills} from "./skills.js";
import {SkillTreeAdvanced} from "./skillTreeAdvanced.js";
import {FinisherAdvanced} from "./finisherAdvanced.js";

const canvas=document.getElementById("gameCanvas");
const ctx=canvas.getContext("2d");

const player=new Player(400,300);
const enemies=new Enemies(player);
const building=new AdvancedBuilding();
const world=new World(player);
const combat=new Combat(player,enemies,building.structures);
const boss=new Boss(player);
const inventory=new Inventory();
const audio=new AudioSystem();
const effects=new Effects(player);
const skills=new Skills(player);
const skillTreeUI=new SkillTreeAdvanced(skills);
const finisherAdv=new FinisherAdvanced(player,enemies,effects,audio);

SaveSystem.load(player);

function gameLoop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.save();
    effects.apply(ctx);
    world.applyCamera(ctx);
    world.drawGround(ctx);
    player.update();
    skills.apply();
    player.draw(ctx);
    building.update(); building.draw(ctx);
    enemies.update(building.structures); enemies.draw(ctx);
    combat.update(); combat.draw(ctx);
    boss.update(); boss.draw(ctx);
    finisherAdv.update(); fin
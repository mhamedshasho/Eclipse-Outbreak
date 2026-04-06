export class SkillTreeAdvanced{
    constructor(skills){this.skills=skills;this.visible=false;this.createUI();}
    createUI(){
        this.ui=document.createElement("div");
        this.ui.style=`position:absolute;top:15%;left:25%;width:500px;height:400px;background:rgba(0,0,0,0.95);color:white;display:none;padding:20px;border:2px solid white;`;
        this.ui.innerHTML=`<h2>ADVANCED SKILL TREE</h2><div id="points">Points: ${this.skills.points}</div>
        <div id="tree" style="display:flex;gap:50px;margin-top:20px">
        <div id="damage" class="skill">💥 Damage<br>Lv: ${this.skills.tree.damage}</div>
        <div id="speed" class="skill">⚡ Speed<br>Lv: ${this.skills.tree.speed}</div>
        <div id="regen" class="skill">💖 Regen<br>Lv: ${this.skills.tree.regen}</div></div>`;
        document.body.appendChild(this.ui);
        this.ui.querySelector("#damage").onclick=()=>this.upgrade("damage");
        this.ui.querySelector("#speed").onclick=()=>this.upgrade("speed");
        this.ui.querySelector("#regen").onclick=()=>this.upgrade("regen");
        window.addEventListener("keydown",(e)=>{if(e.key==="k") this.toggle();});
    }
    toggle(){this.visible=!this.visible;this.ui.style.display=this.visible?"block":"none";}
    upgrade(type){
        if(type==="speed"&&this.skills.tree.damage<1)return;
        if(type==="regen"&&this.skills.tree.speed<1)return;
        if(this.skills.points>0){this.skills.tree[type]++;this.skills.points--;this.animateUpgrade(type);}
    }
    animateUpgrade(type){
        const el=this.ui.querySelector("#"+type); el.style.transform="scale(1.3)"; el.style.transition="transform 0.2s"; setTimeout(()=>{el.style.transform="scale(1)";},200);
    }
    update(){
        if(!this.visible) return;
        this.ui.querySelector("#points").innerText="Points: "+this.skills.points;
        this.ui.querySelector("#damage").innerHTML=`💥 Damage<br>Lv: ${this.skills.tree.damage}`;
        this.ui.querySelector("#speed").innerHTML=`⚡ Speed<br>Lv: ${this.skills.tree.speed}`;
        this.ui.querySelector("#regen").innerHTML=`💖 Regen<br>Lv: ${this.skills.tree.regen}`;
    }
}
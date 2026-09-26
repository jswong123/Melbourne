// src/ui/HexInfoPanel.js
export class HexInfoPanel {
  constructor(element, world){this.el=element;this.world=world;this.selected=null;}
  terrainName(t){return ({plain:'平地',forest:'森林',hill:'丘陵',mountain:'山地',urban:'城镇',marsh:'沼泽',water:'水域',concession:'公共租界（中立区）'}[t]??t??'平地');}
  findNamed(q,r){return (this.world.settlements??[]).find(x=>Number(x.q)===Number(q)&&Number(x.r)===Number(r));}
  show(q,r){
    this.selected={q,r}; const t=this.world.terrainAt(q,r); const place=this.findNamed(q,r);
    const f=(this.world.fortifications??[]).find(x=>Number(x.q)===q&&Number(x.r)===r);
    const m=(this.world.minefields??[]).find(x=>Number(x.q)===q&&Number(x.r)===r);
    this.el.hidden=false; this.el.innerHTML=`<div class="hex-info-title">地块信息</div>${place?`<strong>${place.nameZh??place.name}</strong><br>`:''}<span>坐标：${q}, ${r}</span><br><span>地形：${this.terrainName(t)}</span><br><span>工事：${f?`${({permanent_fortress:'永固/坚固建筑工事',fortified_building:'仓库坚固工事',urban_barricade:'城市街垒',fieldworks:'野战工事'}[f.type]??'工事')} ${f.level??1}级（${Math.round(f.progress??100)}%）`:'无'}</span><br><span>地雷：${m?`${m.owner==='chinese'?'中国军':'日军'}雷区 ${Math.round(m.strength??0)}/100`:'无'}</span>`;
  }
}

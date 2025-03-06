import { writable } from "svelte/store";

export type TypePlayer = {
  name: string;
  dmg: number;
  lvl: number;
  pontos: number;
}

const playerStore = writable({
  name: "Player",
  dmg: 1,
  lvl: 1,
  money: 0,
  pontos: 0
});

function aumentarPontos(pontos: number){
  playerStore.update((player)=>{
    if(player.pontos+pontos >= player.lvl*10){
      return {...player, pontos: 0, lvl: player.lvl+1, dmg: player.dmg+1};
    } 
    return {...player, pontos: player.pontos+pontos};
  });
}

function getMoney(){
  return playerStore.subscribe((p)=>p.money)
}
function aumentarDano(dmg: number){
  playerStore.update((player)=>{
    return {...player, dmg: player.dmg+dmg}
  });
}
function sumMoney(qtd: number){
  playerStore.update((player)=>{
    return {...player, money: player.money+qtd}
  });
}

export { playerStore, aumentarPontos, getMoney, aumentarDano, sumMoney };

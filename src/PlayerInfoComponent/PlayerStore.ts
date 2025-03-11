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
  points: 0
});

function sumPoints(points: number): void {
  playerStore.update((player) => {
    if (player.points + points >= player.lvl * 10) {
      return { ...player, points: 0, lvl: player.lvl + 1, dmg: player.dmg + 1 };
    }
    return { ...player, points: player.points + points };
  });
}

function getMoney(): number {
  let money = 0;
  playerStore.subscribe((p) => {money = p.money});
  return money;
}

function sumMoney(qtd: number): void {
  playerStore.update((player) => {
    return { ...player, money: player.money + qtd }
  });
}
function sumDamage(dmg: number): void {
  playerStore.update((player) => {
    return { ...player, dmg: player.dmg + dmg }
  });
}

export { playerStore, sumPoints, getMoney, sumDamage, sumMoney };

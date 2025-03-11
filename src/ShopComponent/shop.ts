import { getMoney, sumDamage, sumMoney } from "../PlayerInfoComponent/PlayerStore";

export type typeItem = {
  id: number;
  name: string;
  price: number;
  bonus: number;
}

export function getItens(): typeItem[] {
  return [
    {id: 0, name: "Espada", price: 10, bonus: 1},
    {id: 1, name: "Espada longa", price: 50, bonus: 3},
    {id: 2, name: "Espada encantada", price: 550, bonus: 4}
  ];
};

export function buyItem(index: number, item: typeItem, itensList: typeItem[]): typeItem[]{
  const playerMoney: number = getMoney();
  if(playerMoney < item.price){
    return itensList;
  }
  sumDamage(item.bonus);
  sumMoney(-item.price);
  return itensList.filter((i)=>i.id !== index);
}

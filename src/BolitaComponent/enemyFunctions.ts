function getEnemy(playerLvl: number)  {
  const enemyImage = Math.floor(Math.random() * 5);
  let img;
  const lvl = playerLvl;
  if(enemyImage < 4){
    img = "../../public/bolita01.jpg";
    return {
      name: "Bolita Beta",
      hp: 10*lvl,
      lvl: lvl,
      img: "../../public/bolita01.jpg",
      xp: 1*lvl,
      money: 1*lvl
    };
  }
  return {
    name: "Bolita Sigma",
    hp: 15*lvl,
    lvl: lvl,
    img: "../../public/bolita02.jpg",
    xp: 2*lvl,
    money: 2*lvl
  };
};

export { getEnemy };

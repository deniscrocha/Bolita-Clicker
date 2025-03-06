<script>
  import { getContext } from "svelte";
  import { sumMoney, aumentarPontos } from "../PlayerInfoComponent/PlayerStore";
  import { getEnemy } from "./enemyFunctions"; 
  let player = getContext("player");

  let enemy = $state(getEnemy($player.lvl))

  function handleClick(){
    const dmg = $player.dmg ? $player.dmg : 1;
    enemy.hp = enemy.hp - dmg
    if(enemy.hp <= 0){
      aumentarPontos(enemy.xp)
      sumMoney(enemy.money)
      enemy = { name: "", hp: 0, img: "",xp:0, lvl: 1, money: 0}
      setTimeout(()=>{
        enemy = getEnemy($player.lvl);
      }, 100)
    }
  }
</script>

<div class="container" >
  <h1>{enemy.name}</h1>
  <button type="button" onclick={()=> handleClick()}>
    <img src={enemy.img} alt=""/>
  </button>
  <h5>hp: {enemy.hp}</h5>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    width: 40%;
    border: 1px solid black;
    border-radius: 3px;
  }
  img {
    width: 100%;
    height: 60vh;
    border-radius: 5px;
    border: none;
  }
  h5 {
    margin: 2vh;
  }
  button {
    width: 80%;
    height: 60vh;
    background: none;
    border: none; 
  }
</style>

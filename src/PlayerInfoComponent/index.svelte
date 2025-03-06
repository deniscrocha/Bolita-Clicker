<script>
  import { getContext } from "svelte";
  let player = getContext("player");
</script>

<div class="container">
  <h1>{$player.name}</h1>
  <div class="name_container">
    <h3>Level: </h3>
    <p>{$player.lvl}</p>
  </div>
  <div class="name_container">
    <h3>Carteira: </h3>
    <p>{$player.money}$</p>
  </div>
  <div class="name_container">
    <h3>Pontos: </h3>
    <p>{$player.pontos}</p>
  </div>
  <div class="name_container">
    <h3>Dano: </h3>
    <p>{$player.dmg}</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 80vh;
    width: 30%;
    border: 1px solid black;
    border-radius: 3px;
    & p {
      margin: 0;
    }
    & h3{
      margin: 0;
    }
  }
  .name_container{
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 2vh;
  }
</style>

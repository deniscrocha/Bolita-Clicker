<script lang="ts">
  import PlayerInfoComponent from "./PlayerInfoComponent/index.svelte";
  import BolitaComponent from "./BolitaComponent/index.svelte";
  import ShopComponent from "./ShopComponent/index.svelte";
  import { playerStore } from "./PlayerInfoComponent/PlayerStore";
  import { setContext } from "svelte";

  setContext("player", playerStore);

</script>

<main class="container">
  <PlayerInfoComponent />
  <BolitaComponent />
  <ShopComponent />
</main>

<style>
  .container {
    height: 100vh;
    width: 90%;
    gap: 1vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>

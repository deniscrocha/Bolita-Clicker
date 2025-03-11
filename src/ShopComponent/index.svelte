<script lang="ts">
  import { getItens, buyItem, type typeItem } from "./shop";
  let itens: typeItem[] = $state(getItens());

  function handleBuy(id: number, item: typeItem){
    itens = buyItem(id, item, itens);
  }
</script>

<div class="container">
  <h1>Shop</h1>
  <ul class="itens">
    {#each itens as item}
      <li>
        <h5>{item.name}</h5>
        <p>{item.price}</p>
        <button onclick={()=> handleBuy(item.id, item)}>buy</button>
      </li>
    {/each}
  </ul>
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
  }
  .itens{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0;
    height: 60vh;
    & li{
      list-style-type: none;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      & h5 {
        width: 50%;
        text-align: start;
      }
    }
  }
</style>

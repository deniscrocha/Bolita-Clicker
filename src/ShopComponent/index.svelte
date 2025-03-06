<script>
  import { getMoney, aumentarDano, sumMoney } from "../PlayerInfoComponent/PlayerStore";

  let itens = $state([
    {id: 0, name: "Espada", price: 10, bonus: 1},
    {id: 1, name: "Espada longa", price: 50, bonus: 3},
    {id: 2, name: "Espada encantada", price: 550, bonus: 4}
  ])

  function handleBuy(index, item){
    const playerMoney = getMoney();
    if(playerMoney < item.price){
      return;
    }
    aumentarDano(item.bonus);
    sumMoney(-item.price);
    itens = itens.filter((i)=>i.id !== index);
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

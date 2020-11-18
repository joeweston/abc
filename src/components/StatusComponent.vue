<template>
  <div id="status-component">
    <p>Gold: {{gold}}</p>
    <p>SP: {{sp}}</p>

    <p>Level: {{playerLevel.val}}</p>
    <div id="exp-bar-container">
      <div id="exp-bar" :style="'width: ' + getBarWidth + '%;'"></div>
    </div>
    <p>Unique Enemies: {{uELevel}}</p>
    <p>Max HP: {{playerHp}}</p>
    <p>Attack: {{playerAttack}}</p>
    <p>Poison: {{playerPoisonAttack.val}}</p>
    <p>Poison Chance: {{playerPoisonAttack.chance}}</p>
    <p>Strong Fourth: {{playerStrongFourth}}</p>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed:{
    gold(){
      return store.player.resources.gold;
    },
    sp(){
      return store.player.resources.sp;
    },
    playerLevel(){
      return store.player.level;
    },
    uELevel(){
      return store.player.uniqueEnemiesLevel.val;
    },
    getBarWidth(){
      return Math.floor(100*(this.playerLevel.toNextMax - this.playerLevel.toNext)/this.playerLevel.toNextMax)
    },
    playerAttack(){
      return store.player.attack.val;
    },
    playerHp(){
      return store.player.hp.max;
    },
    playerPoisonAttack(){
      return store.player.poisonAttack;
    },
    playerStrongFourth(){
      return store.player.strongFourth.val;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#status-component{
  outline: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#exp-bar-container{
  margin-top: 7px;
  width: 140px;
  height: 20px;
  outline: 2px solid black;
  #exp-bar{
    background-color: rgb(190,242,253);
    height: 100%;
  }
}
p {
  padding: 7px 0 0 0; 
}
</style>




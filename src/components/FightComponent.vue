<template>
  <div id="fight-component">


    <div id="status-container">

  <!-- PLAYER STAUS        -->    
      <div id="player-status">
        <h2>player</h2>
        <div class="exploring-bar" v-if="exploring.state === 'SEARCHING'">
          <p>Searching...</p>
          <div class="bar-inner" :style="{width: `${exploringAtbPercent}%`}">
              
          </div>
        </div>
       <div class="recovery-atb-bar" v-else-if= "exploring.state === 'RECOVERING'">
          <p>Patching up</p>
          <div class="bar-inner" :style="{width: `${recoveryAtbPercent}%`}">
            
          </div>
        </div> 
        <div class="atb-bar" v-else>
          <div class="bar-inner" :style="{width: `${playerAtbPercent}%`}">
            
          </div>
        </div>  

        <div class="hp-bar">
          <p>{{player.hp.val}}/{{player.hp.max}}</p>
          <div class="bar-inner" :style="{width: `${playerHpPercent}%`,'backgroundColor': `hsl(${playerHpPercent}, 70%, 80%)`}">
          </div>
        </div>



      <div class="status">
        <!--Debuff/curses  -->
        <div class="symbol-holder" v-if="player.debuffs.poison > 0">
          <div class="poison"></div>
          <p>{{player.debuffs.poison}}</p>
        </div>
        <div class="symbol-holder" v-else-if="player.curses.poison > 0">
          <div class="poison"></div>
          <p>{{player.curses.poison}}</p>
        </div>
        <!--End Debuff/curses  -->

        <div class="symbol-holder" v-if="player.anger.increase > 0">
            <div class="anger"></div>
            <p>{{player.anger.increase}}</p>
        </div>
        <div class="symbol-holder" v-if="player.absorb.val > 0">
            <div class="absorb"></div>
            <p>{{player.absorb.val}}</p>
        </div>
        <div class="symbol-holder" v-if="player.thorns.val > 0">
            <div class="thorns"></div>
            <p>{{player.thorns.val}}</p>
        </div>
        <div class="symbol-holder" v-if="player.poisonAttack.val > 0">
            <div class="poison-attack"></div>
            <p>{{player.poisonAttack.val}}</p>
        </div>
        <div class="symbol-holder" v-if="player.deathDefy.count > 0">
            <div class="death-defy"></div>
            <p>{{player.deathDefy.count}}</p>
        </div>
        <div class="symbol-holder" v-if="player.firstStrike === true">
            <div class="first-strike"></div>
            <p> </p>
        </div>
        <div class="symbol-holder" v-if="player.strongFourth.val > 1 || player.strongFourth.flat > 0">
            <div class="strong-fourth"></div>
            <p> </p>
        </div>

      </div>

    </div>








    <!-- ENEMY STATUS --------->  
      <div id="enemy-status" v-if="enemy.inExistance">
        <h2>{{enemy.text}}</h2>
        <div class="atb-bar">
          <div class="bar-inner" :style="{width: `${enemyAtbPercent}%`}">
            
          </div>
        </div>

        <div class="hp-bar">
          <p>{{enemy.hp.val}}/{{enemy.hp.max}}</p>
          <div class="bar-inner" :style="{width: `${enemyHpPercent}%`,'backgroundColor': `hsl(${enemyHpPercent}, 70%, 80%)`}">

          </div>
        </div>
        <div class="status">
          <div class="symbol-holder" v-if="enemy.debuffs.poison > 0">
            <div class="poison"></div>
            <p>{{enemy.debuffs.poison}}</p>
          </div>
          <div class="symbol-holder" v-if="enemy.anger.increase > 0">
              <div class="anger"></div>
              <p>{{enemy.anger.increase}}</p>
          </div>
          <div class="symbol-holder" v-if="enemy.absorb.val > 0">
              <div class="absorb"></div>
              <p>{{enemy.absorb.val}}</p>
          </div>
          <div class="symbol-holder" v-if="enemy.thorns.val > 0">
              <div class="thorns"></div>
              <p>{{enemy.thorns.val}}</p>
          </div>
          <div class="symbol-holder" v-if="enemy.poisonAttack.val > 0">
              <div class="poison-attack"></div>
              <p>{{enemy.poisonAttack.val}}</p>
          </div>
          <div class="symbol-holder" v-if="enemy.deathDefy.count > 0">
              <div class="death-defy"></div>
              <p>{{enemy.deathDefy.count}}</p>
          </div>
          <div class="symbol-holder" v-if="enemy.firstStrike === true">
              <div class="first-strike"></div>
              <p> </p>
          </div>
          <div class="symbol-holder" v-if="enemy.strongFourth.val > 0 || enemy.strongFourth.flat > 0">
              <div class="strong-fourth"></div>
              <p> </p>
          </div>





          <div class="symbol-holder" v-if="enemy.spawn !== false">
              <div class="spawn"></div>
              <p>?</p>
          </div>


        </div>

      </div>
    <!-- ENEMY STATUS PLACEHOLDER -->
      <div v-else>
        <h2>No Enemy</h2>
        <div class="bars-placeholder"></div>
      </div>
    </div>
    <div id="sprite-area">
      <img v-if="enemy.inExistance" :src="getImageUrl">
      <div id="dummy-enemy" v-else></div>
    </div>
  </div>


</template>

<script>
import store from "../store";
import mutations from "../mutations";
export default {
  methods:{
    escape: mutations.escape,
  },
 computed: {
    player(){
      return store.player;
    },
    enemy(){
      return store.enemy;
    },
    exploring(){
      return store.exploring;
    },
    /////computed for style
    playerAtbPercent(){
      if(store.player.fightPhase ==="ATTACK"){
        return 100;
      }
      return `${store.player.atb.val/store.player.atb.max * 100}`;
    },
    playerHpPercent(){
      return `${store.player.hp.val/store.player.hp.max * 100}`;
    },
    enemyAtbPercent(){
      if(store.enemy.fightPhase ==="ATTACK"){
        return 100;
      }
      return `${store.enemy.atb.val/store.enemy.atb.max * 100}`;
    },
    enemyHpPercent(){
      return `${store.enemy.hp.val/store.enemy.hp.max * 100}`;
    },
    exploringAtbPercent(){
      if(store.exploring.state ==="FIGHTING"){
        return 100;
      }
      return `${store.exploring.atb.val/store.exploring.atb.max * 100}`;
    },
    recoveryAtbPercent(){
      return `${store.player.recovery.atb.val/store.player.recovery.atb.max * 100}`;
    },
    getImageUrl(){
      try {
        return require(`@/assets/enemy/${this.enemy.name}.png`)
      } catch { //if url is non-existant
        return require(`@/assets/enemy/error.png`)
      }   
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#fight-component{
  margin-top: 110px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 5px;
  padding-right: 5px;
  width: 700px;
  background-color: rgba(255,255,255, 90%)
}




/*************************
atb/hp bars
**************************/
$bar-width: 330px;
$bar-height: 30px;
$bar-border: 2px solid black;
$atb-color: rgb(150,210,250);
$exploring-color: rgb(250,250,210);
$recovery-color: rgb(250,210,210);
$bar-background: white;
$bar-font-size: 18px;


.atb-bar,.exploring-bar,.recovery-atb-bar{
  width: $bar-width;
  height: $bar-height;
  border: $bar-border;
  background-color: $bar-background;
  position: relative;
  p{
    position: absolute;
    left: 0;
    line-height: $bar-height - 2px;
    width: 100%;
    text-align: center;
    font-size: $bar-font-size;
  }
 .bar-inner{
    height: $bar-height - 4px;
  }
}
.atb-bar{
 .bar-inner{
    background-color: $atb-color;
  }
}
.exploring-bar{
 .bar-inner{
    background-color: $exploring-color;
  }
}
.recovery-atb-bar{
 .bar-inner{
    background-color: $recovery-color;
  }
}

.hp-bar{
  background-color: $bar-background;
  width: $bar-width;
  height: $bar-height;
  border: $bar-border;
  border-top: none;
  position: relative;
  p{
    position: absolute;
    left: 0;
    line-height: $bar-height +2px;
    width: 100%;
    text-align: center;
    font-size: $bar-font-size;
  }
 .bar-inner{
    height: $bar-height - 2px;
    //background-color calculated
  }
}
#enemy-status{
  .bar-inner{
    float: right;
  }
}
.bars-placeholder{
  height: $bar-height * 2;
  width: $bar-width;
  border: $bar-border;
  background-color: $bar-background;
}
/******************
 layouut
******************/
.fight-text{
  height: 110px;
  background-color: white;
   .text-holder{
    display: flex;
    justify-content: center;
    height: 80px;
    flex-direction: column;
  }
}
#status-container{
  display: flex;
  justify-content: space-between;
  //height: 400px;

}
#sprite-area{
  height: 238px;
  display: flex;
  justify-content: center;
  #dummy-enemy{
    height:200px;
    width: 200px;
  }
  img{
    display: block;
    height:200px;
    width: 200px;
  }
}




/********************
Icons/And their containers
*********************/
.status{
  display: flex;
  align-items: center;
  min-height: 57px;
  .symbol-holder{
    padding: 0 3px;
    p{
      font-size: 20px;
      text-align: center;
      line-height: 25px;
      height: 25px;
      min-width: 25px;
    }
  }
}
.poison{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/poisonIcon3.png) 0 0;
}
.anger{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/angerIcon3.png) 0 0;
}
.absorb{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/absorb.png) 0 0;
}
.thorns{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/thorns.png) 0 0;
}
.poison-attack{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/poisonAttack.png) 0 0;
}
.death-defy{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/deathDefy.png) 0 0;
}
.spawn{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/spawn.png) 0 0;
}
.first-strike{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/firstStrike.png) 0 0;  
}
.strong-fourth{
  width: 32px;
  height: 32px;
  background: url(../assets/icons/strongFourth.png) 0 0;  
}

</style>














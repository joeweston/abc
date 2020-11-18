import Vue from "vue";
import statusUpdater from "../game/statusUpdater";
import store from "../store";
import playerTestLevel from "../gameData/playerTestLevel";
export default {
  gainAllArtifacts(){
    for(let eachArtifact in store.artifacts){
      store.artifacts[eachArtifact].owned = true;
    }
  },
  superStrength(){
    store.player.attack.base *= 10;
    statusUpdater.updateAttack();
  },
  loadTest(name){//
    let playerBaseStats = playerTestLevel[name].player;
    if (!playerBaseStats){
      return;
    }
    for (let eachKey in playerBaseStats){
        Vue.set(store.player, eachKey, playerBaseStats[eachKey]);
    }
    Vue.set(store, "skills",  playerTestLevel[name].skills);
  }
}
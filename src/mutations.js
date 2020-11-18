//import Vue from "vue";
import store from "./store";
import fight from "./game/fight";
import explore from "./game/explore";
import challenge from "./game/challenge";
import recovery from "./game/recovery";
import log from "./game/log";
import skillTree from "./game/skillTree";
import devMutations from "./mutations/devMutations.js";
import artifactMutations from "./mutations/artifactMutations.js";
import setupMutations from "./mutations/setupMutations.js";
import playerBaseStats from "./gameData/playerBaseStats"
export default {
  //imported mutations
  ...devMutations, ...artifactMutations, ...setupMutations,
  initialiseTick(){
    store.interval = setInterval(function(){
      store.tick++;
////////fight tick
      if( store.fight.state === "ACTIVE"){
        fight.tick();
      }     
/*-------------------------------------
 * All Exploring ticks
 --------------------------------------*/
      if (store.exploring.state !== "NOT_EXPLORING"){
        switch(store.exploring.state){
          case "SEARCHING": /////////normal explore tick
            explore.tick();
            break;
          case "FIGHTING": /////////if fighting during exploration
            switch(store.fight.state){
              case "LOST": ///////////if fight is lost stop stop exploring
                store.exploring.state = "NOT_EXPLORING";
                //full heal
                recovery.fullHeal();
                break;
              case "WON": ///////////if fight is won start recovering
                store.exploring.state = "RECOVERING";
                break;
            }
            break
          case "RECOVERING":
            if(store.player.hp.val === store.player.hp.max){ //////////if at full health start seraching
              store.exploring.state = "SEARCHING"
            } else {
              recovery.tick();//////////else recover as usual
            }
            break;           
        }
    }
/*------------------------------------
End all exploring ticks
------------------------------------*/

/*------------------------------------
All challenge ticks
------------------------------------*/
      if(store.challenge.active === true){
        switch(store.fight.state){
          case "LOST":
            challenge.lose();
            recovery.fullHeal();
            break;
          case "WON":
            challenge.increaseRound()
            if (store.challenge.won === true){
              recovery.fullHeal();
            }
            break;
        }
      }
/*------------------------------------
End all challenge ticks
------------------------------------*/


///////////////update the log (one message per tick)
      log.updateMessages()

    }, store.tickSpeed);
  },
  startFight(enemyName){
    fight.startFight(enemyName);
  },
  startChallenge(challengeName){
    challenge.startChallenge(challengeName);
  },
  escape(){
    store.enemy.inExistance = false;
    store.fight.state = "LOSE";
    //
    store.exploring.state = "NOT_EXPLORING";
    store.challenge.active = false;

    recovery.fullHeal();
  },
  startExploring(areaName){
    explore.startExploring(areaName);
  },


  travel(areaName){
    store.currentArea = areaName;

  },
  getSkill(skillName){
    skillTree.getSkill(skillName);
  },
  resetSkills(){
    skillTree.resetSkills();
  },

  save(){
    let save = {
      player: {},
      skills: store.skills,
      storyProgress: store.storyProgress,
      artifacts: store.artifacts,
      enemiesKilledList: store.enemiesKilledList,
    };
    //load player
    for (let eachKey in playerBaseStats){
      save.player[eachKey] = store.player[eachKey];
    }

    save = JSON.stringify(save);
    localStorage.setItem("save", save);
  }
};



















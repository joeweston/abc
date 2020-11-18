import store from "../store";
import enemies from "../gameData/enemyData";
import playerLevelData from "../gameData/playerLevelData";
import log from "./log";
import statusUpdater from "./statusUpdater";

export default {

  getXp(enemyName){
    let xp = enemies[enemyName].xp * store.player.expGain.val/100;

    let relativeLevel = store.player.level.val - enemies[enemyName].level;
    if (relativeLevel > 4){
      return 1;
    }
    if ( relativeLevel < -4){
      return Math.floor(xp * 3);
    }
    switch( relativeLevel ){
      case -4:
        return Math.floor(xp * 2.5);
      case -3:
        return Math.floor(xp * 1.9);
      case -2:
        return Math.floor(xp * 1.4);
      case -1:
        return Math.floor(xp * 1.1);
      case 0:
        return xp;
      case 1:
        return Math.ceil(xp * 0.9);
      case 2:
        return Math.ceil(xp * 0.8);
      case 3:
        return Math.ceil(xp * 0.6);
      case 4:
        return Math.ceil(xp * 0.3);
      
    }
  },
  applyXp(enemyName){
    let xp = this.getXp(enemyName);
    let level = store.player.level;
    level.toNext -= xp;
    if (level.toNext <= 0){
      level.val += 1;
      level.toNext = level.toNextMax = playerLevelData.levelThresholds[level.val]
      log.updateMessage("You have gained a level!");
      levelUp();
    }
  },
  unqueEnemyUpdate(enemyKilled){
    if( store.enemiesKilledList[enemyKilled] === 0 ){
      uniqueEnemyUp();
    }
    store.enemiesKilledList[enemyKilled]++;
  }

}
function levelUp(){
  let statusToApply = playerLevelData.levelRewards[store.player.level.val];
  store.player.resources.sp += statusToApply.sp;
  store.player.hp.levelModifier += statusToApply.hp;
  statusUpdater.updateHp();
  store.player.attack.levelModifier += statusToApply.attack;
  statusUpdater.updateAttack();
}
function uniqueEnemyUp(){
  store.player.uniqueEnemiesLevel.val++;
  let statusToApply = playerLevelData.uniqueEnemyRewards[store.player.uniqueEnemiesLevel.val];
  store.player.resources.sp += statusToApply.sp;
  store.player.hp.uniqueEnemiesLevelModifier += statusToApply.hp;
  statusUpdater.updateHp();
  store.player.attack.uniqueEnemiesLevelModifier += statusToApply.attack;
  statusUpdater.updateAttack();  
}




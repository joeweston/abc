import store from "../store";
import speedLevelData from "../gameData/speedLevelData";
const player = store.player;
export default {
  updateAttack(){
    const attack = player.attack;
    attack.val = Math.floor(
      //base
      (attack.base + attack.levelModifier + attack.uniqueEnemiesLevelModifier)
      //multipliers
      * (1 + attack.artifactMultiplier) * (1 + attack.extraBeefMultiplier )
      * (1 + attack.fangsMultiplier)
      //dividers
      * (1 / (1 + attack.dodgyTicker))
      * (1 / (1 + attack.pillow))
      //flat
      + attack.plusSign
      );
  },
  updatePoisonAttack(){
    const poisonAttack  = player.poisonAttack;
    poisonAttack.val = Math.floor(
      //base
      (poisonAttack.base + poisonAttack.centepedeForcipules)
      //multiplier
      * (1 + poisonAttack.artifactMultiplier) );
  },
  updatePoisonAttackChance(){
     const poisonAttack  = player.poisonAttack;
     //over 100% doen't matter
     poisonAttack.chance = Math.floor(
     //base
     (poisonAttack.chanceBase + poisonAttack.formicAcid)
     //multiplier
     * (1 + poisonAttack.anaphylaxis/100)
     );

  
  },
  updateHp(){
    const hp = store.player.hp;
    hp.max = Math.floor( 
      //base
      ( hp.base + hp.levelModifier + hp.uniqueEnemiesLevelModifier )
      //multiplier
      * (hp.extraHeartMultiplier + 1) 
      * (hp.pillow + 1)    
      //divider
      * (1/ (1 + hp.experimentalVaccine))
      )
      //flat
      + hp.plusSign
    if(store.challenge.active === false){
      hp.val = hp.max;
    }
  },
  updateSpeed(){
    /*
      atb speed default is 200 atb bar is 5000 which takes 25 ticks to fill
      each level will decrease fill time by 1 second 
      level 1 is 200 , level 24 is 2500 (this is max)
    */

    store.player.atb.speed =  speedLevelData.playerAtb[
      store.player.atb.longerLegs
    ];
  },
    /*
      atb speed default is 50 atb bar is 5000 which takes 100 ticks to fill
      each level will decrease fill time by 1 second 
      level 1 is 100 , level 99 is 2500 (this is max)
    */
  updateExploreSpeed(){
    store.exploring.atb.speed =  speedLevelData.exploringAtb[store.player.exploreSpeed -1];
  },
  updateGoldGain(){
    const goldGain = store.player.goldGain;
    goldGain.val = Math.floor(
      goldGain.base
      //multipliers
      * (1 + goldGain.lobsterGreed)
    )
  },
  updateExpGain(){
    const expGain = store.player.expGain;
    expGain.val = Math.floor(
      expGain.base
      //multipliers
      * (1 + expGain.shrimpWisdom)
    )
  },
  updateToxin(){
    const toxin = store.player.toxin;
    toxin.val = Math.floor(
      //base
      (toxin.base + toxin.necrosis)
      //multipliers
    )
  },
  updatePoisonDefence(){
    const poisonDefence = store.player.poisonDefence;
    poisonDefence.val = 
      //flat
      poisonDefence.antigens +
      poisonDefence.experimentalVaccine;
  },
  updateStrongFourthVal(){
    player.strongFourth.val = 
      (1 + player.strongFourth.joust)
      * (1 + player.strongFourth.dodgyTicker)
  },
  updateFourthDefenceFlat(){
    player.fourthDefence.flat = 
      player.fourthDefence.antiJoust;
  }
}





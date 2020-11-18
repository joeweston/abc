import statusUpdater from "./statusUpdater";
import store from "../store";
export default {
  extraHeart: {
    name: "extraHeart",
    text: "Extra Heart",
    desc: "Increase HP by 30% per level",
    cost: 3,
    max: 3,
    prerequisites: false,
    aquire(){
      store.player.hp.extraHeartMultiplier += 0.3;
      statusUpdater.updateHp();
    },
    remove(){
      store.player.hp.extraHeartMultiplier = 0;
      statusUpdater.updateHp();
    }
  },
  extraBeef: {
    name: "extraBeef",
    text: "Extra Beef",
    desc: "Increase Attack by 10% per level",
    cost: 1,
    max: 5,
    prerequisites: ["extraHeart"],
    aquire(){
      store.player.attack.extraBeefMultiplier += 0.1;
      statusUpdater.updateAttack();
    },
    remove(){
      store.player.attack.extraBeefMultiplier = 0;
      statusUpdater.updateAttack();
    }
  },
  longerLegs: {
    name: "longerLegs",
    text: "Longer Legs",
    desc: "Increase speed by 1 - ATB fills up one tick sooner. Base is 25 ticks.",
    cost: 4,
    max: 3,
    prerequisites: false,
    aquire(){
      store.player.atb.longerLegs += 1;
      statusUpdater.updateSpeed();
    },
    remove(){
      store.player.atb.longerLegs = 0;
      statusUpdater.updateSpeed();
    },
  },
  superiorVision: {
    name: "superiorVision",
    text: "Superior Vision",
    desc: "Increase explore speed by 5 - ATB fills up 5 ticks sooner. Base is 100 ticks.",
    cost: 1,
    max: 10,
    prerequisites: false,
    aquire(){
      store.player.exploreSpeed += 5;
      statusUpdater.updateExploreSpeed();
    },
    remove(){
      store.player.exploreSpeed = 0;
      statusUpdater.updateExploreSpeed();
    },
  },
  centepedeForcipules:{
    name: "centepedeForcipules",
    text: "Centepede Forcipules",
    desc: "Base posion damage up 1 per level - by default poison has a 5% chance of hitting",
    cost: 4,
    max: 3,
    prerequisites: false,
    aquire(){
      store.player.poisonAttack.centepedeForcipules += 1;
      statusUpdater.updatePoisonAttack();
    }, 
    remove(){
      store.player.poisonAttack.centepedeForcipules = 0;
      statusUpdater.updatePoisonAttack();
    }, 
  },
  anaphylaxis:{
    name: "anaphylaxis",
    text: "Anaphylaxis",
    desc: "Posion chance is 20% greater - multiplier - it's multiplied by 20%, not 20% more!",
    cost: 2,
    max: 5,
    prerequisites: false,
    aquire(){
      store.player.poisonAttack.anaphylaxis += 20;
      statusUpdater.updatePoisonAttackChance();
    },
    remove(){
      store.player.poisonAttack.anaphylaxis = 0;
      statusUpdater.updatePoisonAttackChance();
    },      
  },
  formicAcid:{
    name: "formicAcid",
    text: "Formic Acid",
    desc: "Posion chance base is 1% greater - additive - it's 1% more!",
    cost: 2,
    max: 10,
    prerequisites: false,
    aquire(){
      store.player.poisonAttack.formicAcid += 1;
      statusUpdater.updatePoisonAttackChance();
    },
    remove(){
      store.player.poisonAttack.formicAcid = 0;
      statusUpdater.updatePoisonAttackChance();
    },      
  },
  fangs:{
    name: "fangs",
    text: "Fangs",
    desc: "Your poison attack percentage will directly multiply your damage",
    cost: 20,
    max: 1,
    prerequisites: false,
    aquire(){
      store.player.attack.fangsMultiplier = store.player.poisonAttack.chance/100;
      statusUpdater.updateAttack();
    },
    remove(){
      store.player.attack.fangsMultiplier = 0;
      statusUpdater.updateAttack();
    },    
  },
  lobsterGreed:{
    name: "lobsterGreed",
    text: "Lobster Greed",
    desc: "These greedy lobster instincts will compell you to find 10% more gold per level.",
    cost: 2,
    max: 10,
    prerequisites: false,
    aquire(){
      store.player.goldGain.lobsterGreed += 0.1;
      statusUpdater.updateGoldGain();
    },
    remove(){
      store.player.goldGain.lobsterGreed = 0;
      statusUpdater.updateGoldGain();
    },    
  },
  shrimpWisdom:{
    name: "shrimpWisdom",
    text: "Shrimp Wisdom",
    desc: "You could learn alot from shrimps you know? Gain 10% more experience per level.",
    cost: 2,
    max: 10,
    prerequisites: false,
    aquire(){
      store.player.expGain.shrimpWisdom += 0.1;
      statusUpdater.updateExpGain();
    },
    remove(){
      store.player.expGain.shrimpWisdom = 0;
      statusUpdater.updateExpGain();
    },
  },
  necrosis:{
    name: "necrosis",
    text: "Necrosis",
    desc: "Attacks are 10% more powerfull against poisoned foes.",
    cost: 2,
    max: 5,
    prerequisites: false,
    aquire(){
      store.player.toxin.necrosis += 0.1;
      statusUpdater.updateToxin();
    },
    remove(){
      store.player.toxin.necrosis = 0;
      statusUpdater.updateToxin();
    },      
  },
  antigens:{
    name: "antigens",
    text: "Antigens",
    desc: "You negate one poison per level.",
    cost: 3,
    max: 3,
    prerequisites: false,
    aquire(){
      store.player.poisonDefence.antigens += 1;
      statusUpdater.updatePoisonDefence();
    },
    remove(){
      store.player.poisonDefence.antigens = 0;
      statusUpdater.updatePoisonDefence();
    }
  },
  joust: {
    name: "joust",
    text: "Joust",
    desc: "Every fourth attack will do 70% more damage per level.",
    cost: 4,
    max: 3,
    prerequisites: false,
    aquire(){
      store.player.strongFourth.joust += 0.7
      statusUpdater.updateStrongFourthVal();
    },
    remove(){
      store.player.strongFourth.joust = 0;
      statusUpdater.updateStrongFourthVal();
    }      
  },
  antiJoust: {
    name: "antiJoust",
    text: "Anti-Joust",
    desc: "You block an extra 2 damage per level - but only only every fourth time your attacked.",
    cost: 3,
    max: 3,
    prerequisites: false,
    aquire(){
      store.player.fourthDefence.antiJoust += 2;
      statusUpdater.updateFourthDefenceFlat();
    },
    remove(){
      store.player.fourthDefence.antiJoust = 0;
      statusUpdater.updateFourthDefenceFlat();
    }     
  }

}






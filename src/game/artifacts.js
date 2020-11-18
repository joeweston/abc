import store from "../store";
import statusUpdater from "./statusUpdater";
export default {
  dodgyTicker:{
    name:"dodgyTicker",
    text: "The Dodgy Ticker",
    desc: "Beep Beep Beep BONG. Your fourth attack is greater so your other attacks are nerfed.",
    equip(){
      store.artifacts.dodgyTicker.equipped = true;
      store.player.attack.dodgyTicker += 1;
      store.player.strongFourth.dodgyTicker += 3;
      statusUpdater.updateAttack();
      statusUpdater.updateStrongFourthVal();
    },
    unequip(){
      store.artifacts.dodgyTicker.equipped = false;
      store.player.attack.dodgyTicker -= 1;
      store.player.strongFourth.dodgyTicker -= 3;
      statusUpdater.updateAttack();
      statusUpdater.updateStrongFourthVal();
    }
  },
  experimentalVaccine:{
    name:"experimentalVaccine",
    text: "Experimental Vaccine",
    desc: "You will become more immune to poison, your long term heath will suffer",
    equip(){
      store.artifacts.experimentalVaccine.equipped = true;
      store.player.hp.experimentalVaccine += 1;
      store.player.poisonDefence.experimentalVaccine += 2;
      statusUpdater.updateHp();
      statusUpdater.updatePoisonDefence();
    },
    unequip(){
      store.artifacts.experimentalVaccine.equipped = false;
      store.player.hp.experimentalVaccine -= 1;
      store.player.poisonDefence.experimentalVaccine -= 2;
      statusUpdater.updateHp();
      statusUpdater.updatePoisonDefence();
    }
  },
  pillow:{
    name:"pillow",
    text: "The Pillow",
    desc: "Life just got more comfortable - you will rely less on violence.",
    equip(){
      store.artifacts.pillow.equipped = true;
      store.player.hp.pillow += 0.3;
      store.player.attack.pillow += 1;
      statusUpdater.updateHp();
      statusUpdater.updateAttack();
    },
    unequip(){
      store.artifacts.pillow.equipped = false;
      store.player.hp.pillow -= 0.3;
      store.player.attack.pillow -= 1;
      statusUpdater.updateHp();
      statusUpdater.updateAttack();
    }
  },
  plusSign:{
    name:"plusSign",
    text: "A Plus Sign",
    desc: "Yay, no drabacks.",
    equip(){
      store.artifacts.plusSign.equipped = true;
      store.player.hp.plusSign += 13;
      store.player.attack.plusSign += 3;
      statusUpdater.updateHp();
      statusUpdater.updateAttack();
    },
    unequip(){
      store.artifacts.plusSign.equipped = false;
      store.player.hp.plusSign -= 13;
      store.player.attack.plusSign -= 3;
      statusUpdater.updateHp();
      statusUpdater.updateAttack();
    },
  },


}
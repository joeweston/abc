import store from "../store";
export default {

  gateKeeper:{
    name: "gateKeeper",
    text: "The Gatekeeper",
    enemies: [
      "gateKeeper"
    ],
    onWin(){
      store.storyProgress.gateKeeperDefeated = true;
    }
  },
  miasmo:{
    name: "miasmo",
    text: "Miasmo",
    enemies: [
      "miasmoDark"
    ],
    curses:{
      poison: 1,
    },
    onWin(){
      store.storyProgress.miasmoDefeated = true;
      store.currentArea = "eventHorizon";
      store.artifacts.dodgyTicker.owned = true;
      store.artifacts.pillow.owned = true;
      store.artifacts.experimentalVaccine.owned = true;
      store.artifacts.plusSign.owned = true;
    },
    onLose(){
      store.currentArea = "antLand"
    },
  },
  theGreatAntChallenge:{
    name: "theGreatAntChallenge",
    text: "The Great Ant Challenge",
    enemies: [
      "workerAnt","joblessAnt","knightAnt","antLancer"
    ],
    onWin(){
      store.player.resources.sp += 3;
    },
  }
}










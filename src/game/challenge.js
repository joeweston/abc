import challengeData from "../gameData/challengeData";
import store from "../store";
import fight from "./fight";
const noCurses = {poison:0};
export default {
  startChallenge(challengeName){
    store.challenge.round = 0;
    store.challenge.name = challengeName;
    store.challenge.active = true;
    store.challenge.won = false;
    store.player.curses = challengeData[store.challenge.name].curses || noCurses;

    this.startRound(store.challenge.name);
  },
  startRound(){
    const enemy = challengeData[store.challenge.name].enemies[store.challenge.round];
    fight.startFight(enemy);
  },
  increaseRound(){
    store.challenge.round += 1;
    if ( store.challenge.round > challengeData[store.challenge.name].enemies.length - 1){
      this.win();
    } else {
      this.startRound();
    }

  },
  win(){
    store.challenge.won = true;
    store.challenge.active = false;
    challengeData[store.challenge.name].onWin();
    clearCurses();
  },
  lose(){
    store.challenge.won = false;
    store.challenge.active = false;
    let onLose = challengeData[store.challenge.name].onLose;
    if (onLose){
      onLose();
    }
    clearCurses();
  }
}
function clearCurses(){
  store.player.curses = noCurses;
}
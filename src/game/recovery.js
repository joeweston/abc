import store from "../store";
export default {
  tick(){
    this.incrementAtb();
  },
  incrementAtb(){
    let atb = store.player.recovery.atb;
    atb.val += atb.speed;
    if (atb.val >= atb.max){
      this.incrementHealth();
      atb.val = 0;
    }
  },
  incrementHealth(){
    store.player.hp.val += store.player.recovery.val;
    if(store.player.hp.max < store.player.hp.val){
      store.player.hp.val = store.player.hp.max;
    }
  },
  fullHeal(){
    store.player.hp.val = store.player.hp.max;
    store.player.debuffs.poison = 0;
    store.player.atb.val = 0;
  }
}
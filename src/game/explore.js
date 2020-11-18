import exploreData from "../gameData/exploreData";
import store from "../store";
import fight from "./fight";
export default {
  tick(){
    this.incrementAtb();
  },
  incrementAtb(){
    let atb = store.exploring.atb
    atb.val += atb.speed;
    if (atb.val >= atb.max){
      store.exploring.state = "FIGHTING";
      atb.val = 0;
      //find enemy then fight him
      fight.startFight(this.getEnemy());
    }
  },
  getEnemy(){
    let pool = []
    let events = exploreData[store.exploring.name].event;
    for (let key in events){

      pool.push([key, events[key].chance]);
    }
    return weightedRandom(pool)
  },
  startExploring(areaName){
    store.exploring.name = areaName;
    store.exploring.state = "SEARCHING";
    store.exploring.atb.val = 0;

  },


}



/**
* Chooses a psuedo random item from an array which is weighted such that higher
* weighted items are more likely to be chosen
* @param  {Array} pool An array af $arrays.
*  $array[0] being the item that could be chosen
*  $array[1] being the weight, higher weights mean better chance
* @return {Object|null} The object chosen
*/
function weightedRandom(pool){
  let total = 0;
  for(let i in pool){
    total += pool[i][1];
  }
  let rand = random(total);
  let sum = 0;
  for(let i in pool){
    sum += pool[i][1];
    if( rand <= sum ) return pool[i][0]
  }
}
/**
 * Generates a random integer
 * @param  {Number} max The upper bound - inclusive
 * @return {Number}     The generated number between 1 and max inclusive
 */
function random(max){
  return Math.floor( Math.random() * max + 1);
}
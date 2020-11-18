
import store from "../store";
import log from "./log";
import levelModule from "./levelModule"

import characterData from "../gameData/enemyData";
export default {
  tick(){
    store.fight.totalTicks +=1;
    //firstly over time (regen / poison)
    this.damageOverTimeTick("player");
    this.damageOverTimeTick("enemy");


    //player always ticks first
    if(store.fight.state === "ACTIVE"){
      this.playerTick();
    }
    //enemy could be defeated so check is ran again
    if(store.fight.state === "ACTIVE"){
      this.enemyTick();
    }
  },
  playerTick(){
    if(store.player.fightPhase === "WAIT"){
      this.incrementAtb( "player" );
    } else if (store.player.fightPhase === "ATTACK" ){
      this.attack("player", "enemy");
      if (store.enemy.hp.val === 0){//enemy  killed
        if(store.enemy.spawn !== false){ //if enemy has spawn
          this.setEnemyData(store.enemy.spawn);
        }
        else {
          this.win();
        }

      } else if(store.player.hp.val === 0){//player killed somehow (thorns?)
        this.lose();              
      }
    } else{
      throw "should not be reached";
    }
  },
  enemyTick(){
    if(store.enemy.fightPhase === "WAIT"){
      this.incrementAtb( "enemy" );
    } else if (store.enemy.fightPhase === "ATTACK" ){
      this.attack("enemy", "player");
      if (store.player.hp.val === 0){ //player killed by attack
        this.lose();
      } else if(store.enemy.hp.val === 0){ //enemy killed somehow (thorns!?)
        if(store.enemy.spawn !== false){ //if enemy has spawn
          this.setEnemyData(store.enemy.spawn);
        } else {
          this.win();
        }
      }
    } else{
      throw "should not be reached";
    }
  },
  damageOverTimeTick(characterType){
    if (store.fight.totalTicks % 5 === 0){
     let character = store[characterType];
     //poison
     let poisonDamage = character.debuffs.poison;
     character.hp.val -= poisonDamage;
     if (character.hp.val < 1){
        character.hp.val = 1;
     }

    }
  },
  incrementAtb(characterType){
    let character = store[characterType];
//first srike
    if (character.firstStrike === true){
      if (character.attackCount === 0){
        character.atb.val = character.atb.max;
      }
    }
////
    character.atb.val += character.atb.speed
    if (character.atb.val >= character.atb.max){
      character.fightPhase = "ATTACK";
      character.atb.val = 0;
    }
  },
  attack(attackerType, defenderType){
    let attacker = store[attackerType];
    let defender = store[defenderType];

    attacker.fightPhase = "WAIT";
    attacker.attackCount += 1;
    defender.defendCount += 1;

    let attackDoesHit = false;
    if (doesAttackLand(attacker.hit.val, defender.evade.val)){
      attackDoesHit = true;
    }

    let attackValue = attacker.attack.val;
/////anger contribution
    attackValue += attacker.anger.val;
//////strongFourth    every fourth attack double damage
    let strongFourth = attacker.strongFourth;
    if (attacker.attackCount % 4 === 0){
      if (strongFourth.val > 1 ){
        attackValue *= Math.ceil(strongFourth.val);
      }
      if(strongFourth.flat > 0){
        attackValue += strongFourth.flat;
      }
    }
//toxin: attacks are geater against poisoned enemies
    if (defender.debuffs.poison > 0 && attacker.toxin.val > 0){
      attackValue = Math.floor(attackValue * ( 1 + attacker.toxin.val/100));
    }


////////////////////////////////////////hp change to defender



//armour defence
    let defendValue = defender.defence.val;
    //fourth defence - every fourth defend (including miss)
    let fourthDefence = defender.fourthDefence;
    if (defender.defendCount % 4 === 0){
      if (fourthDefence.val > 0 ){
        defendValue *= Math.ceil(fourthDefence.val + 1);
      }
      if(fourthDefence.flat > 0){
        defendValue += fourthDefence.flat;
      }
    }    
    //
    //
    let damage = attackValue - defendValue;
//apply poison
    let poisonAmount = attacker.poisonAttack.val - defender.poisonDefence.val;
    if (poisonAmount > 0){
      if(defender.debuffs.poison < poisonAmount){ //only replace poison if it is stronger
        if(binaryRandom(attacker.poisonAttack.chance) === true){ //chance to land
          defender.debuffs.poison = poisonAmount;
        }
      }
    } 

///this is here for resons
    if (damage < 0){
      damage = 0;
    }
//finally do the damege


    if(attackDoesHit){
      defender.hp.val -= damage;
    }




//death defy
  if( defender.deathDefy.count > 0 && defender.hp.val <= 0){
    defender.deathDefy.count -= 1;
    defender.hp.val = defender.deathDefy.newHp;
    if (defender.hp.max < defender.hp.val){
      defender.hp.max = defender.hp.val;
    }
  }



//sanitise hp change  -  for defender
    if (defender.hp.val < 0){
      defender.hp.val = 0;
    } else if( defender.hp.val > defender.hp.max){
      defender.hp.val = defender.hp.max;
    }




////////////////////////////////////////////////////////


///////////////////////////////////hp change to attacker    
    let attackerHpChange = 0;

//thorns
    if( defender.thorns.val !== 0 ){
      attackerHpChange -= defender.thorns.val;
    }
//absorb
    if( attacker.absorb.val !== 0 ){
      attackerHpChange += attacker.absorb.val;
    }

//the hp change
    //if  the attack misses do nothing
    if (attackDoesHit){
     attacker.hp.val += attackerHpChange;
    } 

//sanitise hp change a for attacker

    if(attacker.hp.val < 0){
      attacker.hp.val = 0;
    } else if(attacker.hp.val > attacker.hp.max){
      attacker.hp.val = attacker.hp.max;
    }
//////////////////////////////////////////////////////

///////////////////engine's - things that increase/decrease succesfull
///hit of combat
   
   //triggered by attacker,

   ////////

   //triggered by defender

   ///////////anger increment- increases each time attacked
   defender.anger.val += defender.anger.increase; 
   ///////
  },
  win(){
    //reset debuffs
    store.player.debuffs.poison = 0;

    store.fight.state = "WON";
    store.enemy.inExistance = false;
    let article;
    if (/[A-Z]/.test( store.enemy.text[0])){ //capital letters don't starh with --The--
      article = "";//like a name
    } else {
      article = "The "
    }
    log.updateMessage(article + store.enemy.text + " has been defeated.")
    let goldDrop = this.getGoldDrop();
    if (goldDrop > 0){
      store.player.resources.gold += goldDrop;
      log.updateMessage("You loot " + goldDrop + " gold.")
    }
    levelModule.applyXp(store.enemy.name);
    levelModule.unqueEnemyUpdate(store.enemy.name);
  },
  lose(){
    log.updateMessage("You have been knocked out");
    store.fight.state = "LOST";
    store.enemy.inExistance = false;
  },
  startFight(enemyName){
    store.fight.totalTicks = 0; //reset total ticks
    //ste all enemy data
    this.setEnemyData(enemyName);

    //player curses
    store.player.debuffs.poison = store.player.curses.poison;
    //

    store.player.fightPhase = "WAIT"; //possibly needed - rare fring case

    store.fight.state = "ACTIVE";
    //log message
    let article;
    if (/[A-Z]/.test( store.enemy.text[0])){
      article = "";//like a name
    } else {
      article = ["a","e","i","o","u"].includes(store.enemy.text[0]) ? "an ": "a ";
    }
    log.updateMessage("You encounter " + article + store.enemy.text + ".");

    //these are reset to zero
    store.enemy.attackCount = 0;
    store.enemy.defendCount = 0;
    store.player.attackCount = 0;
    store.player.defendCount = 0;

  },
  getGoldDrop(){
    return Math.floor(weightedRandom(store.enemy.goldPool) * store.player.goldGain.val/100);
  },
  setEnemyData(enemyName){
    let enemyData = JSON.parse(JSON.stringify(characterData[enemyName])); //keep data static - might use JSON in future - got love trailing comma's though


    //update enemy porpterties
    const properties = ["hp","name","text","attack","defence","atb","goldPool"];
    for (const property of properties){
      store.enemy[property] = enemyData[property];
    }
    //update enemy poroperties that may not be present in "properties"
    store.enemy.poisonDefence = enemyData.poisonDefence || {val:0};
    store.enemy.thorns = enemyData.thorns || {val:0};
    store.enemy.absorb = enemyData.absorb || {val:0};
    store.enemy.anger = enemyData.anger || {val:0, increase: 0};
    store.enemy.deathDefy = enemyData.deathDefy || {count: 0, newHp: 0};
    store.enemy.poisonAttack = enemyData.poisonAttack || {val:0, chance:0};
    store.enemy.spawn = enemyData.spawn || false;
    store.enemy.strongFourth = enemyData.strongFourth || {val: 0, flat: 0};
    store.enemy.fourthDefence = enemyData.fourthDefence || {val:0, flat: 0};
    store.enemy.firstStrike = enemyData.firstStrike || false;
    store.enemy.toxin = enemyData.toxin || {val: 0};

    store.enemy.hit = enemyData.hit || {val: 100};
    store.enemy.evade = enemyData.evade || {val: 0};
    store.enemy.crit = enemyData.crit || {val: 0};


    //store.enemy.genus = enemyData.genous || "none";

    //set debuffs to initial state
    store.enemy.debuffs.poison = store.enemy.curses.poison;

    store.enemy.hp.max = store.enemy.hp.val;//because this is not not neccesarally in data
    store.enemy.inExistance = true;
    store.enemy.fightPhase = "WAIT";
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
function  binaryRandom(percent){
  return Math.random() < percent/100;
}
function doesAttackLand(hit,evade){
  let chance = hit - evade
  if (chance < 5){
    chance = 5;
  } 

  return Math.random() * 100 < chance
}




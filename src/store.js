import Vue from "vue";




export default Vue.observable({
  interval: null,
  tick: 0,
  tickSpeed: 10,
  player:{
    attackCount: 0,
    defendCount: 0,
    debuffs:{
      poison: 0,
    },
    fightPhase: "WAIT", // ATTACK //
  },
  enemy:{
    inExistance: false,
    name: {val:null},
    text: {val: null},

    attackCount: 0,
    defendCount: 0,

    hp: {val: null, max:100},
    attack: {val: null},
    defence: {val: null},
    fightPhase: "WAIT" ,// ATTACK //
    atb: {val: null, max: null, speed: null},
    thorns: {val: 0},
    absorb: {val: 0},
    anger: {val: 0, increase: 0},
    deathDefy: {count: 0, newHp: 0},
    poisonAttack: {val:0, chance:0},
    toxin: {val: 0},

    evade: {val: 0},


    spawn: false,

    strongForth: {val:0, flat: 0},
    fourthDefence: {val:0, flat: 0},
    firstStrike: false,

    curses: { //like debuffs, but permanant
      poison: 0,
    },
    debuffs:{
      poison: 0
    },


  },
  fight:{
    state: null,//ACTIVE//WON // LOST
    totalTicks: 0,
  },
  exploring:{
    name: null,
    state: "NOT_EXPLORING",//SEARCHING //FIGHTING //RECOVERING
    atb: {val: 0, max: 5000, speed: 50},
  },
  challenge:{
    name: null,
    active: false,
    won: false,
    round: 0,
  },
  log: {
    currentMessage: "",
    messages: ["","","",""],
  },


  artifactsEquipped: 0,
  artifactCapacity: 3,

  currentArea: "intro",
  lastArea: "intro",
  /*
  storyProgress:{
    gateKeeperDefeated: false,
  },
  */


  
});









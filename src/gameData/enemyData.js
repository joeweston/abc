export default {

  error:{
    name: "error",
    text: "error124",
    hp: {val: 100},
    attack: {val: 1},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 100},
    level: 1,
    xp: 1,

    thorns: {val: 1},
    absorb: {val: 1},
    anger: {val: 0, increase: 1},
    deathDefy: {count: 1, newHp: 1},
    poisonAttack: {val:1, chance:100},

    strongFourth: {val: 1, flat: 1},
    firstStrike: true,


    goldPool: [[0,30],[1,20],[2,10]],      
  },
  //base enemies, can just be defeated at level 0
  workerAnt:{  
    name: "workerAnt",
    text: "worker ant",
    hp: {val: 80},
    attack: {val: 5},
    defence: {val: 2},
    atb: {val: 0, max: 5000, speed: 350},
    level: 1,
    xp: 4,

    goldPool: [[0,30],[1,20],[2,10]],
  },
  joblessAnt:{  
    name: "joblessAnt",
    text: "jobless ant",
    hp: {val: 80},
    attack: {val: 4},
    defence: {val: 0},
    anger: {val: 0, increase: 1},
    atb: {val: 0, max: 5000, speed: 350},
    level: 1,
    xp: 6,

    goldPool: [[0,30],[1,20],[3,10]],
  },
  fly:{  
    name: "fly",
    text: "fly",
    hp: {val: 40},
    attack: {val: 3},
    defence: {val: 0},
    evade: {val: 20},
    atb: {val: 0, max: 5000, speed: 600},
    level: 1,
    xp: 6,

    goldPool: [[0,30],[1,20],[3,10]],
  },
  aphid:{  
    name: "aphid",
    text: "aphid",
    hp: {val: 50},
    attack: {val: 12},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 300},
    level: 1,
    xp: 5,

    goldPool: [[0,30],[1,20],[3,10]],
  },
  gnat:{  
    name: "gnat",
    text: "gnat",
    hp: {val: 90},
    attack: {val: 5},
    defence: {val: 1},
    poisonDefence: {val: 1},
    poisonAttack: {val:1, chance:50},
    atb: {val: 0, max: 5000, speed: 200},
    level: 1,
    xp: 8,

    goldPool: [[0,30],[1,20],[5,10]],
  },
  //level 1 rare
  clive:{  
    name: "clive",
    text: "Clive",
    hp: {val: 50},
    attack: {val: 4},
    defence: {val: 0},
    evade: {val: 20},
    atb: {val: 0, max: 5000, speed: 600},
    level: 2,
    xp: 13,

    goldPool: [[2,30],[5,20],[10,10]],
  },
  charles:{  
    name: "charles",
    text: "Charles",
    hp: {val: 61},
    attack: {val: 12},
    defence: {val: 3},
    atb: {val: 0, max: 5000, speed: 296},
    level: 2,
    xp: 17,

    goldPool: [[5,30],[10,20],[20,10]],
  },
  //boss
  gateKeeper:{  
    name: "gateKeeper",
    text: "The Gatekeeper",
    hp: {val: 117},
    attack: {val: 5},
    defence: {val: 10},
    atb: {val: 0, max: 5000, speed: 70},
    level: 1,
    xp: 0,
    spawn: "gateKeeper2",

    goldPool: [[0,50]],
  },
  gateKeeper2:{  
    name: "gateKeeper2",
    text: "The Gatekeeper",
    hp: {val: 100},
    attack: {val: 5},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 64},
    level: 3,
    xp: 30,
    anger: {val: 0, increase: 4},
    deathDefy: {count: 1, newHp: 10},

    goldPool: [[0,50]],
  },

//level 4 + skill enemies
  knightAnt:{  
    name: "knightAnt",
    text: "Ant knight",
    hp: {val: 119},
    attack: {val: 9},
    defence: {val: 5},
    atb: {val: 0, max: 5000, speed: 210},
    level: 4,
    xp: 8,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  antLancer:{  
    name: "antLancer",
    text: "Ant Lancer",
    hp: {val: 99},
    attack: {val: 9},
    strongFourth: {val: 2, flat: 0},
    defence: {val: 3},
    atb: {val: 0, max: 5000, speed: 222},
    level: 4,
    xp: 9,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  messyAnt:{  
    name: "messyAnt",
    text: "Messy Ant",
    hp: {val: 120},
    attack: {val: 1},
    poisonAttack: {val:2, chance:100},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 212},
    level: 4,
    xp: 10,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  fatAnt:{  
    name: "fatAnt",
    text: "Fat Ant",
    hp: {val: 420},
    attack: {val: 12},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 72},
    level: 4,
    xp: 11,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  //level 4 rare
  skateAnt:{  
    name: "skateAnt",
    text: "Ant Skater",
    hp: {val: 120},
    attack: {val: 14},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 512},
    level: 4,
    xp: 10,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  bishopAnt:{  
    name: "bishopAnt",
    text: "Bishop Ant",
    hp: {val: 140},
    attack: {val: 14},
    defence: {val: 5},
    absorb: {
      val: 5,
    },
    atb: {val: 0, max: 5000, speed: 512},
    level: 4,
    xp: 10,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  //level boss
  miasmo:{  
    name: "miasmo",
    text: "miasmo",
    hp: {val: 150},
    attack: {val: 5},
    poisonAttack: {val:3, chance:30},
    defence: {val: 0},
    evade: {val: 30},
    atb: {val: 0, max: 5000, speed: 72},
    level: 4,
    xp: 11,

    goldPool: [[0,50],[10,20],[20,10]],
  },
  miasmoDark:{  
    name: "miasmoDark",
    text: "miasmo",
    hp: {val: 50},
    evade: {val: 50},
    attack: {val: 5},
    defence: {val: 0},
    atb: {val: 0, max: 5000, speed: 72},
    level: 4,
    xp: 11,
    spawn: "miasmo",

    goldPool: [[0,50],[10,20],[20,10]],
  },

}




















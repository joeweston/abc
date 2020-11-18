export default {
  //level may need to be load/save differently if upadate
  level: {
    val: 0,
    toNext: 15,
    toNextMax: 15
  },
  uniqueEnemiesLevel: {
    val: 0,
  },
  hp: {
    val:100,
    max:100,
    base: 100,
    levelModifier: 0,
    uniqueEnemiesLevelModifier: 0,
    extraHeartMultiplier: 0,
    experimentalVaccine: 0,
    pillow: 0,
    plusSign: 0,
  },
  attack: {
    val: 10,
    base: 10,
    levelModifier: 0,
    uniqueEnemiesLevelModifier: 0,
    artifactMultiplier: 0,
    extraBeefMultiplier: 0,
    fangsMultiplier: 0,
    dodgyTicker: 0,
    pillow: 0,
    plusSign: 0,
  },
  defence: {
    val: 0
  },
  poisonDefence:{
    val: 0,
    antigens: 0,
    experimentalVaccine: 0,
  },
  fourthDefence:{
    val: 0,
    flat: 0,
    antiJoust: 0,
  },
  crit:{
    val: 0,
    base: 0,
  },
  hit:{
    val: 100,
    base: 100,
  },
  evade:{
    val: 0,
    base: 0,
  },


  thorns: {
    val: 0
  },
  absorb: {
    val: 0
  },
  anger: {
    val: 0, 
    increase: 0
  },
  deathDefy: {
    count: 0, 
    newHp: 0
  },
  poisonAttack: {
    val:0,
    base: 0,
    artifactMultiplier: 0,
    centepedeForcipules: 0,
    //chance
    chance: 5,
    chanceBase: 5,
    anaphylaxis: 0,
    formicAcid: 0,
  },
  toxin: {
    val: 0,
    base: 0,
    necrosis: 0,
  },

  strongFourth: {
    val: 1, //a multiplier
    flat: 0,
    joust: 0,
    dodgyTicker: 0,
  },
  firstStrike: false,

  goldGain: {
    val: 100,
    base: 100,
    lobsterGreed: 0,
  },
  expGain: {
    val: 100,
    base: 100,
    shrimpWisdom: 0,
  },
  //contain values that are not needed 
  atb: {
    val: 0,
    max: 5000,
    speed: 200,
    longerLegs: 0,
  },
  //keep eye on this since it'2 deep so not 100% reactive
  recovery:{
    val: 5,
    atb: {
      val: 0, 
      max: 5000, 
      speed: 200
    },
  },
  curses: { //like debuffs, but permanant
    poison: 0,
  },

  // rescources
  resources:{
    gold: 0,
    sp: 0, //skill points
    spSpent: 0, //not really recourse but usfull;
  },

  //not needed for load
  /*
  debuffs:{
    poison: 0,
  },
  attackCount: 0,
  fightPhase: "WAIT", // ATTACK //
  */
}
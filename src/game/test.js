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


function getStats(hit, evade){
  let hits = 0;
  let misses = 0;
  for (let i = 0; i < 10000; i++){
    if ( doesAttackLand(hit,evade) ){
      hits++;
    } else {
      misses++;
    }
  }
  console.log(hits, misses, (hits/(hits + misses))*100);
}
console.log(getStats(100, 99))



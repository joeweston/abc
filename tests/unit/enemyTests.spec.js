import enemyData from "@/gameData/enemyData"

for (let eachEnemy in enemyData){
  describe(`${eachEnemy} test`, ()=>{
    it( "has the same name attribute as it's key", ()=>{
      expect(enemyData[eachEnemy].name).toBe(eachEnemy)
    })
    it( "has an integer hp.val", ()=>{
      expect(Number.isInteger(enemyData[eachEnemy].hp.val)).toBe(true);
    })
    it( "has an associtedimage file", ()=>{
      let found;
      try {
      require(`@/assets/enemy/${eachEnemy}.png`)
        found = true;
      }
      catch (err) {
        found = false;
      }
      expect(found).toBe(true);
    })
    it( "has an integer defence.val", ()=>{
      expect(Number.isInteger(enemyData[eachEnemy].defence.val)).toBe(true);
    })
    it( "has an integer 3 atb val, max and speed", ()=>{
      expect(Number.isInteger(enemyData[eachEnemy].atb.val)).toBe(true);
      expect(Number.isInteger(enemyData[eachEnemy].atb.max)).toBe(true);
      expect(Number.isInteger(enemyData[eachEnemy].atb.speed)).toBe(true);
    })
    it( "has an level and xp", ()=>{
      expect(Number.isInteger(enemyData[eachEnemy].level)).toBe(true);
      expect(Number.isInteger(enemyData[eachEnemy].xp)).toBe(true);
    })
    it( "has a gold pool of  nested arrays, the second nest deep haveing a length of 2 and only containing integers", ()=>{
      let goldPool = enemyData[eachEnemy].goldPool;
      expect(goldPool).toEqual(expect.any(Array));
      for( let i = 0; i < goldPool.length; i++){
        expect(goldPool[i]).toEqual(expect.any(Array))
        expect(goldPool[i].length).toBe(2);
        expect(Number.isInteger(goldPool[i][0])).toBe(true);
        expect(Number.isInteger(goldPool[i][1])).toBe(true);
      } 
    })   
  });
}
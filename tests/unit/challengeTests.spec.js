import enemyData from "@/gameData/enemyData";
import challengeData from "@/gameData/challengeData";
for (let eachChallenge in challengeData){
  describe(`${eachChallenge}`, ()=>{
    it( "has the same name attribute as it's key", ()=>{
      expect(challengeData[eachChallenge].name).toBe(eachChallenge)
    })
    it("has a text atttribute", ()=>{
      expect(challengeData[eachChallenge].name).toEqual(expect.any(String));
    })
    it("has an enemies attibute that contains only enemies from enemyData",()=>{
      let enemies = challengeData[eachChallenge].enemies;
      expect(enemies).toEqual(expect.any(Array));
      for (let i = 0; i < enemies.length; i++){
        expect(enemies[i] in enemyData).toBe(true);
      }
    })
  });
}
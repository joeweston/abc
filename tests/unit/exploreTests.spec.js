import enemyData from "@/gameData/enemyData";
import exploreData from "@/gameData/exploreData";
for (let eachExplore in exploreData){
  describe(`${eachExplore}`, ()=>{
    it( "has the same name attribute as it's key", ()=>{
      expect(exploreData[eachExplore].name).toBe(eachExplore)
    })
    it("has a text atttribute", ()=>{
      expect(exploreData[eachExplore].name).toEqual(expect.any(String));
    })
    let event = exploreData[eachExplore].event;
    for (let eachEnemy in event){
      describe(`${eachEnemy}`, ()=>{
        it("Every enemy in the expore is in enemyData", ()=>{
          expect(eachEnemy in enemyData).toBe(true);
        })
        it("has a chance object with a numeric value", ()=>{

          expect(Number.isInteger(event[eachEnemy].chance)).toBe(true);
        })
        
  
      })
    }
  });
}
import skills from "@/game/skills";
import store from "@/store";
import mutations from "@/mutations";
import playerBaseStats from "@/gameData/playerBaseStats";
const orginalPlayerStats = JSON.parse(JSON.stringify(playerBaseStats))

it("the test suite works", ()=>{
  mutations.setupStore();
})
for ( let eachSkill in skills){
  describe(`${eachSkill} test`,()=>{
    let skill = skills[eachSkill];     
    it( "has the same name attribute as it's key", ()=>{
      expect(skill.name).toBe(eachSkill)
    }),
    it( "can be auired getSkill() then reset), leaving the player with original stats", ()=>{     
      mutations.getSkill(eachSkill);
      mutations.resetSkills();
      for(let eachKey in orginalPlayerStats){
        expect(store.player[eachKey]).toEqual(orginalPlayerStats[eachKey])
      }
    })
  });
}

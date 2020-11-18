import artifacts from "@/game/artifacts";
import store from "@/store";
import mutations from "@/mutations";
import playerBaseStats from "@/gameData/playerBaseStats";
const orginalPlayerStats = JSON.parse(JSON.stringify(playerBaseStats))

it("the test suite works", ()=>{
  mutations.setupStore();
})
for ( let eachArtifact in artifacts){
  describe(`${eachArtifact} test`,()=>{
    let artifact = artifacts[eachArtifact];     
    it( "has the same name attribute as it's key", ()=>{
      expect(artifact.name).toBe(eachArtifact)
    }),
    it( "can be equipped() and unequipped(), leaving the player with original stats", ()=>{     
      mutations.equipArtifact(eachArtifact);
      mutations.unequipArtifact(eachArtifact);
      expect(store.player.hp).toEqual(orginalPlayerStats.hp);
      for(let eachKey in orginalPlayerStats){
        expect(store.player[eachKey]).toEqual(orginalPlayerStats[eachKey])
      }
    })
  });
}

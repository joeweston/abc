<template>
  <div id="artifacts">
    <div id="artifact-icons">
      <div class="icon"
      :style="getArtifactInfo(artifactName).css"
      @click="selectArtifact(artifactName)"
      :data-selected="artifactName === selectedArtifact"
      v-for="(artifact, artifactName) in ownedArtifacts" :key="artifactName">
      </div>
    </div><!--end artifact icons -->
    <div id="artifact-description-panel">
      <h4>{{getSelectedArtifactInfo.text}}</h4>
      <p>{{getSelectedArtifactInfo.desc}}</p>
      <button
        v-if="!getSelectedArtifactInfo.equipped"
       @click="equipArtifact(selectedArtifact)">Equip</button>
      <button
        v-else
       @click="unequipArtifact(selectedArtifact)">Unequip</button>

    </div><!-- end artifact dec panel -->
  </div>
</template>

<script>
import store from "../store";
import mutations from "../mutations";
import getters from "../getters"
import artifacts from "../game/artifacts"
export default {
  data(){
    return {
      selectedArtifact: "dodgyTicker",
    }
  },
  computed:{
    ownedArtifacts(){
      const artifactNames = Object.keys(store.artifacts);
      let filterdArtifacts = {};
      for (const eachName of artifactNames){
        if (store.artifacts[eachName].owned === true  ){
          filterdArtifacts[eachName] = JSON.parse(JSON.stringify(store.artifacts[eachName]));
          filterdArtifacts[eachName] = {...filterdArtifacts[eachName], text: artifacts[eachName].text}
          
        }
      }
      return filterdArtifacts;
    },
    getSelectedArtifactInfo(){
      return getters.getArtifactInfo(this.selectedArtifact);
    },
  },
  methods:{
    selectArtifact(artifactName){
      this.selectedArtifact = artifactName;
    },
    getArtifactInfo(artifactName){
      return getters.getArtifactInfo(artifactName);
    },
    equipArtifact: mutations.equipArtifact,
    unequipArtifact: mutations.unequipArtifact,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#artifacts{
  outline: 2px solid black;
  width: 700px;
  min-height: 500px;
  margin-left: 20px;
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
}
#artifact-icons{
  width: 360px;
  min-height: 450px;
  display: flex;
  justify-content: space-around;
  .icon{
    display: block;
    height: 64px;
    width: 64px;
    content: "";
    outline: 4px solid black;
  }
  [data-selected=true]{
    box-shadow: 0px 0px 0px 6px rgba(250,250,250,1),0px 0px 0px 8px black;
  }
}
#artifact-description-panel{
  width: 250px;
  outline: 2px solid black;
  height: 450px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  button{
    margin-top: auto;
    border: none;
    outline: 2px solid black;
  }
}











</style>
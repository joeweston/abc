<template>
  <div>
    <map-component></map-component>
    <h4>Cheats</h4>
    <button @click="gainAllArtifacts()">Gain all artifacts</button>
    <button @click="superStrength()">Super Strength</button>


    <h4>Enemy Tests</h4>
    <input v-model="enemyName" placeholder="Enemy Name">
    <button @click="startFight(enemyName)">Fight {{enemyName}}</button>
    <h4>Player Builds</h4>
    <input v-model="playerBuild" placeholder="Player Build">
    <button @click="loadTest(playerBuild)">Test {{playerBuild}}</button>
  </div>
</template>

<script>
import mutations from "../mutations";
import MapComponent from "./MapComponent.vue";
export default {
  data(){
    return {
      enemyName: "",
      playerBuild: "level0",
    }
  },
  components:{
    MapComponent
  },
  methods:{
    superStrength: mutations.superStrength,
    gainAllArtifacts: mutations.gainAllArtifacts,
    startFight: mutations.startFight,
    startExploring: mutations.startExploring,
    startChallenge: mutations.startChallenge,
    loadTest: mutations.loadTest,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
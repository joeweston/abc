<template>
  <div class="map-area">
    <div class="area-text">
      <h4>Event Horizon</h4>
      <div class="text-holder">
        <p>You have reached the end of the world</p>
        <p>There is a telescope you can use to see artifacts in the beyond.</p>
        <p>Each artifact will bestow a blesseng upon you - you may chose to look
        at one artifact at a time for now.</p>
        <p>The are many artifacts to discover - progress further to find them.</p>
      </div>
    </div>
    <img v-show="!artifactsVisible" src="../../assets/areaMaps/eventHorizon.png" usemap="#event-horizon"/>
    <map name="event-horizon">
      <area @click="travel('antLand')"
      shape="rect" coords="627, 234, 688, 270">
      <area @click="toggleArtifacts()"
      shape="rect" coords="480,192, 592, 269">
    </map>
    <artifacts-component v-show="artifactsVisible"></artifacts-component>
    <div class="events" v-show="!artifactsVisible">
      <button @click="toggleArtifacts()">Use Telescope</button>
    </div>
    <div class="events" v-show="artifactsVisible">
      <button @click="toggleArtifacts()">Back</button>
    </div>

  </div>
</template>

<script>
  import mutations from "../../mutations";
  import ArtifactsComponent from "../ArtifactsComponent";
  export default {
    components:{
      ArtifactsComponent,
    },
    data(){
      return {
        artifactsVisible: false,
      }
    },
    methods:{
      travel: mutations.travel,
      toggleArtifacts(){
        this.artifactsVisible = !this.artifactsVisible
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
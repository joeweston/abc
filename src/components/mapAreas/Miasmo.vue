<template>
  <div class="map-area">
    <div class="area-text">
      <h4>Something Blocking Your Path</h4>
      <div class="text-holder">
        <p>A chill run downs your spine, you can see a blur.</p>
        <p>A voice whispers "leave at once!"</p>
        <p>IT'S IN YOUR MIND!!!</p>
      </div>
    </div>

    <div class="dialog" v-show="talking && talkingPhase === 'intro'">
      <p class="them">Leave now, this is my realm. Only those worthy may pass.</p>
    </div>

    <img src="../../assets/areaMaps/black.png" usemap="#ocean"/>
    <map name="ocean">
      <area @click="travel('intro')"
      shape="rect" coords="16, 249, 80, 288">
    </map>
    <div class="events" v-show="!talking && !isFightActive">
      <button class="talk" @click="toggleTalk()">Hello?</button>
      <button @click="startChallenge('miasmo')" class="fight">Start swinging your appendages in a voilent fasion</button>
      <button class="leave" @click="travel('antLand')">Run away</button>
    </div>
    <div class="events" v-show="talking && !isFightActive">
      <button @click="startChallenge('miasmo'); toggleTalk()" class="fight">I'll take you on!</button>
      <button class="leave" @click="toggleTalk">Stop talking to it.</button>
    </div>
     <div v-show="isFightActive" class="events">
        <button @click="escape()" class="leave">Escape</button>
    </div>

  </div>
</template>

<script>
import mutations from "../../mutations";
import getters from "../../getters";
export default {
  data() {
    return {
      talking: false,
      talkingPhase: "intro",
    }
  },
  methods:{
    travel: mutations.travel,
    startChallenge: mutations.startChallenge,
    escape: mutations.escape,
    toggleTalk(){
      this.talking = !this.talking;
      this.talkingPhase = "intro";
    },
    changeTalkinghase(phase){
      this.talkingPhase = phase;
    }
  },
  computed:{
    isFightActive: getters.isFightActive,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
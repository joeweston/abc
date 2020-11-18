<template>
  <div class="map-area">
    <div class="area-text">
      <h4>Ant Land</h4>
      <div class="text-holder">
        <p>Welcome to Ant Land. This is the home of all ants.</p>
        <p>Two ant nest's tower the landscape and a small cave can be seen in the distance.</p>
      </div>
    </div>

      <!--Dialog -->
      <div class="dialog" v-show="talking && talkingPhase === 'intro'">
        <p class="them">"Ants can't talk, I'm not talking, it's all in your head! Go away!"</p>
      </div>
      <div class="dialog" v-show="talking && talkingPhase === 'where'">
        <p class="them">"Left."</p>
      </div>

      <img src="../../assets/areaMaps/antLand.png" usemap="#ant-land"/>
      <map name="ant-land">
        <area @click="travelLeft()"
        shape="rect" coords="87, 329, 150, 378">
        <area @click="travel('intro')"
        shape="rect" coords="548, 307, 633, 369">
        <area @click="travel('skillCave')"
        shape="rect" coords="474, 170, 525, 206">
      </map>
      <div v-show="!isFightActive && !talking" class="events">
        <button class="talk" @click="toggleTalk()">Talk to wandering ant</button>
        <button class="fight" @click="startExploring('antLand')">Kill some ants</button>
        <button class="fight" @click="startChallenge('theGreatAntChallenge')">Kill all ants [reward - 5sp]</button>
      </div>
      <div v-show="talking&&talkingPhase==='intro'" class="events">
        <button class="talk" @click="changeTalkinghase('where')">Where are you going?</button>
        <button class="leave" @click="toggleTalk()">Toodle pip!</button>
      </div>
      <div v-show="talking&&talkingPhase==='where'" class="events">
        <button class="leave" @click="toggleTalk()">Thanks for the usefull info, bye!</button>
      </div>
      <div v-show="isFightActive" class="events">
        <button @click="escape()">Escape</button>
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
    startExploring: mutations.startExploring,
    escape: mutations.escape,
    startChallenge: mutations.startChallenge,
    travelLeft(){
      if (this.miasmoDefeated){
        this.travel("eventHorizon");
      } else {
        this.travel("miasmo")
      }
    },
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
    getStoryProgress: getters.getStoryProgress,
    miasmoDefeated(){
      return getters.getStoryProgress().miasmoDefeated;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
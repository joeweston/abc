<template>
  <div class="map-area">
    <div class="area-text">
      <h4>The Skill Cave</h4>
      <div class="text-holder">
        <p>This is the skill cave - you must enter this cave to aquire skills.</p>
        <p v-if="!gateKeeperDefeated">Unfortunatly, it's closed and a grub holds the key.</p>
        <p v-else>
          The Gatekeeper has been deafeated. The cave is now open!
        </p>
      </div>
    </div>

    <!--Dialog -->
    <div class="dialog" v-show="talking && talkingPhase === 'intro'">
      <p class="them">"Grrrrrr!"</p>
    </div>
   <div class="dialog" v-show="talking && talkingPhase === 'ask'">
      <p class="them">"GRRRRRRRRRRRRR, HOW DARE YOU EVEN THINK ABOUT KEY!"</p>
      <p class="them">"AHHHHHHHHHHHHHH!"</p>
    </div>

    <img v-show="!gateKeeperDefeated"
    src="../../assets/areaMaps/skillCaveClosed.png" usemap="#skillCave"/>
    <img v-show="gateKeeperDefeated"
    src="../../assets/areaMaps/skillCave.png" usemap="#skillCave"
    />
    <map name="skillCave">
      <area @click="travel('antLand')"
      shape="rect" coords="509, 318, 601, 374">
      <area @click="toggleTalk()"
            v-if="!gateKeeperDefeated"
      shape="rect" coords="99, 262, 323, 375">
      <area @click="travel('skillCaveInner')"
            v-if="gateKeeperDefeated"
      shape="rect" coords="135, 110, 401, 303">
    </map>
    <div v-show="!isFightActive && !gateKeeperDefeated && !talking" class="events">
      <button class="talk" @click="toggleTalk()">Talk to the grub</button>
      <button class="leave" @click="travel('antLand')"> Leave</button>
    </div>
    <div v-show="!gateKeeperDefeated && talking && talkingPhase==='intro'" class="events">
      <button class="talk" @click="changeTalkingPhase('ask')">Ask for key</button>
      <button class="fight" @click="startChallenge('gateKeeper');toggleTalk();">Fight for Key</button>
      <button class="leave" @click="toggleTalk()">I'll leave you alone.</button>
    </div>
    <div v-show="talkingPhase==='ask'" class="events">
      <button class="fight" @click="startChallenge('gateKeeper');toggleTalk();">Fight for Key</button>
      <button class="leave" @click="toggleTalk()">...bye?</button>     
    </div>

    <div v-show="!isFightActive && gateKeeperDefeated" class="events">
      <button class="leave" @click="travel('antLand')"> Leave</button>
    </div>

    <div class="events" v-show="isFightActive">
      <button class="leave" v-show="isFightActive" @click="escape()">Escape</button>
    </div>
  </div>
</template>

<script>
import mutations from "../../mutations";
import getters from "../../getters";
import store from "../../store";
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
    changeTalkingPhase(phase){
      this.talkingPhase = phase;
    }
  },
  computed:{
    isFightActive: getters.isFightActive,
    gateKeeperDefeated(){
      return store.storyProgress.gateKeeperDefeated;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
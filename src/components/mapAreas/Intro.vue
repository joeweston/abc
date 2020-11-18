<template>
  <div class="map-area">
    <div class="area-text">
      <h4>Belljaro</h4>
      <div class="text-holder">
        <p>Welocome to Belljaro</p>
         <p>The Land of bugs, ants, spiders and other arthropods.</p>
       </div>
    </div>


    <!--Dialog -->
    <div class="dialog" v-show="talking && talkingPhase === 'intro'">
      <p class="them">"Hello, welcome to Beljaro"</p>
      <p class="them">"You have one quest, fight many, get stronger, use that strength to take on bigger foes and repeat!"</p>
      <p class="them">Any questions?</p>
      <p class="you">"Um..."</p>
    </div>
    <div class="dialog" v-show="talking && talkingPhase === 'where'">
      <p class="you">"Um...Where do I start?"</p>
      <p class="them">"...Fight the ants here, level up to become stronger. Defeat as many different enemies as possible to get stronger. Then gain access to the skill cave.</p>
      <p>"Both your level-level and unique-enemy-level will contribute toward your stats."</p>
      <p>"Don't foget to click the signs"</p>
    </div>
    <div class="dialog" v-show="talking && talkingPhase === 'why'">
      <p class="you">"Um...Why are you hanging"</p>
      <p class="them">"I'm spider lunch, Miasmo the psycic spider put me here."</p>
      <p class="them">"She/he is blocking the path to the west. I'd leave her alone for now"</p>
    </div>


    <img src="../../assets/areaMaps/intro.png" usemap="#intro"/>
    <map name="intro">
      <area @click="travel('antLand')"
      shape="rect" coords="29, 224, 95, 262">
      <area @click="travel('ocean')"
      shape="rect" coords="600, 195, 684, 233">
    </map>


    <div class="events" v-show="!isFightActive && !talking">
      <button class="talk" @click="toggleTalk()">Talk to hanging ant</button>
      <button class="fight" @click="startExploring('intro')">Hunt "us" (in this area)</button>
    </div>
    <div class="events" v-show="isFightActive">
      <button class="leave" v-show="isFightActive" @click="escape()">Escape</button>
    </div>
    <div class="events" v-show="talking">
      <button class="talk" v-show="talkingPhase!=='where'" @click="changeTalkinghase('where')">Where do I start</button>
      <button class="talk" v-show="talkingPhase!=='why'" @click="changeTalkinghase('why')">Why are you hanging?</button>
      <button class="leave" @click="toggleTalk()">Bye</button>
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
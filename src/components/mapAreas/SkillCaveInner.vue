<template>
  <div class="map-area">
    <div v-show="!skillTreeVisible">
    <div class="area-text">
      <h4>Inside the Cave</h4>
      <div class="text-holder">
        <p>You can see runic carvings on the wall, perhaps you could use these to help you with your skills.</p>
        <p>The ants have decided to colonise this cave now thats it's open.</p>

      </div>
    </div>

    <div class="dialog" v-show="talking && talkingPhase === 'intro'">
      <p class="them">"Hello, this is our cave now. Now that that diabetic grub has demised."</p>
      <p class="them">"These runes are for you, you can use your skill points here."</p>
    </div>

    <div class="dialog" v-show="talking && talkingPhase === 'ask'">
      <p class="them">"You can get them from leveling up, fighting new enemies and completing challenges"</p>
      <p class="them">"You should know this by now."</p>
    </div>

    <img src="../../assets/areaMaps/skillCaveInner.png" usemap="#eventHorizon"/>
    <map name="eventHorizon">
      <area @click="travel('antLand')"
      shape="rect" coords="629, 234, 688, 255">
    </map>
    </div>
    <skill-tree-component v-show="skillTreeVisible"></skill-tree-component>
    <div class="events" v-show="!skillTreeVisible && !talking">
      <button class="important" @click="toggleSkillTree()">
        Use Skill Tree
      </button>
      <button class="talk" @click="toggleTalk()">Talk to the ants</button>
      <button class="leave" @click="travel('skillCave')">
        Leave Cave
      </button>
    </div>
    <div class="events" v-show="talking && talkingPhase==='intro'">
      <button class="talk" @click="changeTalkingPhase('ask')">Where can I get Skill Points</button>
      <button class="leave" @click="toggleTalk()">Stop talking to the ants</button>
    </div>

    <div class="events" v-show="talking && talkingPhase==='ask'">
      <button class="leave" @click="toggleTalk()">Stop talking to the ants</button>
    </div>

    <div class="events" v-show="skillTreeVisible">
      <button class="leave" @click="toggleSkillTree()">
        Close Skill Tree
      </button>
      <button class="danger" @click="resetSkills()">
        Reset Skills
      </button>
    </div>

  </div>
</template>

<script>
  import mutations from "../../mutations";
  import SkillTreeComponent from '../SkillTreeComponent.vue';
  export default {
    data(){
      return {
        skillTreeVisible: false,
        talking: false,
        talkingPhase: "intro",
      }
    },
    components:{
      SkillTreeComponent
    },
    methods:{
      travel: mutations.travel,
      resetSkills:   mutations.resetSkills,
      toggleSkillTree(){
        this.skillTreeVisible = !this.skillTreeVisible;
      },
      toggleTalk(){
        this.talking = !this.talking;
        this.talkingPhase = "intro";
      },
      changeTalkingPhase(phase){
        this.talkingPhase = phase;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
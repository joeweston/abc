<template>
  <div id="app">
    <status-component></status-component>
    <div id="main">
      <map-component v-if="currentMenu==='MAP'"></map-component>
      
      <log-component></log-component>

      <!-- testing only -->
      <template v-if="true">
        <div id="main-nav">
          <button @click="save()">Save</button>
          <button @click="changeMenu('SKILL_TREE')" :disabled="currentMenu==='SKILL_TREE'"
          :data-active="currentMenu==='SKILL_TREE'"
          >Skills</button>
          <button @click="changeMenu('ADVENTURE')" :disabled="currentMenu==='ADVENTURE'"
          :data-active="currentMenu==='ADVENTURE'"
          >Adventure</button>
          <button @click="changeMenu('DEV_DUMP')" :disabled="currentMenu==='DEV_DUMP'"
          :data-active="currentMenu==='DEV_DUMP'"
          >Dev dump</button>
          <button @click="changeMenu('ARTIFACTS')" :disabled="currentMenu==='ARTIFACTS'"
          :data-active="currentMenu==='ARTIFACTS'"
          >Artifacts</button>
          <button @click="changeMenu('MAP')" :disabled="currentMenu==='MAP'"
          :data-active="currentMenu==='MAP'"
          >Map</button>
        </div>

        <template v-if="currentMenu==='ADVENTURE'">
          <button @click="startExploring('fields')">explore fields</button>
          <button @click="startChallenge('goblinDen')">Goblins den</button>
        </template>

        <dev-component v-if="currentMenu==='DEV_DUMP'"></dev-component>


        <artifacts-component v-if="currentMenu==='ARTIFACTS'"></artifacts-component>
        <skill-tree-component v-if="currentMenu==='SKILL_TREE'"></skill-tree-component>

      </template>
    </div><!-- end main-->

  </div>
</template>

<script>
  import store from "./store";
  import mutations from "./mutations";
  import getters from "./getters";

  import LogComponent from './components/LogComponent.vue';
  import ArtifactsComponent from './components/ArtifactsComponent.vue';

  import DevComponent from './components/DevComponent.vue';
  import MapComponent from './components/MapComponent.vue';
  import StatusComponent from './components/StatusComponent.vue';
  import SkillTreeComponent from './components/SkillTreeComponent.vue';

  export default {
    name: 'App',
    components: {
     LogComponent, ArtifactsComponent, DevComponent, MapComponent,
     StatusComponent, SkillTreeComponent
   },
   beforeMount(){
    mutations.setupStore();
    mutations.initialiseTick();
  },
  data() {
    return {
      currentMenu: "MAP",// DEV_DUMP
    }
  },
  computed: {
    player(){
      return store.player;
    },
    enemy(){
      return store.enemy;
    },
    exploring(){
      return store.exploring;
    },
    log(){
      return store.log;
    },
    gold(){
      return store.gold;
    },
    test: getters.test,
    isFightActive: getters.isFightActive,
  },
  methods: {
    changeMenu(name){
      this.currentMenu = name;
    },
    superStrength: mutations.superStrength,
    gainAllArtifacts: mutations.gainAllArtifacts,
    startFight: mutations.startFight,
    startExploring: mutations.startExploring,
    startChallenge: mutations.startChallenge,
    escape: mutations.escape,
    save: mutations.save,
  },
}
</script>

<style lang="scss">
@import './assets/reset';
html {
  box-sizing: border-box;
  margin-left: calc(100vw - 100%);
}
*, *:before, *:after {
  box-sizing: inherit;
}
html { overflow-y: scroll; }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
  width: 1060px;
  display: flex;
  #main{
    width: 740px;
  }
  #status-component{
    width: 160px;
    margin-top: 20px;
  }
}
#main-nav{
  border-top: 2px solid black;
  margin-bottom: 10px;
  button{
    border-top: none;
    border-right: none;
    &:last-child{
      border-right: 2px solid black;
    }
  }
}

/*************************
 all <normal> buttons have this by defaut, deal with  removving borders manally
 **************************/
 button{
  background-color: lightgrey;
  font-size: 16px;
  line-height: 30px;
  border: 2px solid black;
  padding: 0 15px;
  &:focus{
    outline: none;
  }
  &:hover:enabled{
    cursor: pointer;
    text-decoration: underline;
  }
  &:disabled{
    color: grey;
  }
  &[data-active=true]{
    background-color: black;
    color: white;
  }
}
h2{
  font-size: 25px;
  line-height: 45px;
  font-weight: bold;
}
h4{
  line-height: 30px;
  font-size: 20px;
}
p{ //defaut
  font-size: 16px;
  //padding: 0 15px;
}





</style>

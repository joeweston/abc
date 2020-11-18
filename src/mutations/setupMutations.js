import Vue from "vue";
import store from "../store";
import artifacts from "../game/artifacts";
import skills from "../game/skills";
import playerBaseStats from "../gameData/playerBaseStats.js";
import storyBaseData from "../gameData/storyBaseData.js";
import enemyData from "../gameData/enemyData";

export default {
  setupStore(){
    load();
  }
}
function populateArtifacts(){
  let artifactList = {};
  
  for (let eachKey in artifacts){
    artifactList[eachKey] = { owned: false, equipped: false}
  }
  Vue.set(store, "artifacts", artifactList);
  //update this for loading;
}
function populateSkills(){
  let skillList = {};
  
  for (let eachKey in skills){
    skillList[eachKey] = 0;
  }
  Vue.set(store, "skills", skillList);
  //update this for loading;
}
function load(){
  let save = localStorage.getItem('save');
  if (save){
    let parsedSave = JSON.parse(save);
    Object.keys(parsedSave.player).forEach(function(eachKey){
      Vue.set(store.player, eachKey, parsedSave.player[eachKey]);
    });
    Vue.set(store, "skills", parsedSave.skills);
    Vue.set(store, "storyProgress", parsedSave.storyProgress);
    Vue.set(store, "artifacts", parsedSave.artifacts);
    Vue.set(store, "enemiesKilledList", parsedSave.enemiesKilledList)
  }else{
    populateBaseData()
  }
}
function populateBaseData(){
  for (let eachKey in playerBaseStats){
    Vue.set(store.player, eachKey, playerBaseStats[eachKey]);
    
  }
  populateSkills();
  populateArtifacts();
  populateEnemyKills();
  Vue.set(store, "storyProgress", storyBaseData);
}
function populateEnemyKills(){
  let enemiesKilledList = {}
  for (let eachKey in enemyData){
    enemiesKilledList[eachKey] = 0; 
  }
  Vue.set(store, "enemiesKilledList", enemiesKilledList);
}










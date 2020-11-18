import skills from "./skills";
import store from "../store";
export default {
  getSkillPrice(skillName){
    return skills[skillName].cost * (1 + store.skills[skillName]);
  },
  canAfford(skillName){
    return store.player.resources.sp >= this.getSkillPrice(skillName);
  },
  hasPrerequisites(skillName){
    let prerequisites = skills[skillName].prerequisites;

    if (prerequisites === false){
      return true;
    }
    for (let prerequisite of prerequisites){
      if(store.skills[prerequisite] === 0){
        return false;
      }
    }
    return true;
  },
  isMaxed(skillName){
    return store.skills[skillName] === skills[skillName].max;
  },
  canBuy(skillName){
    return this.canAfford(skillName) && this.hasPrerequisites(skillName) && !this.isMaxed(skillName);
  },
  getSkill(skillName){
    let cost = this.getSkillPrice(skillName);
    store.player.resources.sp -= cost;
    store.player.resources.spSpent += cost;
    store.skills[skillName] += 1;
    skills[skillName].aquire();
  },
  resetSkills(){
    let resources = store.player.resources;
    [resources.sp, resources.spSpent] = [resources.spSpent + resources.sp, 0];
    for (let eachKey in store.skills){
      store.skills[eachKey] = 0;
      skills[eachKey].remove();
    }
  }
}
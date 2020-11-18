import store from "./store";

import skills from "./game/skills";
import skillTree from "./game/skillTree";
import artifacts from "./game/artifacts";

export default {

  test(){
    return "true"
  },
  isFightActive(){
    return store.challenge.active === true || store.exploring.state !== "NOT_EXPLORING" || store.fight.state === "ACTIVE"
  },
  getSkillInfo(skillName){
    let info = skills[skillName]
    return {
      text: info.text,
      level: store.skills[skillName],
      desc: info.desc,
      cost: skillTree.getSkillPrice(skillName),
      prerequisite: info.prerequisite,
      canAfford: skillTree.canAfford(skillName),
      hasPrerequisites: skillTree.hasPrerequisites(skillName),
      max: info.max,
      isMaxed: skillTree.isMaxed(skillName),
      canBuy: skillTree.canBuy(skillName),
    }
  },
  getSkillCss(){
    let css = {};

    for (let eachKey in store.skills){
      let info = this.getSkillInfo(eachKey);
      let backgroundColor;
      if (info.level === 0){       
        backgroundColor =  "white"
      }
      else if (info.isMaxed === true){
        backgroundColor =  "rgb(210,255,220)";
      }
      else if (info.level > 0){
        backgroundColor =  "rgb(255,255,170)";
      }
      let backgroundImageCss
      try {
        backgroundImageCss = "url(" + require(`@/assets/shopIcons/${eachKey}.png`) + ")" 
      } catch { //if url is non-existant
        backgroundImageCss = "none";
        backgroundColor = "red";
      }   
      css[eachKey] = {
        backgroundImage: backgroundImageCss,
        backgroundColor: backgroundColor
      }
    }
    return css;
  },
  getStoryProgress(){
    return store.storyProgress;
  },
  getArtifactInfo(artifactName){
    let artifact = artifacts[artifactName]
    return {
      name: artifact.name,
      text: artifact.text,
      desc: artifact.desc,
      owned: store.artifacts[artifactName].owned,
      equipped: store.artifacts[artifactName].equipped,
      css: getArtifactCss(artifactName),
    }
  },

}

function  getArtifactCss(artifactName){
  let backgroundColor;
  if (store.artifacts[artifactName].equipped){       
    backgroundColor =  "rgb(210,255,220)";
  }
  else {
    backgroundColor =  "white";
  }
  let backgroundImageCss
  try {
    backgroundImageCss = "url(" + require(`@/assets/artifactIcons/${artifactName}.png`) + ")" 
  } catch { //if url is non-existant
    backgroundImageCss = "none";
    backgroundColor = "red";
  }   
  let css = {
    backgroundImage: backgroundImageCss,
    backgroundColor: backgroundColor
  }
  return css;
}
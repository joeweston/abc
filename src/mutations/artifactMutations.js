import artifacts from "../game/artifacts";
import store from "../store";
export default {
  equipArtifact(atifactName){
    store.artifacts[atifactName].equipped = true;
    artifacts[atifactName].equip();
    store.artifactsEquipped++;
  },
  unequipArtifact(atifactName){
    store.artifacts[atifactName].equipped = false;
    artifacts[atifactName].unequip();
    store.artifactsEquipped--;
  },
}
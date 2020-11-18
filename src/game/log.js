import store from "../store";
export default {
  updateMessage(text){
    if (store.log.currentMessage === ""){
      store.log.currentMessage = text;
    } else {
      store.log.currentMessage += " " + text;
    }
  },
  updateMessages(){
    if(store.log.currentMessage !== ""){
      store.log.messages.push(store.log.currentMessage);
      store.log.messages.shift();
      store.log.currentMessage = "";
    }
  }
}

<template>
  <div id="log">
    <h4>Log</h4>
    <p>{{log[0]}}</p>
    <p>{{log[1]}}</p>
    <p>{{log[2]}}</p>
    <p>{{log[3]}}</p>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed:{
    log(){
      return store.log.messages;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#log{
  outline: 2px solid black;
  width: 700px;
  margin: 0 auto;
  height: 100px;
}
</style>
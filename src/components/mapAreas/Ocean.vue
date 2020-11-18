<template>
  <div class="map-area">
    <div class="area-text">
      <h4>Ant Land</h4>
      <div class="text-holder">
        <p>Welcome to Ant Land. This is the home of all ants</p>
        <p>Feel free to explore the 2 anthills (click them), or even the cave.</p>
      </div>
    </div>
      <img src="../../assets/areaMaps/ocean.png" usemap="#ocean"/>
      <map name="ocean">
        <area @click="travel('intro')"
        shape="rect" coords="16, 249, 80, 288">
      </map>
      <div class="events">

      </div>
  </div>
</template>

<script>
import mutations from "../../mutations";
export default {
  methods:{
    travel: mutations.travel,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
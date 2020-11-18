<template>
  <div :class="'shop-item-component ' + levelStat "
    :data-selected="selected"
   @click="selectItem()"
   :style="imageCSS"
   >
  </div>
</template>

<script>


export default {
  props: {
    name: String,
    text: String,
    level: Number,
    isMaxed: Boolean,
    selected: Boolean,
  },
  computed:{
    imageCSS(){
      try {
        return {backgroundImage: "url(" + require(`@/assets/shopIcons/${this.name}.png`) + ")" } 
      } catch { //if url is non-existant
        return {backgroundColor: "red"}
      }     
    },
    levelStat(){
      if (this.level === 0){
        return "not-owned"
      }
      else if (this.isMaxed === true){
        return "maxed"
      }
      else if (this.level > 0){
        return "owned"
      }

      else{
        return "error"
      }
    }
  },
  methods:{
    selectItem() {
      this.$emit('getItemValue', this.name)


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.shop-item-component{
  width: 40px;
  height: 40px;
  //background: url(../assets/shopIcons/extraHeart.png) 0 0;
  background-position: 0 0;
  background-size: contain;
}
.not-owned{
  background-color: white;
}
.owned{

  background-color: rgb(210,255,220);
}
.maxed{

  background-color: rgb(255,255,170);
}

[data-selected=true]{
  outline: 4px solid rgb(230,170,100);
}











</style>
<template>
  <div class="panel userbar">
    <div class="uname">{{uname}}</div>
    <img src="">
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class userbar extends Vue{
  private uname:string = "Marylin"
  mounted(){
    console.log("===usern mount-=")
  }
  created():void {
    console.log("===helloo user bar==")
  }
}
</script>
<style lang="less" scoped>
.panel.userbar{
  >.uname{font-size:18px;}
}
</style>
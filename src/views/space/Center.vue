<template>
  <div class="center">
    <h1>This is an user center page</h1>
    <UserBar></UserBar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserBar from "@/views/space/UserBar.vue";
@Component({
  components: {
    UserBar,
  },
})
export default class Center extends Vue {}
</script>
<style lang="less">
.center{
  >h1{color:black;}
}
</style>
<template>
  <div id="app">
    <PButton>Button</PButton>
     <PNotice closable :msg="['msg 1','msg 2']">top-right</PNotice>
    <!--<PNotice position="left-top" msg="left-top"></PNotice>
    <PNotice position="left-bottom" msg="left-bottom"></PNotice>
    <PNotice position="right-bottom">right-bottom right-bottom 右下方 right-bottom 右下方右下方右下方 right-bottom right-bottom</PNotice>
    <PNotice position="top" msg="top"></PNotice>
    <PNotice position="bottom" msg="bottom"></PNotice> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PButton } from './components/button';
import { PNotice } from './components/notice';

Vue.use(PButton);
@Component({
  components: {
    // PButton,
    PNotice
  },
})
export default class App extends Vue {
  public handleClick() {
    console.log('button clicked');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

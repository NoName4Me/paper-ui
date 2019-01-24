<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PButton>Button</PButton>
    <PButton type="primary" size="large">Button</PButton>
    <PButton size="small" @click="handleClick">Button</PButton>
    <PButton type="primary" disabled>Button</PButton>
    <PButton type="link">Button</PButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PButton } from './components/button';

@Component({
  components: {
    PButton,
  },
})
export default class App extends Vue {
  handleClick() {
    console.log('button clicked')
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

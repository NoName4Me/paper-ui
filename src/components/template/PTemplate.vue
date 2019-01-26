<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class PTemplate extends Vue {
  // `props`
  @Prop({ default: "" }) private type!: string;

  // `computed`
  // get fooo(): string { }

  // `data`
  // foo = this.bar;

  // hooks, like `created`
  // created() {}

  // `methods`, emit an event
  // @Emit

  // normal `methods`
  // foo() {}
}
</script>

<style lang="scss">

</style>


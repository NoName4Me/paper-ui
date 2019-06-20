<template>
  <button class="p-btn"
          :class="[size, type]"
          :disabled="disabled"
          @click="handleClick">
    <i :class="icon"
       v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class PButton extends Vue {
  @Prop({ default: "" }) private type!: string;
  @Prop({ default: "middle" }) private size!: string;
  @Prop({ default: "" }) private icon!: string;
  @Prop({ default: false }) private disabled!: boolean;

  // `methods`, emit an event
  public handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.$emit("click", event);
  }
}
</script>

<style lang="scss">
@import "../../assets/keyframes.scss";
@import "../../assets/basics.scss";
// TODO: button active state style
@function scaleStyle($base, $factor) {
  @if length($base) == 1 {
    @return $base / $factor;
  }
  @if length($base) == 2 {
    @return nth($base, 1) / $factor nth($base, 2) / $factor;
  }
  // @return @each $val in $padding { $val / $factor }
}
.p-btn {
  $root: &;
  $baseFontSize: 12px;
  $padding: 8px 16px;
  
  padding: $padding;
  transition: all 0.2s ease;
  cursor: default;
  box-sizing: border-box;
  font-size: $baseFontSize;
  border: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  // reset default
  &:active,
  &:hover,
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  &.small {
    padding: scaleStyle($padding, 2);
  }
  &.large {
    padding: scaleStyle($padding, 0.8);
    font-size: scaleStyle($baseFontSize, 0.8);
  }
  &.primary {
    border: 1px solid $colorMain;
    //
  }
  &.info {
    border: 1px solid $colorInfo;
  }
  &.success {
    border: 1px solid $colorSuccess;
  }
  &.error {
    border: 1px solid $colorError;
  }
  &.warn {
    border: 1px solid $colorWarn;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
    box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #efefef;
    box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.2);
    &:hover {
      animation: shake 0.4s;
    }
  }
  &.link {
    border: none;
    text-decoration: underline;
    &:hover,
    &:active {
      border: none;
      box-shadow: none;
    }
    &:hover {
      font-weight: 500;
    }
  }
}
</style>


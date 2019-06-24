<template>
  <div class="paper-input-wrapper">
    <input v-if="type !== 'textarea'"
           :value="value"
           @input="handleInput"
           @change="handleChange"
           @blur="handleBlur"
           @focus="handleFocus"
           class="paper-input"
           type="text"
           :placeholder="label ? '' : placeholder">
    <textarea v-else
              @input="handleInput"
              @change="handleChange"
              @blur="handleBlur"
              @focus="handleFocus"
              :rows="rows"
              class="paper-input"
              type="text"
              :placeholder="label ? '' : placeholder"></textarea>
    <label v-if="label"
           class="paper-input-label"
           :class="{settled:value!==''}"
           for="">{{label}}</label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import i18n from "@/i18n";

@Component
export default class PInput extends Vue {
  @Prop({ default: false }) private disabled!: boolean;
  @Prop({ default: "input" }) private type!: boolean;
  @Prop({ default: i18n.input_placeholder }) private placeholder!: string;
  @Prop({ default: "" }) private label!: string;
  @Prop({ default: "" }) private value!: string | number;
  @Prop({default: 2}) private rows!: number

  handleInput(event: Event) {
    if (event.target) {
      this.$emit("input", (event.target as HTMLInputElement).value);
    }
  }
  handleChange(event: Event) {
    this.$emit("change", (event.target as HTMLInputElement).value);
  }

  handleBlur(event: Event) {
    this.$emit("blur", event);
  }

  handleFocus(event: Event) {
    this.$emit("focus", event);
  }
}
</script>

<style lang="scss">
@import "../../assets/basics.scss";

.paper-input-wrapper {
  position: relative;
  display: flex;
  width: 160px;
  .paper-input-label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    color: $colorHint;
    transition: all 0.2s ease;
    font-size: $fsHint;
  }
  .paper-input {
    display: inline-block;
    border-bottom: 1px solid $colorHint;
    padding: 2px 4px;
    width: 100%;
    transition: all .2s ease;
    &:hover {
      border-bottom-color:$colorSecondMain;
    }
    &:focus {
      border-bottom-color:$colorMain;
    }
  }
  .paper-input:focus ~ .paper-input-label,
  .paper-input-label.settled {
    top: -20px;
    transform: none;
    color: $colorSecondMain;
    font-weight: 500;
  }
}
</style>


<template>
  <div class="notice-list-wraper" :class="[position]">
    <transition v-for="content in typeof msg==='string'?[msg]:msg" :key="content" :name="transitionName">
      <div v-if="show"
           class="notice-wraper"
           @mouseenter="clearTimer"
           @mouseleave="startTimer">
        <div class="msg">
          <slot>{{msg}}</slot>
        </div>
        <div class="extension">
          <!-- <Badge>TODO:</Badge> -->
          <i v-if="dismissible"
             @click="handleClose"
             class="close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class PNotice extends Vue {
  // `props`
  @Prop({ type: String, default: "" }) private type!: string;
  @Prop({ type: String, default: "" }) private msg!: string;
  @Prop({ type: Boolean, default: false }) private mask!: boolean; //
  @Prop({ type: Boolean, default: false }) private dismissible!: boolean; // 可关闭
  @Prop({ type: Number, default: 5 }) private duration!: number; // 错误/警告 10s，一般 5s
  @Prop({ type: String, default: "top-right" }) private position!: string; // 位置
  @Prop({ type: Boolean, default: true }) private merge!: boolean; // duration 内重复信息合并

  // `computed`
  get transitionName(): string {
    if (this.position.includes("left")) {
      return "slide-fade-left";
    }
    if (this.position.includes("right")) {
      return "slide-fade-right";
    }
    if (this.position.includes("top")) {
      return "slide-fade-top";
    }
    // if(this.position.includes('botton')) {
    return "slide-fade-bottom";
    // }
  }

  // `data`
  show: boolean = true;

  // hooks, like `created`
  // created() {}

  // `methods`, emit an event
  // @Emit
  handleClose() {
    this.close();
  }

  close() {
    this.show = false;
    // this.$el.remove();
  }

  clearTimer() {}

  startTimer() {}

  // normal `methods`
  // foo() {}
}
</script>

<style lang="scss">
@import "../../assets/keyframes.scss";
@import "../../assets/basics.scss";
@import "../../assets/transitions.scss";

.notice-list-wraper {
  position: fixed;
  @extend .notice-layer;
  // pointer-events: none;

  $yMargin: 20px;
  $xMargin: 10px;
  &.top,
  &.bottom {
    left: 50%;
    transition: translateX(-50%);
    .msg {
      text-align: center;
    }
  }

  &.top {
    top: $yMargin;
  }

  &.bottom {
    bottom: $yMargin;
  }

  &.left-top,
  &.top-left {
    top: $yMargin;
    left: $xMargin;
  }
  &.right-top,
  &.top-right {
    top: $yMargin;
    right: $xMargin;
  }
  &.right-bottom,
  &.bottom-right {
    bottom: $yMargin;
    right: $xMargin;
  }
  &.left-bottom,
  &.bottom-left {
    bottom: $yMargin;
    left: $xMargin;
  }
  .notice-wraper {
    z-index: $zIndexOfNotice;
    box-shadow: $boxShadowOfNotice;
    padding: $fontSizeOfContent;
    font-size: $fontSizeOfContent;
    line-height: 1.4;
    min-width: 100px;
    max-width: 40%;
    border: 1px solid #eee;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    &:hover {
      opacity: 0.8;
    }

    .msg {
      flex: 1 0;
      text-align: left;
    }

    .close {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: no-repeat center/100% url(../../assets/icon-svg/close.svg);
    }
  }
}
</style>


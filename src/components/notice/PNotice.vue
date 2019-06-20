<template>
  <div class="notice-list-wraper"
       :class="[position]">
    <div ref="noticeDom"
         v-for="notice of noticeList"
         :key="notice.id">
      <transition :name="transitionName">
        <div v-if="notice.show"
             class="notice-wraper"
             :class=[notice.type]
             @mouseenter="clearTimer(notice.id)"
             @mouseleave="startTimer(notice.id)">
          <div class="msg">
            <slot>{{notice.msg}}</slot>
          </div>
          <div class="extension">
            <i v-if="notice.dismissible"
               @click="handleClose(notice.id)"
               class="close"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
export interface NoticeProp {
  msg?: string;
  duration?: number;
  type?: string;
  merge?: boolean;
  dismissible?: boolean;
  id: number;
  show: boolean;
}

import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class PNotice extends Vue {
  @Prop() private noticeList: NoticeProp[];
  @Prop({ type: String, default: "top-right" }) private position!: string; // 容器位置

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
    return "slide-fade-bottom";
  }

  timer = {};
  show = true;

  mounted() {
    this.startTimer(this.noticeList[0].id);
  }
  updated() {
    this.noticeList.forEach(notice => {
      if (this.timer[notice.id] === undefined) {
        this.startTimer(notice.id);
      }
    });
  }

  handleClose(id: number) {
    const idx = this.noticeList.findIndex(item => item.id === id);
    if (idx < 0) return;
    this.noticeList[idx].show = false;
  }

  clearTimer(id: number) {
    clearTimeout(this.timer[id]);
    delete this.timer[id];
  }

  startTimer(id: number) {
    const idx = this.noticeList.findIndex(notice => notice.id === id);
    if (idx < 0) return;
    this.$refs.noticeDom[idx].addEventListener("transitionend", () => {
      this.noticeList.splice(idx, 1);
    });

    if (this.noticeList[idx].duration < 0) {
      this.timer[id] = -1;
    } else {
      this.timer[id] = setTimeout(() => {
        this.handleClose(id);
      }, this.noticeList[idx].duration * 1000);
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/keyframes.scss";
@import "../../assets/basics.scss";
@import "../../assets/transitions.scss";

.notice-list-wraper {
  position: fixed;
  max-width: 30%;
  min-width: 100px;
  @extend .notice-layer;

  $yMargin: 20px;
  $xMargin: 10px;
  &.top,
  &.bottom {
    left: 50%;
    transform: translateX(-50%);
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
    position: relative;
    z-index: $zIndexOfNotice;
    box-shadow: $boxShadowOfNotice;
    padding: $fontSizeOfContent;
    font-size: $fontSizeOfContent;
    line-height: 1.4;
    border: 1px solid #eee;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    &:before {
      content: "";
      width: 4px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      background: $colorMain;
    }
    &.success:before {
      background: $colorSuccess;
    }
    &.warn:before {
      background: $colorWarn;
    }
    &.error:before {
      background: $colorError;
    }
    &.info:before {
      background: $colorInfo;
    }
    &:hover {
      opacity: 0.98;
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


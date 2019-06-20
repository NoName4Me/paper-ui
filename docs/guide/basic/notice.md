# 通知(Notice)

## 展示区

<script>
  export default {
    data() {
      return {
        cnt: 0
      }
    },
    methods: {
      handleNotify(position, options) {
        this.$notify({ position, msg: `This is test notification message. 这是一个测试通知消息。${this.cnt ++}`, ...options})
      }
    }
  }
</script>

<div style="margin-top:20px;padding:20px;border:1px solid black;">
<p>不同位置</p>
<PButton @click="handleNotify('top')">top</PButton>
<PButton @click="handleNotify('bottom')">bottom</PButton>
<PButton @click="handleNotify('top-left')">top-left</PButton>
<PButton @click="handleNotify('top-right')">top-right</PButton>
<PButton @click="handleNotify('bottom-right')">bottom-right</PButton>
<PButton @click="handleNotify('bottom-left')">bottom-left</PButton>

<p>可关闭</p>
<PButton @click="handleNotify('right-top', {dismissible:true})">可关闭</PButton>

<p>永久</p>
<PButton @click="handleNotify('right-top', {dismissible:true,duration:-1})">不会自动消失</PButton>

<p>通知类型</p>
<PButton type="primary" @click="handleNotify('right-top')">普通(default)</PButton>
<PButton type="success" @click="handleNotify('right-top', {type:'success'})">success</PButton>
<PButton type="info" @click="handleNotify('right-top', {type:'info'})">info</PButton>
<PButton type="warn" @click="handleNotify('right-top', {type:'warn'})">warn</PButton>
<PButton type="error" @click="handleNotify('right-top', {type:'error'})">error</PButton>
</div>

## 示例代码

```html
<template>
<p>不同位置</p>
<PButton @click="handleNotify('top')">top</PButton>
<PButton @click="handleNotify('bottom')">bottom</PButton>
<PButton @click="handleNotify('top-left')">top-left</PButton>
<PButton @click="handleNotify('top-right')">top-right</PButton>
<PButton @click="handleNotify('bottom-right')">bottom-right</PButton>
<PButton @click="handleNotify('bottom-left')">bottom-left</PButton>

<p>可关闭</p>
<PButton @click="handleNotify('right-top', {dismissible:true})">可关闭</PButton>

<p>永久</p>
<PButton @click="handleNotify('right-top', {dismissible:true,duration:-1})">不会自动消失</PButton>

<p>通知类型</p>
<PButton type="primary" @click="handleNotify('right-top')">普通(default)</PButton>
<PButton type="success" @click="handleNotify('right-top', {type:'success'})">success</PButton>
<PButton type="info" @click="handleNotify('right-top', {type:'info'})">info</PButton>
<PButton type="warn" @click="handleNotify('right-top', {type:'warn'})">warn</PButton>
<PButton type="error" @click="handleNotify('right-top', {type:'error'})">error</PButton>
</template>
<script>
export default {
  data() {
    return {
      cnt: 0
    }
  },
  methods: {
    handleNotify(position, options) {
      this.$notify({ position, msg: `This is test notification message. 这是一个测试通知消息。${this.cnt ++}`, ...options})
    }
  }
}
</script>
```


## 接口

```js
import { PNotice } from 'paper-ui'
Vue.use(PNotice)

this.$notify({
  // 默认值
  position: 'right-top', // 'left-top' 或 'top-left', 'left-bottom', 'right-bottom', 'top', 'bottom'
  type: '', // 可选，'success', 'info', 'warn', 'error'
  msg: '', // 消息内容
  dismissible: false, // 是否可关闭
  duration: 5, // 多少秒后自动消失, 传 -1 表示不会自动消失
  merge: false, // 自动合并相同内容的消息，TODO: 暂未实现
})
```
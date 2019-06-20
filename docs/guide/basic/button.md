# 按钮(Button)

## 展示区

<script>
export default {
  name: 'app',
  methods: {
    handleClick() {
      alert('hi button~')
    }
  }
}
</script>

<div style="margin-top:20px;padding:20px;border:1px solid black;">
<PButton size="small">small</PButton>
<PButton>middle(默认)</PButton>
<PButton size="large">large</PButton>
<PButton type="primary" size="large">primary</PButton>
<PButton @click="handleClick">click</PButton>
<PButton type="primary" disabled>disabled</PButton>
<PButton type="link">link button</PButton>
</div>

## 示例代码

```html
<template>
<div>
  <PButton size="small">small</PButton>
  <PButton>middle(默认)</PButton>
  <PButton size="large">large</PButton>
  <PButton type="primary" size="large">primary</PButton>
  <PButton @click="handleClick">click</PButton>
  <PButton type="primary" disabled>disabled</PButton>
  <PButton type="link">link button</PButton>
</div>
</template>

<script>
import Vue from 'vue'
import { PButton } from 'vue-paper-ui'
Vue.use(PButton)

export default {
  methods: {
    handleClick() {
      alert('hi button~')
    }
  }
}
</script>
```

## 接口

* 属性

|属性|类型|功能|值|举例|
|--|--|--|--|--|
`size`|`string`|大小|`"small"`、`"middle"`(默认)、`"large"`|
`type`|`string`|类型|`"link"` 链接样式的按钮，`"primary"` 主要按钮样式|
`disabled`|`boolean`|是否禁用| 默认 `false`，出现该属性即为`true`| `:disabled="1!==2"`

* 事件

与 vue 里一般的点击事件一样： `@click="handleClick"`。
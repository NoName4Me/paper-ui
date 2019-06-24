# 文本输入(Input)

## 展示区

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
    }
  },
  methods: {
    handleChange(value) {
      this.$notify('new value is: ' + value)
    },
    handleBlur(event) {
      this.$notify('blur')
    },
    handleFocus(event) {
      this.$notify('focus')
    }
  }
}
</script>

<div style="margin-top:20px;padding:40px;border:1px solid black;">
<PInput v-model="value1" label="姓名" @change="handleChange" @blur="handleBlur" @focus="handleFocus"/>
<div style="margin-bottom:20px"></div>
<PInput v-model="value2" rows="4" type="textarea" placeholder="简介"/>
</div>

## 示例代码

```html
<template>
<div>
  <PInput v-model="value1" label="姓名" @change="handleChange" @blur="handleBlur" @focus="handleFocus"/>
</div>
</template>

<script>
import Vue from 'vue'
import { PButton } from 'vue-paper-ui'
Vue.use(PButton)

export default {
  data() {
    return {
      value1: ''
    }
  },
  methods: {
    handleChange(value) {
      this.$notify('new value is: ' + value)
    },
    handleBlur(event) {
      this.$notify('blur')
    },
    handleFocus(event) {
      this.$notify('focus')
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
`type`|`string`|类型| 默认为普通输入框，`"textarea"` 为多行文本|
`label`|`string`|类型| 没有值，替代placeholder，有值显示在输入框左上角 |
`disabled`|`boolean`|是否禁用| 默认 `false`，出现该属性即为`true`| `:disabled="1!==2"`

* 事件

focus / input / blur / change /
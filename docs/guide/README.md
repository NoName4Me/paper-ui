# 组件


## 安装组件

```bash
yarn add vue-paper-ui
```

## 引用某个组件

```vue{2,7,19}
<script>
import { PButton } from 'vue-paper-ui';

export default {
  name: 'app',
  components: {
    PButton
  },
  methods: {
    handleClick() {
      alert('hi~there');
    }
  }
}
</script>

<template>
  <div>
    <PButton @click="handleClick">Button</PButton>
  </div>
</template>

<style>
.p10 {
  padding: 10px;
}
</style>
```

## 结果

<script>
  import { PButton } from '../../src/index';

  export default {
    name: 'app',
    components: {
      PButton
    },
    methods: {
      handleClick() {
        alert('hi~there');
      }
    }
  }
</script>

<template>
  <div class="p10">
    <PButton @click="handleClick">Button</PButton><i> <-- click it</i>
  </div>
</template>

<style>
.p10 {
  padding: 10px;
}
</style>
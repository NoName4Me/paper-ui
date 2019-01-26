# Button



```js
import { PButton } from 'vue-paper-ui'

export default {
  components: {
    PButton
  }
}
```

<script>
  import { PButton } from '$paper-ui/index'
  export default {
    name: 'app',
    components: {
      PButton
    }
  }
</script>

<PButton>Button</PButton>
<PButton type="primary" size="large">Button</PButton>
<PButton size="small" @click="function() {alert('hi')}">Button</PButton>
<PButton type="primary" disabled>Button</PButton>
<PButton type="link">Button</PButton>

对应代码：

```html
<PButton>Button</PButton>
<PButton type="primary" size="large">Button</PButton>
<PButton size="small" @click="console.log('hi')">Button</PButton>
<PButton type="primary" disabled>Button</PButton>
<PButton type="link">Button</PButton>
```
import Vue from 'vue';

export const comps = {}
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components',
  // 是否查询其子目录
  true,
  /\w*\/$/
)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  let componentName = fileName.split('/')[1]
  componentName = 'P' + componentName.charAt(0).toUpperCase() + componentName.slice(1)
  // 全局注册组件
  comps[componentName] = componentConfig.default || componentConfig
  // Vue.use(
  //   componentConfig.default || componentConfig
  // )
})

export default {
  install(vue: typeof Vue, options?: object) {
    if ((this as any).installed) {
      return;
    }
    (this as any).installed = true;
    Object.keys(comps).forEach(c=>{
      vue.use(comps[c])
    })
  },
};

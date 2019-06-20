import PNotice from './PNotice.vue';
import Vue from 'vue';

const Notice = Vue.extend(PNotice)
const cache = new Map<string, PNotice>()
export {
  PNotice
};

let noticeId = 0

// Declare install function executed by Vue.use()
export default {
  install(vue: typeof Vue, options?: any) {
    if ((this as any).installed) {
      return;
    }
    (this as any).installed = true;

    vue.prototype.$notify = (options: any) => {
      switch (options.position) {
        case 'left-top':
        case 'top-left':
          handleNotify('left-top', options)
          break;
        case 'right-top':
        case 'top-right':
          handleNotify('right-top', options)
          break;
        case 'left-bottom':
        case 'bottom-left':
          handleNotify('left-top', options)
          break;
        case 'right-bottom':
        case 'bottom-right':
          handleNotify('right-bottom', options)
          break;
        case 'top':
          handleNotify('top', options)
          break;
        case 'bottom':
          handleNotify('bottom', options)
          break;
        default:
          handleNotify('left-top', options)
      }
    }
  },
};

function handleNotify(position: string, options: any) {

  let notice = cache.get(position)
  if (notice) {
    notice.$props.noticeList.push(_getNotice(options))
  } else {
    const instance = new Notice({ propsData: { position, noticeList: [_getNotice(options)] } })
    instance.$mount()
    cache.set(position, instance)
    document.body.appendChild(instance.$el)
  }
}

function _getNotice(options: any) {
  noticeId++
  delete options.positon
  return { id: noticeId, ...{ duration: 5, dismissble: false, merge: false, show: true }, ...options }
}

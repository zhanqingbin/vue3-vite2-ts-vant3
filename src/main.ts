// 加载createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import vant from '@/plugins/vant'
import '@/utils/rem'
import '@/utils/fastClick'
import './styles/index.scss' // 加载全局样式

// 创建根的实例进行挂载
createApp(App)
  .use(router)
  .use(store, key)
  .use(vant)
  .mount('#app')

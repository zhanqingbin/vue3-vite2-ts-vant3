// 可以使用vite的环境变量 import.meta.env
/// <reference types="vite/client" />

// 定义环境变量的类型
// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // 更多环境变量...
}

// 对.vue文件的类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 对fastclick文件类型声明
declare module 'fastclick' {
  import type FastClickStatic from '@/utils/types/fastClickType'
  const FastClick: FastClickStatic// 改成这行代码
  export = FastClick;
}

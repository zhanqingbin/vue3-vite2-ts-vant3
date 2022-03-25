# vue3-vite2-ts-vant3-rem

移动端企业级模板，使用`Vue3`全家桶搭配`typescript`，以及语法糖`<script setup>`，`vite2`打包编译，`vant3`UI 组件按需引入，`rem`移动端适配，`fastClick`兼容，同时有详细的`ESLint`全套配置，`git hook`和`commitlint`代码提交检测等。可学习实战使用。

[GitHub：vue3-vite2-ts-vant3https://github.com/zhanqingbin/vue3-vite2-ts-vant3](https://github.com/zhanqingbin/vue3-vite2-ts-vant3)
## 编辑器和插件

1. `Vscode`: 前端人必备写码神器
2. `Vetur`: 使用 vue3 开发，给我把这个 vetur 插件禁用奥
3. `Vue Language Features (Volar)`：Vscode 开发 vue3 必备插件，提供语法高亮提示
4. `ESLint`：代码检查以及格式化代码使用

## Vue2 与 Vue3 的区别

可以看一下鄙人之前的一片博客，[Vue3.0 基础总结](https://juejin.cn/post/7024704880388358174?_blank)，`有条件的`顺便给孩子`点个赞`。

## 介绍 vite

> Vite：下一代前端开发与构建工具

- 极速的开发服务器启动
- 轻量快速的热模块重载（HMR）
- 自带优化的构建
- 通用的插件接口
- 完全类型化的 API

`Vite` （法语意为 “迅速”，发音 /vit/）是一种全新的前端构建工具，它极大地改善了前端开发体验。

它主要由两部分组成：

- 一个开发服务器，它基于 原生 `ES` 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。

- 一套构建指令，它使用 `Rollup` 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源。

- Vite 意在提供开箱即用的配置，同时它的 插件 API 和 JavaScript API 带来了高度的`可扩展性`，并有完整的类型支持。

## 创建

```
$ npm init vite@latest
npx: 6 安装成功，用时 3.278 秒
√ Project name: ... vite-project
√ Select a framework: » vue
√ Select a variant: » vue-ts
```

env.d.ts：类型补充声明文件，有需要的类型补充说明的都要添加到这里（之前是分开的，有 shims-vue.d.ts、vite-env.d.ts 等）

## ESlint 配置

安装以及初始化 eslint

```
npm install eslint --save-dev

// 初始化eslint 进行一系列选择 安装一些列包
npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
npx: 40 安装成功，用时 8.762 秒
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard@latest
√ The style guide "standard" requires eslint@^7.12.1. You are currently using eslint@8.11.0.
  Do you want to downgrade? · No / Yes
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0
eslint-plugin-promise@^4.2.1 || ^5.0.0 @typescript-eslint/parser@latest
? Would you like to install them now with npm? » No / Yes

```

然后在 package.json 的 scripts 中新增 lint

```
// package.json

  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview",
    "lint": "eslint ./src/**/*.{js,jsx,vue,ts,tsx} --fix"
  },
```

更新.eslintrc.js 中继承的 plugin，使用 vue3 规则的检测，同时解决`error 'defineProps' is not defined`报错的一个配置

```
// .eslintrc.js

  // 配置前
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],

  // 配置后
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true // 4:1  error  'defineProps' is not defined
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended', // 使用vue3的校验规则
    'standard'
  ],
```

## 配置编辑器 ESLint 代码检测以及格式化代码

- 1、VScode=>文件=>首选项=>设置=>扩展=>ESLint
- 2、`启用` ESLint>Format:Enable
- 3、ESLint:Run 选择`onType`
- 4、文件中有错误提示，鼠标右键=>使用格式化文档=>配置默认格式化程序=>选择 ESLint，.vue 和.ts 文件都需要单独配置才能生效
- 5、`ctrl+shift+f`快捷键就可以根据 eslint 配置格式化代码了

## git commit hook 配置

```
npx mrm@2 lint-staged

// 安装两个包
// "husky": 执行git命令前的钩子
// "lint-staged": 提交前对代码进行lint验证,

// package.json中的scripts
// "prepare": "husky install"  新拿到的项目install之前执行 吧husky钩到git上
husky - Git hooks installed
husky - created .husky/pre-commit
```

配置 package.json 中的 lint-staged

```
  // package.json
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "npm run lint",
      "git add"
    ]
  }
```

## 构建中进行 eslint 检测，vite 插件 vite-plugin-eslint

> 如果要配置.eslintrc.js 的 rules，也需要在 eslintPlugin 也配置一下，不然编译可能还会报错，多一些错误提示终究还是好的

```
npm install vite-plugin-eslint --save-dev

// vite.config.ts
import eslintPlugin from 'vite-plugin-eslint'
...
  plugins: [
    vue(),
    eslintPlugin({
      // 配置项
      'vue/multi-word-component-names': 0,
      'vue/valid-template-root': 0,
      'vue/html-self-closing': 0,
      catch: false // 禁用eslint缓存
    })
  ]
```

> 这样的话，有 eslint 报错会显示在页面上

## 配置 commitlint，统一提交代码 commit 规范

```
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}

# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

npx husky add .husky/commit-msg \" npx --no -- commitlint --edit ' $1 ' \"
```

提交代码 commit 规范如下：

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

## 配置 vue3 模板 ctrl+shift+p ==> sni ==>vue.json

> 将 vue.json 替换成下边 json，创建.vue 文件可直接使用 vue3 快捷模板

```
{
	"Print to console": {
		"prefix": "vue3",
		"body": [
			"<template>",
			"  <div>$0</div>",
			"</template>",
			"",
			"<script lang='ts' setup>",
			"",
			"</script>",
			"",
			"<style lang='scss' scoped></style>",
			"",
		],
		"description": "vue3"
	}
}
```

## 配置 plugin-vue-jsx 插件，可以使用 jsx 写 vue 组件

```
npm i -D @vitejs/plugin-vue-jsx

// vite.config.ts
import vueJsx from '@vitejs/plugin-vue-jsx'
  plugins: [
    ...
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ],
```

## 配置 vue-router

```
npm install vue-router@4

// router->index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```

## 配置 vuex

```
npm install vuex@next --save
```

```
// store->index.ts
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  count:number
  // foo:string
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
```

vuex.d.ts 补充类型声明文件

```
// vuex.d.ts
// eslint-disable-next-line no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // interface State {
  //   count: number
  // }

  // 为 `this.$store` 提供类型声明
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```

大型项目需要配置 vuex 模块化参照：[Vuex 官网：Module](https://vuex.vuejs.org/zh/guide/modules.html)

## vite 中@别名配置

```
// 解决path类型的校验问题
npm i -D @types/node

// vite.config.ts中配置
import path from 'path'
  ...
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }


// tsconfig.json中配置
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
```

## 全局样式配置

```
npm install -D sass
```

- variables.scss 全局变量
- mixin.scss 全局 mixin
- common.scss 全局公共
- transition.scss 全局过度动画样式
- index.scss 统一导出
  全局注入样式

```
// vite.config.ts中配置
  ...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
```

## 封装 axios

```
npm install axios

// 封装一下
import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

// 请求拦截器Do something before request is sent
request.interceptors.request.use(function (config) {
  // 统一设置用户身份
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如token过期无效、服务端异常等
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

// request不支持泛型 包装一下导出
export default <T=any>(config:AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}

// api->user.ts
import request from '@/utils/request'
import { ILoginInfo } from './types/user'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/'
  })
}
```

## 环境变量配置

env.d.ts 中配置

```
// env.d.ts
// 定义环境变量的类型
// eslint-disable-next-line no-unused-vars
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // 更多环境变量...
}
```

## 跨域代理配置

```
// vite.config.ts中配置
  ...
  server: {
    port: 8888,
    proxy: {
      '/api': {
        // 免费的在线REST API
        target: 'http://jsonplaceholder.typicode.com',
        // 把origin修改成目标地址
        // 把localhost:8888 修改成http://jsonplaceholder.typicode.com
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
```

## 配置 Vant3

```
npm i vant

// 安装插件 vite-plugin-style-import
# 通过 npm 安装
npm i vite-plugin-style-import@1.4.1 -D
# 通过 yarn 安装
yarn add vite-plugin-style-import@1.4.1 -D
# 通过 pnpm 安装
pnpm add vite-plugin-style-import@1.4.1 -D
```

安装完成后，在 vite.config.js 文件中配置插件

```
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};
```

按需加载 plugins->vant.ts

```
import { Button, Field } from 'vant'
import { App } from 'vue'
export default {
  install (app:App) {
    app.component(Button.name, Button)
    app.component(Field.name, Field)
  }
}
```

## Rem 布局适配

```
npm install postcss postcss-pxtorem --save-dev
```

utils->rem.ts

```
// rem等比适配配置文件
// 基准大小
const baseSize = 37.5 // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  let fontSize = baseSize * Math.min(scale, 2)
  fontSize = fontSize > 45 ? 45 : fontSize
  document.documentElement.style.fontSize = fontSize + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
export {}
```

配置 postcss.config.js

```
module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue: 37.5, // Vant 官方根字体大小是 37.5
      propList: ['*'],
      // propList: ['*','!font-size'],
      selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
}

```

## 配置 fastClick
```
npm install fastclick -S
```
env.d.ts进行文件类型声明
```
// env.d.ts
declare module 'fastclick' {
  import type FastClickStatic from '@/utils/types/fastClickType'
  const FastClick: FastClickStatic// 改成这行代码
  export = FastClick;
}
```
这个ts文件的话类型引用还是有问题，所有换成了js文件

## 其他

[Vue 官网：ts 与组合式 API 一起使用](https://v3.cn.vuejs.org/guide/typescript-support.html#与组合式-api-一起使用)

[Vue 官网：语法糖 script setup](https://v3.cn.vuejs.org/api/sfc-script-setup.html#基本语法)

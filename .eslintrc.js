module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true // 4:1  error  'defineProps' is not defined
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended', // 使用vue3的校验规则
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/valid-template-root': 0,
    'vue/html-self-closing': 0
  },
  // 统一配置ts不校验文件
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: {
        camelcase: 'off'
      }
    }
  ]
}

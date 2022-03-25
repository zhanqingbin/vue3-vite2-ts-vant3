<template>
  <div>{{ $store.state.count }}</div>
  <van-button
    type="primary"
    @click="open"
  >
    主要按钮
  </van-button>
  <van-field
    v-model="value"
    label="文本"
    placeholder="请输入用户名"
  />
</template>

<script lang='ts' setup>
// import { useStore } from 'vuex'
// import { key } from '../../store'
// const store = useStore(key)
import { ref } from 'vue'

import { useStore } from '../../store'
import User from '@/api/user'
console.log(User)
const value = ref('')
const store = useStore()
console.log(store.state.count)
const open = () => {
  alert(store.state.count)
}

</script>

<style lang='scss' scoped>
div{
  color: $red;
}
</style>

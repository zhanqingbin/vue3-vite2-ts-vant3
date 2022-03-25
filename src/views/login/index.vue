<template>
  login
</template>

<script lang='ts' setup>
import { getLoginInfo } from '@/api/user'
import type { ILoginInfo } from '@/api/types/user'
import { onMounted, ref } from 'vue'
const list = ref<ILoginInfo['skill']>([])
onMounted(() => {
  getLoginInfo().then(({ skill, name }) => {
    // res：axios包装的响应对象，data、status
    // res.data：后台真是的数据
    console.log(skill, name)
    list.value = skill
  })
})
</script>

<style lang='scss' scoped></style>

<template>
  <div>
    角色详情
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
console.log('props', props)
</script>

<style lang="scss" scoped>

</style>

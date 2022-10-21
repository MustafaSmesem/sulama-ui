<template>
  <div class="bg-skin-surface rounded border border-skin-base p-5 m-1">
    <h1 class="font-bold text-skin-base text-center text-3xl">{{ props.lang }}</h1>
    <h3 class="text-skin-surface-primary text-center text-l">Try one of, Light, Dark and neon</h3>
    <h5 class="text-skin-surface-secondary text-center text-m">Try one of, Light, Dark and neon</h5>
    <div class="actions flex justify-center">
      <button class="btn-primary">Get Start</button>
      <button class="btn-primary-out ml-5">Why not?</button>
    </div>
    <div class="actions flex justify-center">
      <button class="btn-secondary">Get Start</button>
      <button class="btn-secondary-out ml-5">Why not?</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  lang:{
    type: String,
    default: 'Some programing language'
  }
})
</script>

<style scoped>
.actions {
  margin-block: 15px;
}
</style>

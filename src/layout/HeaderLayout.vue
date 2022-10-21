<template>
  <div class="flex p-5">
    <h3 class="text-xs font-bold text-skin-surface-primary uppercase">{{ props.currentPage }}</h3>
  </div>
</template>

<script setup>

import {defineProps} from "vue";
const props = defineProps({
  currentPage: {
    type: String,
    default: 'Dashboard'
  }
})
</script>

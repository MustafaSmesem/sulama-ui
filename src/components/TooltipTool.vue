<template>
  <div class="bg-skin-primary text-skin-primary ml-32 z-50 absolute top-28 left-28" :class="`${!props.show && 'hidden'}`">
    <p>Test</p>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  show: {
    default: false
  }
});
</script>

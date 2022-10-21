<template>
  <div>
    <div class="devices-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <device-card v-for="(device, index) in devices" :key="index" :device="device"/>
    </div>
  </div>

</template>

<script setup>
import DeviceCard from '@/components/DeviceCard'
import store from "@/store"; // @ is an alias to /src
const devices = store.state.devices;
</script>

<style scoped>

</style>

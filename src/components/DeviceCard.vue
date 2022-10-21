<template>
  <a :href="`/devices/${props.device.id}`"
     class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
      {{ props.device.title }}
      <svg :class="`${connectionState ? 'text-skin-active': 'text-skin-inactive'}`" class="w-8 h-8" fill="currentColor"
           viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7H7v6h6V7z"></path>
        <path fill-rule="evenodd"
              d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
              clip-rule="evenodd"></path>
      </svg>
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">{{ props.device.description }}</p>
    <br>
    <div class="grid grid-cols-1 gap-y-3">
      <p>
        <strong>Role:</strong> {{ props.device.roleNumber }}
      </p>
      <div class="grid grid-cols-4 gap-y-5 gap-x-1">
        <div v-for="(role, index) in props.device.roles" :key="index" class="flex flex-col justify-center items-center">
          <svg :class="getRoleColor(role.state)" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"></path>
          </svg>
          <p class="font-bold text-xs">{{ role.name }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
import {RoleState} from "@/data/enums/role-state";
import {defineProps, ref} from 'vue'

const props = defineProps({
  device: {}
})

//todo replace Math.random() >= 0.1 with actual api request
const connectionState = ref(Math.random() >= 0.1);
setInterval(() => {
  if (!document.hidden) {
    connectionState.value = Math.random() >= 0.1;
  }
}, 10 * 1000)
const getRoleColor = (state) => {
  if (!connectionState.value)
    return 'text-skin-unknown';

  switch (state) {
    case RoleState.ERROR:
      return 'text-skin-error';
    case RoleState.INACTIVE:
      return 'text-skin-inactive';
    case RoleState.ACTIVE:
      return 'text-skin-active';
    case RoleState.STOPPING:
      return 'text-skin-stopping';
    case RoleState.STARTING:
      return 'text-skin-starting';
    default:
      return 'text-skin-unknown';
  }
}
</script>

<style scoped>

</style>

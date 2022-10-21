<template>
  <aside class="flex flex-col bg-skin-primary text-skin-primary px-3 pt-6 pb-2 text-s fixed md:static min-h-full"
         :class="`${isExpanded && 'expanded'}`">
    <div class="flex items-center mb-5" :class="`${isExpanded ? 'flex-row' : 'flex-col'}`">
      <router-link to="/" class="flex flex-1 items-center px-2">
        <img v-if="isExpanded" class="w-10" src="../assets/imgs/logo.png" alt="vue logo">
        <p v-show="isExpanded" class="ml-2 uppercase font-bold text-skin-primary text-sm">sulama</p>
      </router-link>
      <div class="flex justify-end p-1 sidebar-item cursor-pointer" @click="toggleMenu">
        <svg v-if="!isExpanded" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
        </svg>
        <svg v-if="isExpanded" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    <div class="flex-col">
      <div class="h-2"></div>
      <base-tooltip class="sidebar-item px-1 py-2" :class="`${isExpanded ? 'px-2' : 'justify-center'}`" content="dashboard" :show="!isExpanded">
        <router-link to="/" class="flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          </svg>
          <p v-if="isExpanded" class="font-bold text-sm ml-3">Dashboard</p>
        </router-link>
      </base-tooltip>
      <base-tooltip class="sidebar-item px-1 py-2" :class="`${isExpanded ? 'px-2' : 'justify-center'}`" content="devices" :show="!isExpanded">
        <router-link to="/devices" class="flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 7H7v6h6V7z"></path>
            <path fill-rule="evenodd"
                  d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  clip-rule="evenodd"></path>
          </svg>
          <p v-if="isExpanded" class="font-bold text-sm ml-3">Devices</p>
        </router-link>
      </base-tooltip>

      <base-tooltip class="sidebar-item px-1 py-2" :class="`${isExpanded ? 'px-2' : 'justify-center'}`" content="users" :show="!isExpanded">
        <router-link to="/users" class="flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
          </svg>
          <p v-if="isExpanded" class="font-bold text-sm ml-3">Users</p>
        </router-link>
      </base-tooltip>
      <base-tooltip class="sidebar-item px-1 py-2" :class="`${isExpanded ? 'px-2' : 'justify-center'}`" content="about" :show="!isExpanded">
        <router-link to="/about" class="flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"></path>
          </svg>
          <p v-if="isExpanded" class="font-bold text-sm ml-3">About</p>
        </router-link>
      </base-tooltip>
      <base-tooltip class="sidebar-item px-1 py-2" :class="`${isExpanded ? 'px-2' : 'justify-center'}`" content="settings" :show="!isExpanded">
        <router-link to="/settings" class="flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"></path>
          </svg>
          <p v-if="isExpanded" class="font-bold text-sm ml-3">Settings</p>
        </router-link>
      </base-tooltip>
    </div>

    <div class="flex-1"></div>
    <div class="flex" :class="`${isExpanded && 'bg-skin-surface rounded-xl'}`">
      <base-tooltip class="sidebar-item px-1 py-2" :class="`${isExpanded ? 'px-2' : 'justify-center'}`" content="profile" :show="!isExpanded">
        <router-link to="/profile" class="flex items-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"></path>
          </svg>
          <p v-if="isExpanded" class="font-bold text-sm ml-3">{{ userFullName }}</p>
        </router-link>
      </base-tooltip>
      <a v-if="isExpanded" class="sidebar-item px-3" href="/logout">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </aside>
</template>

<script setup>
import {ref} from "vue";
import SideBarItem from "@/components/SideBarItem";
import BaseTooltip from "@/components/BaseTooltip";
// const emit = defineEmits(["change-page"]);

const userFullName = ref('Mustafa Bahaa SAMISM');
const isExpanded = ref(false);
const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
}
// const changeCurrentPage = (page) => {
//   emit("change-page", page);
// }
</script>

<style scoped>
aside {
  transition: all 0.5s ease-out;
  width: 4rem;
}


aside.expanded {
  width: 16rem;
}
</style>

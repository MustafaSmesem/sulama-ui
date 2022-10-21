<template>
  <div :class="theme" class="min-h-screen min-w-screen flex bg-skin-fill">
    <SideBar />
    <div class="content flex flex-col flex-1">
      <Header :current-page="currentPage" class="ml-16 md:ml-0"/>
      <router-view class="ml-16 md:ml-0 px-4 py-10 flex-1"/>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue";
import {useRoute} from 'vue-router';

import SideBar from "@/components/SideBar.vue";
import Header from "@/layout/HeaderLayout.vue";

const route = useRoute();
watch(route, (newValue) => {
  currentPage.value = newValue.name;
  // console.log(newValue.name)
});
const theme = ref('');
const currentPage = ref('Dashboard');
</script>

<style scoped>
</style>

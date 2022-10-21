<template>
  <div class="home">
    <h1>Home Page</h1>
    <div class="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between">
      <InfoCard v-for="(lang, i) in langList" :key="i" :lang="lang"/>
    </div>
  </div>
</template>

<script setup>
import InfoCard from '@/components/InfoCard.vue';
import {computed} from "vue";
import store from "@/store"; // @ is an alias to /src

const langList = computed(() => store.getters.modifiedLangList);

</script>

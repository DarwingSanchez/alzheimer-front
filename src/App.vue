<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/header/main-header.vue';
</script>

<template>
  <MainHeader></MainHeader>
  <RouterView />
</template>
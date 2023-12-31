<template>
  <q-page class="index-page">
    <app-auth />
  </q-page>
</template>

<script setup lang="ts">
import AppAuth from 'components/AppAuth.vue';
</script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
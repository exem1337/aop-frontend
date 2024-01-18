<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <span>Aдаптивный обучающий портал</span>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.q-header {
  padding: 16px 32px;

  span {
    cursor: pointer;
    font-size: 1.5em;
  }
}
</style>

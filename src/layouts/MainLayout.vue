<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      AOP
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
  padding: 8px 16px;
}
</style>

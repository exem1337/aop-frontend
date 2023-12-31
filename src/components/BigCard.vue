<template>
  <div 
    class="big-card fade-in"
    @click="onCardClick"
  >
    <q-icon v-if="iconName" :name="iconName" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  iconName?: string;
  handler?: () => void;
}>();

function onCardClick() {
  props.handler && props.handler();
}
</script>

<style lang="scss" scoped>
.big-card {
  width: 100%;
  background-color: blue;
  position: relative;
  min-height: 400px;
  border-radius: 8px;
  transition: $transition;
  cursor: pointer;

  .q-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    color: $white;
    transition: $transition;
  }

  &:hover {
    .q-icon {
      font-size: 32px;
    }
  }

  span {
    color: $white;
    font-size: 24px;
    font-weight: 500;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
}
</style>
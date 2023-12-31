<template>
  <div class="base-wrapper">
    <div class="base-wrapper--header">
      <div class="base-wrapper--header__title">
        <slot name="title" />
      </div>
      <div class="base-wrapper--header__buttons">
        <slot name="buttons" />
      </div>
    </div>

    <div class="base-wrapper--content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.base-wrapper {
  width: 100%;
  
  &--header {
    display: flex;
    align-items: center;
    padding: 16px 0;
    justify-content: space-between;
    margin-bottom: 16px;
    border-bottom: 1px solid $border;

    &__title {
      font-size: 18px;
      font-weight: 500;
    }

    &__buttons {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
}
</style>


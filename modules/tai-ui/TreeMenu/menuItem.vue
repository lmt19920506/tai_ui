<template>
  <div class="menu_item">
    <slot></slot>
  </div>
</template>

<script setup name="MenuItem">
</script>

<style lang="scss" scoped>
.menu_item {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
</style>
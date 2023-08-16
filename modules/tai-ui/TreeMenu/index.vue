<template>
  <div class="tree_menu">
    <slot></slot>
  </div>
</template>

<script setup name="TreeMenu">
// const props = definProps({
//     data: {
//         type: Array,
//         default: () => []
//     }
// })

</script>

<style lang="scss" scoped>
.tree_menu {
    width: 100%;
    background: #000;
    color: #fff
}
</style>
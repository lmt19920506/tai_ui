<template>
  <transfer :data="transferArr" rightTitle="已经选择机型"></transfer>
  <!-- <div class="slider-bar">
    <tree-menu>
      <template v-for="item of menuArr">
        <menu-item v-if="!item.children" :key="item.id">
          {{ item.title }}
        </menu-item>
        <re-sub-menu v-else :key="item.id" :data="item">
        </re-sub-menu>
      </template>
    </tree-menu>
  </div> -->
</template>

<script>
import menuData from "@/data/menu";
import transferData from "@/data/transferData";
import { computed } from "vue";
export default {
  setup() {
    const menuArr = computed(() => menuData);
    const transferArr = computed(() => transferData)

    return {
      menuArr,
      transferArr
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-bar {
  width: 300px;
}
</style>
<template>
  <div class="slider-bar">
    <tree-menu>
      <template v-for="item of menuArr">
        <menu-item v-if="!item.children" :key="item.id">
          {{ item.title }}
        </menu-item>
        <re-sub-menu v-else :key="item.id" :data="item">
        </re-sub-menu>
      </template>
    </tree-menu>
  </div>
</template>

<script>
import menuData from "@/data/menu";
import { computed } from "vue";
export default {
  setup() {
    const menuArr = computed(() => menuData);

    return {
      menuArr,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-bar {
  width: 300px;
}
</style>
<template>
  <div class="sub_menu" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="title_box">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="sub_item" v-show="subMenuShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SubMenu",
  setup() {
    const subMenuShow = ref(false);

    const mouseEnter = () => {
      subMenuShow.value = true;
    };
    const mouseLeave = () => {
      subMenuShow.value = false;
    };
    return {
        subMenuShow,
        mouseEnter,
        mouseLeave
    }
  },
};
</script>

<style lang="scss" scoped>
.sub_menu {
  position: relative;
  .title_box {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    .icon {
      position: absolute;
      top: 0;
      right: 15px;
    }
  }
  .sub_item {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    background: #333;
  }
}
</style>
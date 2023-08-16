<template>
  <sub-menu>
    <template #title>{{ data.title }}</template>
    <template v-for="c of data.children">
        <menu-item :key="c.id" v-if="!c.children">{{ c.title }}</menu-item>
        <re-sub-menu v-else :data="c" :key="c.id"></re-sub-menu>
    </template>

  </sub-menu>
</template>

<script>
export default {
    name: 'ReSubMenu',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }

}
</script>

<style>

</style>
<template>
  <q-layout view="hHh lpR fFf" class="dashboard-wrapper">

    <q-header reveal class="bg-transparent text-black">
      <top-bar @toggle-left="toggleLeftDrawer" @toggle-right="toggleRightDrawer" />
    </q-header>
    <left-sidebar :menu="leftDrawerOpen" />

    <right-sidebar :menu="rightDrawerOpen" />

    <q-page-container>
      <slot />
    </q-page-container>

  </q-layout>
</template>

<script setup>
const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
<style lang="scss"></style>
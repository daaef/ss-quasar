<template>
  <div class="dashboard-wrapper">
    <left-sidebar :menu="leftDrawerOpen"/>
    <div class="main-body">
      <top-bar @toggle-left="toggleLeftDrawer" @toggle-right="toggleRightDrawer"/>
      <slot/>
    </div>
    <right-sidebar :menu="rightDrawerOpen"/>
  </div>
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
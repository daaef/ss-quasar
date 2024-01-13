<template>
  <div class="dashboard-wrapper no-right-sidebar">
    <left-sidebar :menu="leftDrawerOpen"/>
    <div class="main-body">
      <top-bar @toggle-left="toggleLeftDrawer" />
      <slot />
    </div>
  </div>
</template>

<script setup>
const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style lang="scss"></style>
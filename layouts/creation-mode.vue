<script setup lang="ts">
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

</script>

<template>
  <slot />
</template>

<style scoped>

</style>
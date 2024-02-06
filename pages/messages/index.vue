<script setup lang="ts">
</script>

<template>
  <div class="empty-message">
    <div class="text-center flex flex-col items-center gap-5">
      <q-img height="200px" width="200px" src="/whisper.png" alt="No Whisper" fit="contain" />
      <p class="text-lg font-medium italic">Have private conversations with others <br />
        on ScoutScity.</p>
      <button class="btn-gradient">SEND A MESSAGE</button>
    </div>
  </div>
</template>

<style scoped>
.empty-message {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
import {useStore} from "~/store";

definePageMeta({
  layout: "mini-nav"
});
const { messages } = useStore()
</script>

<template>
  <div class="dash-main messages-page">
    <div>
      <message-nav/>
      <div class="message-list">
        <message
            v-for="message in messages"
            :key="message.id"
            :id="message.id"
            :img="message.img"
            :name="message.name"
            :handle="message.handle"
            :snippet="message.snippet"
            :date="message.date"
            :seen="message.seen"
        />
      </div>
    </div>
    <div class="message-container">
      <NuxtPage/>
    </div>
  </div>
</template>

<style scoped>

</style>
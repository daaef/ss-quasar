<script setup lang="ts">
import {useStore} from "~/store";

definePageMeta({
  layout: "mini-nav"
});
const store = useStore()
</script>

<template>
  <div class="dash-main messages-page">
    <div>
      <message-nav/>
      <div class="message-list">
        <div v-if="store.messages?.length">
          <message
              v-for="message in store?.messages"
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
        <div v-else class="empty-messages" :key="store?.messages">
          <div class="flex flex-col gap-5 items-center">
            <q-img src="/empty.svg" width="170px" height="170px" fit="contain"/>
            <p class="text-center">You don’t have any messages here at <br>
              the moment</p>
          </div>
        </div>
      </div>
    </div>
    <div class="message-container">
      <NuxtPage/>
    </div>
  </div>
</template>

<style scoped>
.empty-messages {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
    defineProps({
      id: String,
      img: String,
      handle: String,
      name: String,
      snippet: String,
      date: String,
      seen: Boolean,
    })
</script>

<template>
  <nuxt-link :to="`/messages/${id}`" class="message gap-4">
    <q-avatar color="transparent" size="60px">
      <q-img :src="img" alt="Message Avatar Image" />
    </q-avatar>
    <div class="">
      <p class="font-bold">{{name}} <span class="text-acc">@{{handle}}</span> </p>
      <p class="">{{snippet}}</p>
    </div>
    <div class="flex flex-col items-center gap-2">
      <p>{{ date }}</p>
      <div class="seen-status" v-if="!seen"></div>
    </div>
  </nuxt-link>
</template>

<style lang="scss">
    .message {
      display: grid;
      grid-template-columns: 60px auto 100px;
      align-items: center;
      gap: 15px;
      padding: 10px 10px;
      border-radius: 25px;
      transition: .3s ease-in-out;
      cursor: pointer;
      &:hover {
        background: rgba(190, 190, 190, 0.3);
      }
      &:active {
        background: rgba(190, 190, 190, 0.5);
      }
      .seen-status {
        width: 20px;
        height: 20px;
        background: #f24055;
        border-radius: 50%;
      }
    }
</style>
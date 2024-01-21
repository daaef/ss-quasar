<script setup lang="ts">
    defineProps({
      img: String,
      handle: String,
      action: String,
      time: String,
    })
</script>

<template>
  <div class="notification gap-4">
    <q-avatar color="transparent" size="60px">
      <q-img :src="img" alt="Notifications Avatar Image" />
    </q-avatar>
    <div class="">
      <p><span class="text-acc">@{{handle}}</span> {{action}}</p>
      <p class="italic">{{time}} ago</p>
    </div>
    <q-btn class="text-sec" dense flat round icon="o_more_vert"/>
  </div>
</template>

<style lang="scss">
    .notification {
      display: grid;
      grid-template-columns: 60px auto 34px;
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
    }
</style>
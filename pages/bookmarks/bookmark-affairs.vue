<script setup lang="ts">

import {useStore} from "~/store";

const {tourneys} = useStore()
</script>

<template>
  <div class="sitadel-suggestions">
    <Affair
        type="tourney"
        v-for="(tourney, i) in tourneys"
        :key="i"
        :affair="tourney"
    />
  </div>
</template>
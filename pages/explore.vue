<script setup lang="ts">

definePageMeta({
  layout: "mini-nav"
});
const search = ref('')
</script>

<template>
  <div class="dash-main explore-page">
    <div class="ss-search-container">
      <div class="ss-search-box">
        <q-input rounded dense class="search-input" standout v-model="search" label="What do you seek?">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn dense class="btn-gradient" label="Search" />
      </div>
      <div class="ss-search-tabs">
        <nuxt-link to="/explore/" :exact-active-class="'tab-active'">All</nuxt-link>
        <nuxt-link to="/explore/people" :exact-active-class="'tab-active'">People</nuxt-link>
        <nuxt-link to="/explore/sitadels" :exact-active-class="'tab-active'">Sitadels</nuxt-link>
        <nuxt-link to="/explore/tourneys" :exact-active-class="'tab-active'">Tourneys</nuxt-link>
        <nuxt-link to="/explore/events" :exact-active-class="'tab-active'">Events</nuxt-link>
        <nuxt-link to="/explore/products" :exact-active-class="'tab-active'">Products</nuxt-link>
        <nuxt-link to="/explore/services" :exact-active-class="'tab-active'">Services</nuxt-link>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

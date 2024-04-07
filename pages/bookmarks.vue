<script setup lang="ts">
</script>

<template>
  <div class="dash-main bookmark-page">
    <ul class="bookmarks-tabs">
      <li>
        <nuxt-link to="/bookmarks" exact-active-class="tab-active">Gists</nuxt-link>
      </li>
      <li>
        <q-separator vertical size="1px" class="h-[20px]"/>
      </li>
      <li>
        <nuxt-link to="/bookmarks/bookmark-affairs" exact-active-class="tab-active">Affairs</nuxt-link>
      </li>
    </ul>
    <div class="bookmarks-container">
      <NuxtPage/>
    </div>
  </div>
</template>
<style lang="scss">
.bookmarks-tabs {
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  gap: 20px;
  align-items: center;

  a {
    font-size: 1.2rem;

    &.tab-active {
      font-weight: bold;
    }
  }
}
</style>
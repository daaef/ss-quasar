<script setup lang="ts">
  const slide = ref(1)
  const autoplay = ref(true)
  const menu = ref(true)
</script>

<template>
  <q-toolbar style="height: 125px" class="justify-between">
    <q-btn dense flat round icon="menu" @click="$emit('toggleLeft')" class="lg:hidden" />
<!--    <div class="logo py-6">
      <q-img width="50px" fit="contain" loading="lazy" class="dash-logo" src="/favicon.png" alt="Logo" />
    </div>-->
    <q-toolbar-title>
      <q-carousel
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          :arrows="false"
          transition-prev="scale"
          transition-next="scale"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1">
          <div class="slider-detail">
            <h3>411</h3>
            <q-separator
                class="ms-3"
                inset
                vertical
                color="black"
                size="3px"
            />
            <p>
              <span class="text-acc">#HiFL2023 </span>registration is still ongoing for higher
              institutions. Registration ends 20th April.
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <div class="slider-detail">
            <h3>411</h3>
            <q-separator
                class="ms-3"
                inset
                vertical
                color="black"
                size="3px"
            />
            <p>
              Henry Aondoakaa <span class="text-prim">@hendohuncho</span> has been announced as the best player of
              <span class="text-acc">#NUGAfootball2023</span>
            </p>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3">
          <div class="slider-detail">
            <h3>411</h3>
            <q-separator
                class="ms-3"
                inset
                vertical
                color="black"
                size="3px"
            />
            <p>
              <span class="text-acc">#SityWatchBeautyPageant2023 </span>has released the list of finalists
            </p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-toolbar-title>

<!--    <q-btn dense flat round icon="menu" @click="$emit('toggleRight')" />-->
  </q-toolbar>
</template>

<style scoped>

</style>
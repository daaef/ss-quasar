<script setup lang="ts">
  const slide = ref(1)
  const autoplay = ref(true)
  const menu = ref(true)
</script>

<template>
  <q-toolbar style="height: 125px" inset class="justify-between">
    <q-btn dense flat round icon="menu" @click="$emit('toggleLeft')" class="lg:hidden" />
    <div class="logo py-6">
      <q-img width="50px" fit="contain" loading="lazy" class="dash-logo" src="/favicon.png" alt="Logo" />
    </div>
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

    <div class="inline-grid grid-cols-3 gap-x-2">
      <q-btn dense icon="o_search" size="15px" flat rounded />

      <q-btn dense flat rounded>
        <q-avatar color="transparent" size="40px">
          <q-img src="/nasir.png" alt="Gist Avatar Image" />
        </q-avatar>
        <q-menu max-width="240px">
          <q-list style="min-width: 230px" class="my-sitadels">
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-img src="/nasir.png" alt="Gist Avatar Image" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Nasir Gambo</q-item-label>
                <q-item-label caption>View my look</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="arrow_right" />
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item-label header>SITADELS</q-item-label>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-img src="/monopoly.png" alt="Gist Avatar Image" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Nasir Monopoly Game Club</q-item-label>
                <q-item-label caption>@NasirMGC</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-img src="/photography.png" alt="Gist Avatar Image" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Nasir Kingly Touch Photography</q-item-label>
                <q-item-label caption>@NKTPhotography</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item dense clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-icon name="fas fa-random" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Log into another look</q-item-label>
              </q-item-section>
            </q-item>
            <q-item dense clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-icon name="o_person_add" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Create a new look</q-item-label>
              </q-item-section>
            </q-item>
            <q-item dense clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-icon name="o_add_home" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Build a new sitadel</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item dense clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-icon name="o_settings" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Settings</q-item-label>
              </q-item-section>
            </q-item>
            <q-item dense clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-icon name="o_quiz" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Help</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item dense clickable v-close-popup>
              <q-item-section avatar>
                <q-avatar>
                  <q-icon name="o_logout" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn dense flat icon="list" size="44" rounded />
    </div>
  </q-toolbar>
</template>

<style scoped>

</style>
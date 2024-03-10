<script setup lang="ts">

import People from "~/components/Explore/People.vue";

definePageMeta({
  layout: "mini-nav"
});
const search = ref('')
const tab = ref('all')
</script>

<template>
  <div class="dash-main explore-page">
    <div class="ss-search-container">
      <div class="ss-search-box">
        <q-input rounded dense class="search-input" standout v-model="search" label="What do you seek?">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-btn dense class="btn-gradient" label="Search"/>
      </div>
      <div class="ss-search-tabs">
        <button :class="{'tab-active': tab === 'all'}" @click.prevent="tab = 'all'">All</button>
        <button :class="{'tab-active': tab === 'people'}" @click.prevent="tab = 'people'">People</button>
        <button :class="{'tab-active': tab === 'sitadels'}" @click.prevent="tab = 'sitadels'">Sitadels</button>
        <button :class="{'tab-active': tab === 'tourneys'}" @click.prevent="tab = 'tourneys'">Tourneys</button>
        <button :class="{'tab-active': tab === 'events'}" @click.prevent="tab = 'events'">Events</button>
        <button :class="{'tab-active': tab === 'products'}" @click.prevent="tab = 'products'">Products</button>
        <button :class="{'tab-active': tab === 'services'}" @click.prevent="tab = 'services'">Services</button>
      </div>
    </div>
    <div class="ss-search-tab-content">
      <Transition name="page" mode="out-in">
        <div class="ss-tab" v-if="tab==='people'" :key="tab">
          <ExplorePeople/>
        </div>
        <div class="ss-tab" v-else-if="tab==='sitadels'" :key="tab">
          <ExploreSitadels/>
        </div>
        <div class="ss-tab" v-else-if="tab==='tourneys'" :key="tab">
          <ExploreTourneys/>
        </div>
        <div class="ss-tab" v-else-if="tab==='events'" :key="tab">
          <ExploreEvents/>
        </div>
        <div class="ss-tab" v-else-if="tab==='products'" :key="tab">
          <ExploreProducts/>
        </div>
        <div class="ss-tab" v-else-if="tab==='services'" :key="tab">
          <ExploreServices/>
        </div>
      </Transition>
    </div>
    <div class="ss-explore-content">
      <div class="">
        <h3 class="ss-content-title text-2xl my-4 font-bold text-center">HERE'S WHAT'S VIRAL TODAY</h3>
        <q-card class="">
          <q-card-section>
            <span class="text-gray-400 font-bold">Viral in Nigeria</span>
            <p class="q-title text-xl font-bold flex justify-between items-center">
              <span>#ASUUstrike</span>
              <q-btn dense flat icon="o_more_horiz"/>
            </p>
            <span class="text-gray-400 font-bold">6.67k gists about it</span>
          </q-card-section>
          <q-card-section>
            <span class="text-gray-400 font-bold">Viral in Birmingham University</span>
            <p class="q-title text-xl font-bold flex justify-between items-center">
              <span>#NewVC</span>
              <q-btn dense flat icon="o_more_horiz"/>
            </p>
            <span class="text-gray-400 font-bold">1.2k gists about it</span>
          </q-card-section>
          <q-card-section>
            <span class="text-gray-400 font-bold">Viral</span>
            <p class="q-title text-xl font-bold flex justify-between items-center">
              <span>#TravisScott</span>
              <q-btn dense flat icon="o_more_horiz"/>
            </p>
            <span class="text-gray-400 font-bold">20.6k gists about it</span>
          </q-card-section>
          <q-card-section>
            <span class="text-gray-400 font-bold">Viral in Abuja</span>
            <p class="q-title text-xl font-bold flex justify-between items-center">
              <span>#MrPresident</span>
              <q-btn dense flat icon="o_more_horiz"/>
            </p>
            <span class="text-gray-400 font-bold">9.1k gists about it</span>
          </q-card-section>
        </q-card>
        <div class="gist-grid mt-4">
          <gist
              content="Everybody knows UNILAG has the best soccer players,  ask
anybody. Just wait for HiFL to start."
              :follows="452"
              :quotes="297"
              :retweets="641"
              school="UNILAG, Lagos"
              occupation="Student"
              avatar="badassjess.png"
              handle="badassjess"
          />
          <gist
              content="Hey guys, please vote our girl @spicy_Q for the SityWatch Beauty Pageant finals. Just follow link: https://www.sitywatch.com/beautypagent/chjsdbhghegh/
votepanel/"
              :follows="300"
              :quotes="182"
              :retweets="77"
              school="Nile University, Abuja"
              occupation="Student"
              image="post_image.png"
              avatar="jamkol23.png"
              handle="jamkol23"
          />
        </div>
      </div>
      <div class="ss-content-2">
      </div>
    </div>
  </div>
</template>

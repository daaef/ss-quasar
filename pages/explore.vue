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
        <div class="flex w-full items-center justify-between">
          <div class="flex items-center">
            <q-avatar color="transparent" size="84">
              <q-img src="/not-5.png" alt="avatar Image"/>
            </q-avatar>
            <div class="ml-3">
              <div class="font-medium"><span class="text-acc">@yungBo$$Fly</span> just built a new sitadel</div>
              <div class="text-error">@FLYBOYNATION</div>
            </div>
          </div>
          <q-btn class="text-sec" dense flat round icon="o_more_vert"/>
        </div>
        <div class="user-cards mt-5">
          <h3 class="text-2xl mb-5 font-semibold text-gray-500">Sitizens You May Like To Watch</h3>
          <div class="grid grid-cols-2 w-full gap-5">
            <div class="w-full max-w-sm bg-theme mt-3 rounded-lg shadow">
              <div class="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        class=""
                        type="button">
                  <span class="sr-only">Open dropdown</span>
                  <q-btn class="text-sec" dense flat round icon="o_more_horiz"/>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown"
                     class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a href="#"
                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                        Data</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center pb-10 px-5">
                <img class="rounded-full shadow-lg w-full" src="/watch-1.png"
                     alt="Bonnie image"/>
                <h5 class="mb-1 mt-5 text-xl font-medium text-gray-900">Anna Fadugba</h5>
                <span class="text-sm text-acc">@peng_anny</span>
                <span class="text-sm text-sec">Bingham University - Student</span>
                <div class="flex mt-4 md:mt-6">
                  <a href="#"
                     class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Watch</a>
                  <a href="#"
                     class="py-2 px-4 ms-2 text-sm font-medium text-gray-900">Add</a>
                </div>
              </div>
            </div>
            <div class="w-full max-w-sm bg-theme mt-3 rounded-lg shadow">
              <div class="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown"
                        class=""
                        type="button">
                  <span class="sr-only">Open dropdown</span>
                  <q-btn class="text-sec" dense flat round icon="o_more_horiz"/>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown"
                     class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a href="#"
                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                        Data</a>
                    </li>
                    <li>
                      <a href="#"
                         class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center pb-10 px-5">
                <img class="rounded-full shadow-lg w-full" src="/watch-2.png"
                     alt="Bonnie image"/>
                <h5 class="mb-1 mt-5 text-xl font-medium text-gray-900">Esther Percy</h5>
                <span class="text-sm text-acc">@theperksofesther</span>
                <span class="text-sm text-sec">Covenant University - Alumni</span>
                <div class="flex mt-4 md:mt-6">
                  <a href="#"
                     class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Watch</a>
                  <a href="#"
                     class="py-2 px-4 ms-2 text-sm font-medium text-gray-900">Add</a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 flex justify-center">
            <q-btn flat dense class="text-sec rounded-2xl px-5">SEE ALL</q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "no-right"
});
    import {useStore} from "~/store";
    import type {Affair} from "~/data/Models";

    const id = useRoute().params.id
    const { affairs } = useStore()
    const affair: Affair = computed(()=> {
      return affairs.find(affair => affair.id === +id )
    })
</script>

<template>
  <div class="dash-main affair-page">
    <div class="affair-overview">
      <q-img cover height="220px" width="100%" class="affair-banner" :src="affair?.cover" />
      <div class="affair-details mt-4">
        <h2 class="text-lg font-bold">{{ affair?.title }}</h2>
        <div class="flex justify-between">
          <h4 class="text-md text-acc font-bold">#{{ affair?.handle }}</h4>
          <div class="flex items-center">
            <span>Media</span>
              <q-separator class="mx-4 my-auto h-[4px]" inset vertical color="black" size="4px"/>
            <span>Category</span>
          </div>
        </div>
        <div class="">
          <p>Providing a platform for photography students worldwide -
            first prize is top Sony digital imaging equipment.</p>
        </div>
        <div class="mt-2 flex justify-between items-center">
          <q-btn dense flat round icon="sym_o_export_notes" class="btn-gradient">
            Register
          </q-btn>
          <div class="grid grid-cols-3 gap-x-4">
            <q-btn class="text-sec" dense flat round icon="o_preview"/>
            <q-btn class="text-sec" dense flat round icon="o_notifications_active"/>
            <q-btn class="text-sec" dense flat round icon="o_more_vert"/>
          </div>
        </div>
        <div class="flex justify-between flex-nowrap px-4 mt-4 text-center">
          <div class="affair-stat">
            <h4 class="text-lg font-bold">119</h4>
            <p>Gists</p>
          </div>
              <q-separator class="mx-4 my-auto h-[4px]" inset vertical color="black" size="4px"/>
          <div class="affair-stat">
            <h4 class="text-lg font-bold">12</h4>
            <p>Affiliations</p>
          </div>
              <q-separator class="mx-4 my-auto h-[4px]" inset vertical color="black" size="4px"/>
          <div class="affair-stat">
            <h4 class="text-lg font-bold">10</h4>
            <p>Royals</p>
          </div>
        </div>
        <q-card class="mt-5 rounded-lg" bordered flat>
          <q-card-section>
            <h4 class="text-lg flex items-center" v-if="affair?.deadline">
              <q-btn dense flat round icon="o_event" />
              <span class="font-bold ml-2 mr-5">Entry Deadline: </span> {{ affair?.deadline }}
            </h4>
            <h4 class="text-lg" v-if="affair?.website">
              <q-btn dense flat round icon="o_link" />
              <span class="font-bold ml-2 mr-5">Website: </span> <a :href="affair.website" class="text-sec underline">Competition Platform</a>
            </h4>
            <h4 class="text-lg" v-if="affair?.date">
              <q-btn dense flat round icon="o_event_available" />
              <span class="font-bold ml-2 mr-5">Date: </span> {{ affair?.date }}
            </h4>
            <h4 class="text-lg" v-if="affair?.address">
              <q-btn dense flat round icon="o_pin_drop" />
              <span class="font-bold ml-2 mr-5">Venue: </span> {{ affair?.address }}
            </h4>
            <h4 class="text-lg" v-if="affair?.time">
              <q-btn dense flat round icon="o_watch" />
              <span class="font-bold ml-2 mr-5">Time: </span> {{ affair?.time }}
            </h4>
            <nuxt-link class="text-lg mt-5 font-bold " :to="`/sitadel/${id}/information`">
              <span class="ml-2 mr-2">More </span>
              <q-icon name="o_more_horiz" />
            </nuxt-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="affair-breakdown">
      <div class="tabs tabs-lifted" data-theme="light">
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadel/${id}`" class="tab">
          <q-icon name="table_rows" />
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadel/${id}/media`" role="tab" class="tab">
          <q-icon name="video_library" />
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadel/${id}/royals`" role="tab" class="tab">
          <q-icon name="fa fa-crown" />
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadel/${id}/information`" role="tab" class="tab">
          <q-icon name="fa fa-info-circle" />
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/sitadel/${id}/partners`" role="tab" class="tab">
          <q-icon name="groups_2" />
        </nuxt-link>
      </div>
      <div :class="{first: $route.name === 'sitadel-id',last: $route.name === 'sitadel-id-partners'}"
           class="active-tab-content bg-base-100 border-base-300 rounded-box p-6">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .active-tab-content {
    grid-column-start: 1;
    grid-column-end: span 9999;
    grid-row-start: 2;
    margin-top: calc(var(--tab-border) * -1);
    border-color: #e5e6e6;
    border-width: var(--tab-border, 0);
    background: white;
    height: 100%;
    &.first {
      border-top-left-radius: 0;
    }
    &.last {
      border-top-right-radius: 0;
    }
  }
  .tabs-lifted {
    background: transparent !important;
    & > .tab {
      &:first-child {
        border-bottom: solid 0;
      }
      border-color: #e5e6e6;
      color: #1e4f88;
      font-size: 1.3rem;

      &.tab-active {
        background: white !important;
        span,  .q-icon{
          width: 1.2em;
          height: 1.2em;
          color: #1e4f88;
          @supports (background-clip: text) {
            background-image: linear-gradient(45deg, #1e4f88, #f24055 );
            background-clip: text;
            color: transparent;
          }
        }
      }

      &:last-child {
        border-bottom: solid 0;
      }
    }
  }
  .affair-overview {
    .affair-banner {
      border-radius: 15px;
    }
  }
</style>
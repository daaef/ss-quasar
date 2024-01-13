<script setup lang="ts">
definePageMeta({
  layout: "no-right"
});
</script>

<template>
  <div class="dash-main affair-page my-sitadel">
    <div class="affair-overview">
      <div class="affair-imgs">
        <q-img cover height="220px" width="100%" class="affair-banner" src="/my-sitadel-cover.png"/>
        <q-img height="150px" width="150px" src="/my-sitadel-img.png" alt="my sitadel image" class="sitadel-img"/>
      </div>
      <div class="affair-details mt-4">
        <div class="flex flex-col items-end">
          <h2 class="text-lg">Nasir Kingly Touch Photography</h2>
          <p class="text-md text-sec font-bold">@NasirKTP</p>
        </div>
        <div class="mt-6 flex justify-between items-center">
          <q-btn dense flat round class="btn-gradient">
            Edit Sitadel
          </q-btn>
          <div class="grid justify-end">
            <q-btn class="text-sec" dense flat round icon="o_more_vert"/>
          </div>
        </div>
        <div class="flex justify-between flex-nowrap px-4 mt-4 text-center">
          <div class="affair-stat">
            <h4 class="text-lg font-bold">138</h4>
            <p>Sitizens</p>
          </div>
          <q-separator class="mx-4 my-auto h-[4px]" inset vertical color="black" size="4px"/>
          <div class="affair-stat">
            <h4 class="text-lg font-bold">45</h4>
            <p>Recognizing</p>
          </div>
          <q-separator class="mx-4 my-auto h-[4px]" inset vertical color="black" size="4px"/>
          <div class="affair-stat">
            <h4 class="text-lg font-bold">8</h4>
            <p>Recognitions</p>
          </div>
        </div>
        <q-card class="mt-5 rounded-lg" bordered flat>
          <q-card-section>
            <h4 class="text-lg no-wrap gap-4 flex items-center">
              <q-btn class="text-xl" dense flat round icon="o_info"/>
              We have top-notch equipments to give you the
              best photography has to offer.
            </h4>
            <h4 class="text-lg mt-1 no-wrap gap-4 flex items-center">
              <q-btn class="text-xl" dense flat round icon="o_phone"/>
              +2348068829245
            </h4>
            <h4 class="text-lg mt-1 no-wrap gap-4 flex items-center">
              <q-btn class="text-xl" dense flat round icon="o_mail"/>
              nktphotography@gmail.com
            </h4>
            <h4 class="text-lg mt-1 mb-4 no-wrap gap-4 flex items-center">
              <q-btn class="text-xl" dense flat round icon="o_home"/>
              Nasarawa, Nigeria
            </h4>
            <nuxt-link class="text-lg mt-5 font-bold " :to="`/my-sitadel/${id}/information`">
              <span class="ml-2 mr-2 text-gray-500">More about Nasir Kingly Touch Photography</span>
              <q-icon name="o_more_horiz"/>
            </nuxt-link>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="affair-breakdown">
      <div class="tabs tabs-lifted" data-theme="light">
        <nuxt-link :exact-active-class="'tab-active'" :to="`/my-sitadel/`" class="tab">
          All
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/my-sitadel/media`" role="tab" class="tab">
          Media
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/my-sitadel/cites`" role="tab" class="tab">
          Cites
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/my-sitadel/hypes`" role="tab" class="tab">
          Hypes
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/my-sitadel/recites`" role="tab" class="tab">
          Recites
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/my-sitadel/flows`" role="tab" class="tab">
          Flows
        </nuxt-link>
      </div>
      <div :class="{first: $route.name === 'my-sitadel',last: $route.name === 'my-sitadel-flows'}"
           class="active-tab-content bg-base-100 border-base-300 rounded-box p-6">
        <NuxtPage/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.my-sitadel {
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
      border-color: #e5e6e6;
      color: #1e4f88;
      font-size: 1rem;
      padding-bottom: 10px;

      &:first-child {
        border-bottom: solid 0;
      }

      &.tab-active {
        background: white !important;

        span, .q-icon {
          width: 1.2em;
          height: 1.2em;
          color: #1e4f88;
          @supports (background-clip: text) {
            background-image: linear-gradient(45deg, #1e4f88, #f24055);
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

    .affair-imgs {
      position: relative;

      .sitadel-img {
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        border: solid 2px #1e4f88;
        transform: translateY(50%);
      }
    }
  }
}
</style>
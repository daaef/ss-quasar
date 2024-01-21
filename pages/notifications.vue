<script setup lang="ts">
/*definePageMeta({
  layout: "no-right"
});*/
</script>

<template>
  <div class="dash-main notifications-page">
    <div class="notifications-breakdown">
      <div class="tabs tabs-lifted" data-theme="light">
        <nuxt-link :exact-active-class="'tab-active'" :to="`/notifications/`" class="tab">
          All
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/notifications/sertified`" role="tab" class="tab">
          Sertified
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/notifications/invites`" role="tab" class="tab">
          Invites
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/notifications/pitches`" role="tab" class="tab">
          Pitches
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/notifications/gists`" role="tab" class="tab">
          Gists
        </nuxt-link>
        <nuxt-link :exact-active-class="'tab-active'" :to="`/notifications/hypes`" role="tab" class="tab">
          Hypes
        </nuxt-link>
      </div>
      <div :class="{first: $route.name === 'notifications',last: $route.name === 'notifications-hypes'}"
           class="active-tab-content bg-base-100 border-base-300 rounded-box p-6">
        <NuxtPage/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.notifications-page {
  .active-tab-content {
    grid-column-start: 1;
    grid-column-end: span 9999;
    grid-row-start: 2;
    margin-top: calc(var(--tab-border) * -1);
    border-color: #e5e6e6;
    border-width: var(--tab-border, 0);
    background: white;
    height: 100%;
    overflow-y: auto;

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
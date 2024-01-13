<script setup lang="ts">
import {useStore} from "~/store";
import Affair from "~/components/Affair.vue";

const {tourneys, eventsToday, eventsAnticipated} = useStore()
const slide = ref(1)
const autoplay = ref(true)
</script>

<template>
  <div class="dash-main sitadel-page ss-container">
    <div class="sitadels-banner-builder">
      <div class="sit-banner">
        <q-carousel
            animated
            v-model="slide"
            infinite
            :autoplay="autoplay"
            :arrows="false"
            height="180px"
            transition-prev="slide-left"
            transition-next="slide-right"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1">
            <q-img height="180px" src="/sit-slide-1.png" cover/>
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <q-img height="180px" src="/sit-slide-2.png" cover/>
          </q-carousel-slide>
          <q-carousel-slide :name="3">
            <q-img height="180px" src="/sit-slide-3.png" cover/>
          </q-carousel-slide>
        </q-carousel>
      </div>
      <div class="sit-builder">
        <q-btn dense flat to="/sitadel/create">
          <q-card flat bordered>
            <q-card-section>
              <div>
                <q-icon name="plus_circle" class="icon-gradient"/>
              </div>
              <div class="flex justify-center">
                <q-btn dense class="h-[40px] w-[40px]" rounded>
                  <q-icon class="icon-gradient" name="castle"/>
                </q-btn>
              </div>
            </q-card-section>
            <q-card-section>
              <h3 class="text-sm font-bold text-center">Build a Sitadel</h3>
              <p class="text-center text-sm">Make it easy for people to scout
                your brand, business, organization,
                events, side-hustle, etc</p>
            </q-card-section>
          </q-card>
        </q-btn>
      </div>
    </div>
    <h3 class="font-semibold text-xl my-6">Suggested Tourneys That Might Interest You</h3>
    <div class="sitadel-suggestions">
      <Affair
          type="tourney"
          v-for="(tourney, i) in tourneys"
          :key="i"
          :affair="tourney"
      />
    </div>
    <h3 class="font-semibold text-xl my-6">Happening Today Near You</h3>
    <div class="sitadel-suggestions">
      <Affair
          v-for="(event, i) in eventsToday"
          :key="i"
          :affair="event"
      />
    </div>
    <h3 class="font-semibold text-xl my-6">Most Anticipated Events</h3>
    <div class="sitadel-suggestions">
      <Affair
          v-for="(event, i) in eventsAnticipated"
          :key="i"
          :affair="event"
      />
    </div>
  </div>
</template>
<style lang="scss">
.q-carousel__slide, .q-carousel .q-carousel--padding {
  padding: 0 !important;
}

.sitadels-banner-builder {
  display: grid;
  grid-template-columns: 1fr 180px;
  height: 180px;
  grid-gap: 15px;

  .sit-banner {
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
      object-position: top center;
    }
  }

  .sit-builder {
    .q-card {
      border-radius: 15px;
      background: transparent;
      border: solid 1px #1e4f88;
      height: 180px;
      display: grid;
      align-content: center;
      cursor: pointer;
      transition: .3s ease-in-out;
      box-shadow: 0 0 0;
      .q-card__section {
        padding: 5px;
      }
      h3 {
        font-size: .75rem;
      }
      p {
        font-size: .65rem;
        text-transform: none;
        line-height: 1.1;
      }
      &:hover {
        box-shadow: 0 0 15px rgba(30, 79, 136, 0.31) !important;
      }
    }
  }
}

.sitadel-suggestions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
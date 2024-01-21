<template>
  <div class="create-gist-wrapper">
    <q-card class="rounded-xl" color="#fafafa" elevation="2">
      <q-card-section>
        <div class="gist-card-header flex justify-start items-center">
          <q-avatar color="transparent" size="84">
            <q-img :src="`/${avatar}`" :alt="`${avatar} avatar Image`"/>
          </q-avatar>
          <div class="ml-4">
            <p class="text-acc font-bold text-md">
              @{{ handle }}
              <img class="inline" src="/crown.png" alt="Crown"/>
            </p>
            <span class="block mb-2"
            >{{ school }} . <span>{{ occupation }}</span></span
            >
          </div>
        </div>
        <div class="gist-content mt-2">
          <p class="text-lg">
            {{ content }}
          </p>
        </div>
      </q-card-section>
      <q-card-section class="no-padding">
        <q-img
            max-height="600"
            v-if="image"
            cover
            class="post-image"
            :src="`/${image}`"
            :alt="`${image} image`"
        />
      </q-card-section>
      <q-card-section class="likes-n-follows">
        <hr/>
        <div class="likes-content">
          <div class="flex items-center" v-if="follows">
            <q-img height="30px" fit="contain" width="25px" src="/hi5.png" alt="hi5 image"/>
            <span class="block ml-4 text-sm italic"
            >danJayy and {{ follows - 1 }} sitizens hyped this gist</span
            >
          </div>
          <div class="flex gap-4">
            <div class="" v-if="quotes">
              <q-icon name="o_quickreply" class="text-sec"/>
              <span class="ml-1 text-sm text-sec">{{ quotes }}</span>
            </div>
            <div v-if="retweets">
              <q-icon name="o_repeat" class="text-sec"/>
              <span class="ml-1 text-sm text-sec">{{ retweets }}</span>
            </div>
          </div>
        </div>
        <hr/>
      </q-card-section>

      <q-card-actions>
        <div class="flex justify-between w-full">
          <div class="gist-action-grid grid grid-cols-3 gap-x-4">
            <q-btn
                dense
                flat
                round
                icon="o_handshake"
                class="text-sec"
            />
            <q-btn
                dense
                flat
                round
                icon="o_quickreply"
                class="text-sec"
            />
            <q-btn
                dense
                flat
                round
                icon="o_repeat"
                class="text-sec"
            />
          </div>
          <q-btn
              dense
              flat
              round
              icon="o_bookmarks"
              class="text-sec"
          />
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  handle: String,
  school: String,
  occupation: String,
  time: String,
  avatar: String,
  image: String,
  content: String,
  follows: Number,
  quotes: Number,
  retweets: Number,
});
</script>

<style lang="scss"></style>

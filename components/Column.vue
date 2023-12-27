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
              <img class="inline" src="/citadel-icon.png" alt="Crown"/>
              <span class="ml-1" v-if="hash">#{{ hash }}</span>
            </p>
            <span class="block mb-2">
              <span v-for="(tag, i) in tags" :key="i" class="col-tag">{{ tag }} <span class="tag-seperator">. </span> </span>
            </span>
          </div>
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
      <q-card-section class="no-padding">
        <div class="mx-4 gist-content mt-2">
          <p class="text-lg font-medium">
            {{ content }}
          </p>
        </div>
      </q-card-section>
      <q-card-section class="likes-n-follows">
        <hr/>
        <div class="likes-content">
          <div class="flex items-center" v-if="follows">
            <q-img height="30px" fit="contain" width="25px" src="/hi5.png" alt="hi5 image"/>
            <span class="block ml-4 text-sm italic"
            >{{ follows - 1 }} sitizens support this gist</span
            >
          </div>
          <div class="flex gap-4">
            <div class="flex items-center" v-if="quotes">
              <q-icon name="psychology" class="text-sec"/>
              <span class="ml-1 text-sm text-sec">{{ quotes }}</span>
            </div>
          </div>
        </div>
        <hr/>
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
                icon="psychology"
                class="text-sec"
            />
            <q-btn
                dense
                flat
                round
                icon="o_ios_share"
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
        <hr/>
      </q-card-section>
      <q-card-actions class="justify-center flex-wrap">
          <q-btn flat class="text-nocase text-sec" icon="psychology">View all thoughts</q-btn>
          <q-input class="w-full" standout v-model="thought" label="Thought" placeholder="Add your thoughts about this column" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  handle: String,
  hash: String,
  school: String,
  occupation: String,
  time: String,
  tags: Array,
  avatar: String,
  image: String,
  content: String,
  follows: Number,
  quotes: Number,
  retweets: Number,
});
const thought = ref('')
</script>

<style lang="scss">
.col-tag {
  &:last-of-type {
    .tag-seperator {
      display: none;
    }
  }
}
</style>

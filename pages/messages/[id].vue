<script setup lang="ts">
import {useStore} from "~/store";

const {messages} = useStore()
const id = useRoute().params.id;
const message = computed(() => messages.find(x => x.id === id));
const chat = ref("")
</script>

<template>
  <div class="message-content" :key="id">
    <div class="message-header">
      <q-avatar color="transparent" size="40px">
        <q-img :src="message?.img" alt="Message Avatar Image"/>
      </q-avatar>
      <div class="">
        <p class="font-bold grid">{{ message?.name }} <span class="text-acc">@{{ message?.handle }}</span></p>
      </div>
      <q-btn class="text-sec" dense flat round icon="o_more_vert"/>
    </div>
    <div class="messaging">
      <div v-for="(content, i) in message?.content" :key="i" class="grid items-center w-full gap-3">
        <q-chat-message
            class="chat-header"
            :label="content?.date"
        />

        <q-chat-message
            v-for="(chatbox, ind) in content?.data"
            :key="ind"
            :text="[chatbox?.text]"
            :sent="chatbox?.sent"
            :stamp="chatbox?.stamp"
        />
      </div>
    </div>
    <div class="message-footer">
      <q-btn
          dense
          flat
          round
          size="40"
          icon="o_add_a_photo"
          class="text-sec"/>
      <q-btn
          dense
          flat
          round
          size="40"
          icon="o_attach_file"
          class="text-sec"/>
      <q-input class="w-full" standout v-model="chat">
        <template v-slot:prepend>
          <q-icon name="o_add_reaction"/>
        </template>
        <template v-slot:append>
          <q-icon name="o_mic"/>
        </template>
        <template v-slot:after>
          <q-btn round dense flat icon="send" class="text-sec" size="40"/>
        </template>
      </q-input>
    </div>
  </div>
</template>

<style lang="scss">
</style>
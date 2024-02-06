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
.message-content {
  position: relative;
  height: 100%;
  padding: 70px 10px 50px;

  .message-header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    display: grid;
    grid-template-columns: 60px auto 34px;
    gap: 15px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
    align-items: center;
  }
  .messaging {
    height: calc(100vh - 175px - 70px - 50px);
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 10%;
    padding-right: 10%;
    margin: 0 auto;
    .q-message-sent, .q-message-received:not(.chat-header) {
      width: 70%;
    }
    .q-message-sent {
      justify-self: flex-end;
    }
  }
  .message-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    display: flex;
    gap: 5px;
    padding: 0 10px;
    align-items: center;

    .q-field--standout .q-field__control, .q-field--standout.q-field--highlighted .q-field__control {
      border-radius: 20px;
      background: #CDCFD2 !important;

      [type=text], [type=email], [type=url], [type=password], [type=number], [type=date], [type=datetime-local], [type=month], [type=search], [type=tel], [type=time], [type=week], [multiple], textarea, select {
        background: #CDCFD2 !important;
      }
    }
  }
}
</style>
<script setup lang="ts">
import {useStore} from "~/store";

const {users} = useStore()
const chat = ref("")
const user = ref("")
</script>

<template>
  <div class="message-content">
    <div class="message-header new-message">
      <q-select standout v-model="user" emit-value dense options-dense :options="users">
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section>
              <div class="flex gap-6 items-center">
                <q-avatar color="transparent" size="40px">
                  <q-img :src="scope?.opt?.img" alt="Message Avatar Image"/>
                </q-avatar>
                <div class="">
                  <q-item-label>{{ scope.opt.name }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.handle }}</q-item-label>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </template>

        <template v-slot:selected>
          <div class="flex gap-6 items-center" v-if="user">
            <q-avatar color="transparent" size="40px">
              <q-img :src="user?.img" alt="Message Avatar Image"/>
            </q-avatar>
            <div class="">
              <q-item-label>{{ user?.name }}</q-item-label>
              <q-item-label caption>{{ user?.handle }}</q-item-label>
            </div>
          </div>
          <div class="" v-else>Select User</div>
        </template>
      </q-select>
      <q-btn class="text-sec" dense flat round icon="o_more_vert"/>
    </div>
    <div class="messaging">
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
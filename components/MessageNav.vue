<script setup lang="ts">
    import {useStore} from "~/store";

    const store = useStore()
    const { activeMessage } = storeToRefs(store)
</script>

<template>
  <div class="message-nav">
    <div>
      <a href="#" class="text-gray-400">
        <q-icon name="edit_note"/>
        NEW MESSAGE
      </a>
    </div>
    <div>
      <a href="#" class="text-gray-400">
        <q-icon name="manage_search"/>
        SEARCH MESSAGES
      </a>
    </div>
    <div class="base">
      <a href="#" class="text-gray-400" :class="{active : activeMessage === 'whisper'}"  @click.prevent="activeMessage = 'whisper'">
        WHISPERS
      </a>
    </div>
    <div class="base">
      <a href="#" class="text-gray-400" :class="{active : activeMessage === 'invite'}" @click.prevent="activeMessage = 'invite'">
        INVITES
      </a>
    </div>
    <div class="base">
      <a href="#" class="text-gray-400" :class="{active : activeMessage === 'dispatch'}" @click.prevent="activeMessage = 'dispatch'">
        DISPATCHES
      </a>
    </div>
    <div class="base">
      <a href="#" class="text-gray-400" :class="{active : activeMessage === 'plug'}" @click.prevent="activeMessage = 'plug'">
        PLUGS
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;

  & > div {
    border-left: solid 1px rgba(128, 128, 128, 0.44);
    &.base {
      a {
        justify-content: center;
        transition: .3s ease-in-out;
        &.active {
          color: #1e4f88;
        }
      }
      border-top: solid 1px rgba(128, 128, 128, 0.44);
    }
    a {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px;
      i {
        font-size: 2rem;
      }
    }
    &:first-of-type {
      grid-column-start: span 2;
      border: solid 0;
    }

    &:nth-of-type(2) {
      grid-column-start: span 2;
    }

    &:nth-of-type(3) {
      border-left: solid 0;
    }
  }
}
</style>
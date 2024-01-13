<template>
      <q-card class="affair" link @click="router?.push(`/sitadel/${affair?.id}`)">
        <q-img
            :src="`/${affair?.image}`"
            height="170px"
            cover=""
        />
        <q-card-section>
          <p class="q-title">
            {{ affair?.title }}
          </p>
          <p class="text-sec q-sub-title mt-2">
            <span class="sub-small rakkas">{{ affair?.type === 'tourney' ? 'TRY' : 'EVT' }}</span>#{{
              affair?.handle }}
          </p>
          <div class="mt-4">
            <span v-if="affair?.price">
              <span class="font-bold">{{ affair?.price }}</span> <span>Cash Prize</span>
            </span>
              <span v-if="affair?.extraPrize"> and {{ affair?.extraPrize }}</span>
          </div>
          <p v-if="affair?.deadline">Entry Deadline: {{ affair?.deadline }}</p>
          <p v-if="affair?.date">{{ affair?.date }}</p>
          <p v-if="affair?.address">{{ affair?.address }}</p>
        </q-card-section>
      </q-card>
</template>

<script lang="ts" setup>
const router = useRouter()
import type {PropType} from "vue";
import type {Affair} from "~/data/Models";

defineProps({
  affair: Object as PropType<Affair>
});
  const show = ref(false)
</script>

<style lang="scss">

</style>

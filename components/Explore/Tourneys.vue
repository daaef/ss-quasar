<script setup lang="ts">
  import {useStore} from "~/store";
  import { ref } from 'vue';

  const fromDate = ref(null);
  const toDate = ref(null);
  const fromShow = ref(true);
  const toShow = ref(true);

  const openPopup = () => {
    fromShow.value = true;
  };
  const gender = ref("")
  const country = ref("")
  const states = ref([])
  const state = ref(null)
  const { countries } = useStore()


  watchEffect(async () => {
    if (country.value) {
      const a = countries.find(d_country => {
        console.log('d_country is', d_country)
        console.log('country is', country.value)
        return d_country.name === country.value
      }) ?? {}
      states.value = a?.states
    }
  })

</script>

<template>
  <div class="">
    <div class="ss-search-filters">
      <div class="tourney-filters">
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Sertification" />
<!--        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Continents" />-->
        <q-select
            standout
            v-model="country"
            dense
            options-dense
            :options="countries"
            option-label="name"
            emit-value option-value="name"
            label="Country"
        />
        <q-select
            standout
            v-model="state"
            dense
            options-dense
            :options="states"
            option-label="name"
            option-value="name"
            emit-value
            label="State"
        />
      </div>
      <div class="people-filters-2">
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Registration Fee Status" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Category" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Niche" />
        <div>
          <q-input
              v-model="fromDate"
              standout
              dense
              :rules="['required']"
              label="Starts from"
          >
            <q-popup-proxy :trap-focus="false">
              <q-date
                  v-model="fromDate"
                  today-btn
                  type="date"
                  flat
                  minimal
                  mask="DD-MM-YYYY"
                  @close="fromShow = false"
              >
                <q-btn v-close-popup label="Close" color="primary" flat />
              </q-date>
            </q-popup-proxy>
          </q-input>
        </div>
        <div>
          <q-input
              v-model="toDate"
              standout
              dense
              :rules="['required']"
              label="Ends on"
          >
            <q-popup-proxy :trap-focus="false">
              <q-date
                  today-btn
                  mask="DD-MM-YYYY"
                  v-model="toDate"
                  type="date"
                  flat
                  minimal
              >
                <q-btn v-close-popup label="Close" color="primary" flat />
              </q-date>
            </q-popup-proxy>
          </q-input>
        </div>
      </div>
      <q-separator
          class="my-8"
          color="#a5a5a5"
          size="1px"
      />
    </div>
  </div>
</template>

<style scoped>
.empty-message {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script setup lang="ts">
  import {useStore} from "~/store";

  const gender = ref("")
  const sertification = ref("")
  const continent = ref("")
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
      <div class="people-filters">
        <q-select
            v-model="gender"
            dense
            standout
            :options="['All', 'Female']"
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
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Interests/Hobbies" />
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
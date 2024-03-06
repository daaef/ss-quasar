<script setup lang="ts">
  const gender = ref("")
  const sertification = ref("")
  const continent = ref("")
  const country = ref("")
  const state = ref("")
</script>

<template>
  <div class="">
    <div class="ss-search-filters">
      <div class="people-filters">
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Gender" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Sertification" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            hint="Location"
            label="Continents" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Countries" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="States" />
      </div>
      <div class="people-filters-2">
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="School" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="Interests/Hobbies" />
        <q-select
            v-model="gender"
            dense
            standout
            :options="['Male', 'Female']"
            label="SideHustle/Profession" />
      </div>
      <hr>
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
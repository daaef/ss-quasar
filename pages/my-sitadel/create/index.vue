<script setup lang="ts">
import {useStore} from "~/store";

definePageMeta({
  layout: "creation-mode"
});
const name = ref('')
const handle = ref('')
const states = ref([])
const country = ref(null)
const state = ref(null)
const code = ref("+234")
const step = ref(1)
const stepper = ref(null)

/*
const formStuff = reactive({
  country: null,
  state: null,
  code: "234",
  password: '',
})
*/

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

const { countries, countryCodes } = useStore()
</script>

<template>

  <section class="py-8 bg-white dark:bg-gray-900 lg:py-0 h-screen">
    <div class="lg:flex h-full">
      <div class="hide-on-mob w-full max-w-md p-12 lg:h-screen lg:block bg-acc">
        <div class="flex items-center justify-between mb-8 space-x-4">
          <q-btn flat dense class="flex items-center text-2xl font-semibold text-white">
            <q-img fit="contain" height="60px" width="50px" class="" src="/favicon.png" />
          </q-btn>
          <q-btn flat @click.prevent="$router.go(-1)" class="normal-case text-white" dense icon="chevron_left">
            Go back
          </q-btn>
        </div>
        <div class="block p-8 text-white rounded-lg bg-primary-500">
          <h2 class="mb-4 text-2xl font-semibold">Build a new Sitadel</h2>
          <!--          <p class="mb-4 font-light text-primary-100 sm:text-lg">30-day free trial</p>-->
          <p class="font-light text-[.93rem]">A sitadel is a brand, business,
            organization, company, etc,
            that represents an ideal and can host
            events, competitions, olympiads,
            pageants, tournaments,  contests
            or even grant scholarship
            programmes.</p>
        </div>
      </div>
      <div class="flex flex-col justify-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
        <div class="q-pa-md">

          <q-stepper
              v-model="step"
              ref="stepper"
              color="primary"
              animated
              class="w-full"
          >
            <q-step
                :name="1"
                title="Name"
                icon="settings"
                :done="step > 1"
                style="min-height: 200px;"
                class="py-8"
            >
              <form action="#" class="flex gap-y-9 justify-center">
                <div class="w-full">
                  <q-input dense hide-hint standout v-model="name" label="What is the name of your Sitadel?" hint="This is the full name of the brand, business, organization, company, etc.
You can always change or modify the name later. " />
                </div>
                <div class="w-full">
                  <q-input dense hide-hint counter maxlength="10" standout v-model="handle" label="How should we refer to your Sitadel on ScoutSity?" hint="This is the short version of the name of the sitadel which will be used to refer
to the sitadel on SityWatch. It can be an abbreviation, an acronym, etc. Just keep it short and unique." />
                </div>
              </form>
            </q-step>

            <q-step
                :name="2"
                title="Info"
                icon="create_new_folder"
                :done="step > 2"
                style="min-height: 200px;"
            >
              <form action="#" class="flex gap-y-9 justify-center">
                <div class="w-full">
                  <q-input type="textarea" dense hide-hint counter maxlength="200" standout v-model="name" label="What is your Sitadel about?" hint="Here, briefly let people know what the sitadel is about or what the sitadel represents.
No need to go into details, there will be space for that later.
Just capture what your sitadel entails in a few words." />
                </div>
                <div class="w-full">
                  <q-input hide-hint dense standout v-model="handle" label="Does your Sitadel have a website?" hint="If your sitadel has a website or any sort of presence on the internet that you
would like people to visit, you can put the link below." />
                </div>
                <div class="w-full">
                  <q-input hide-hint dense standout v-model="handle" label="Email" />
                </div>
                <div class="w-full">
                  <q-input hide-hint dense standout v-model="handle" label="Phone Number" :mask="`(+${code}) ### ### ####`" hint="Make it easier for people to contact via mobile. NB: don't type in the first '0' in your phone number">
                    <template v-slot:before>
                      <q-select standout v-model="code" emit-value dense options-dense option-label="phone_code" option-value="phone_code" :options="countryCodes">
                        <template v-slot:option="scope">
                          <q-item v-bind="scope.itemProps">
                            <q-item-section>
                              <q-item-label>{{ scope.opt.name }}</q-item-label>
                              <q-item-label caption>{{ scope.opt.phone_code }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </template>
                  </q-input>
                </div>
                <div class="w-full">
                  <h4 class="line-normal font-medium text-left mb-4">Where is your sitadel located?</h4>
                  <div class="w-full grid grid-cols-2 gap-x-4">
                    <q-select class="w-full" standout v-model="country" dense options-dense :options="countries" option-label="name" emit-value option-value="name" label="Country" />
                    <q-select class="w-full" standout v-model="state" dense options-dense :options="states" option-label="name" option-value="name" emit-value label="State" />
                  </div>
                </div>
                <div class="w-full">
                  <q-input hide-hint dense standout v-model="handle" label="Address" hint="You can put in the office address here if it has one." />
                </div>
              </form>
            </q-step>

            <q-step
                :name="3"
                title="Image"
                icon="assignment"
                :done="step > 3"
                style="min-height: 200px;"
            >
              This step won't show up because it is disabled.
            </q-step>

            <q-step
                :name="4"
                title="Confirm"
                icon="add_comment"
                style="min-height: 200px;"
            >
              Try out different ad text to see what brings in the most customers, and learn how to
              enhance your ads using features like ad extensions. If you run into any problems with
              your ads, find out how to tell if they're running and how to resolve approval issues.
            </q-step>

            <template v-slot:navigation>
              <q-stepper-navigation class="flex">
                <q-btn @click="stepper.next()" class="btn-gradient" :label="step === 4 ? 'Finish' : 'Next'" />
                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
              </q-stepper-navigation>
            </template>

            <template v-slot:message>
              <q-banner v-if="step === 2" class="bg-sec text-white q-px-lg">
                What would you like
                people to know
                about your sitadel?
                This information would
                enable you connect with sitizens
                who share the same interests
              </q-banner>
              <q-banner v-else-if="step === 3" class="bg-sec text-white q-px-lg">
                The alignment of the backdrop
                and the profile picture
                is a representation
                of how your sitadel’s profile
                would look like.
              </q-banner>
              <q-banner v-else-if="step === 4" class="bg-acc text-white q-px-lg">
                Cross check to make sure
                all the details are how you’d want
                them to be.
                Use the progress bar in navigating
                back to previous steps to make
                any changes.
              </q-banner>
            </template>
          </q-stepper>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
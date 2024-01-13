<template>
  <div class="right-sidebar items-end pt-6">
    <div class="flex w-full justify-end">
      <div class="inline-grid grid-cols-3 gap-x-2">
        <q-btn dense icon="o_search" size="15px" flat rounded/>

        <q-btn dense flat rounded>
          <q-avatar color="transparent" size="40px">
            <q-img src="/nasir.png" alt="Gist Avatar Image"/>
          </q-avatar>
          <q-menu max-width="240px">
            <q-list style="min-width: 230px" class="my-sitadels">
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="/nasir.png" alt="Gist Avatar Image"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Nasir Gambo</q-item-label>
                  <q-item-label caption>View my look</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="arrow_right"/>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item-label header>SITADELS</q-item-label>
              <q-separator/>
              <q-item clickable v-close-popup to="/my-sitadel">
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="/monopoly.png" alt="Gist Avatar Image"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Nasir Monopoly Game Club</q-item-label>
                  <q-item-label caption>@NasirMGC</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-img src="/photography.png" alt="Gist Avatar Image"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Nasir Kingly Touch Photography</q-item-label>
                  <q-item-label caption>@NKTPhotography</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item dense clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="fas fa-random"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Log into another look</q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="o_add_home"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Build a new sitadel</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item dense clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="o_settings"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Settings</q-item-label>
                </q-item-section>
              </q-item>
              <q-item dense clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="o_quiz"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Help</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator/>
              <q-item dense clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar>
                    <q-icon name="o_logout"/>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn dense flat icon="list" size="44" rounded/>
      </div>
    </div>
    <div class="grid sidebar-content gap-3 px-4 py-2">
      <q-card elevation="1" class="rounded-lg">
        <q-card-section class="flex items-center justify-between pb-0">
          Your Sitadels
          <q-btn
              dense
              flat
              icon="o_more_horiz"
              color="#1e4f88"/>
        </q-card-section>
        <q-card-section>
          <div class="sitadel-title gap-x-4">
            <q-avatar color="transparent" size="64">
              <q-img src="/nasir.png" alt="Gist Avatar Image"/>
            </q-avatar>
            <span class="text-acc text-lg ml-2 font-bold">@NasirMGC</span>
          </div>
          <a class="sitadel-overview block flex pl-14">
            <q-icon class="text-lg" name="o_notifications"/>
            <span class="ml-2 font-semibold">5 new notifications</span>
          </a>
          <a class="sitadel-overview block mt-3 flex pl-14">
            <q-icon class="text-lg" name="o_switch_account"/>
            <span class="ml-2 font-semibold">Switch to sitadel</span>
          </a>
        </q-card-section>
      </q-card>
      <q-card elevation="2" class="rounded-lg">
        <q-card-section class="flex items-center justify-between pb-0">
          <span class="font-bold">Ad</span>
          <q-btn
              dense
              flat
              icon="o_more_horiz"
              class="text-sec"/>
        </q-card-section>
        <q-card-section>
          <p class="text-center font-bold">Subscribe with N100 airtime only
            and tap into your full potential
            with SityWatch Pro.</p>
          <div class="flex justify-center my-4">
            <q-img max-width="100" src="/ad-img.png"/>
          </div>
          <h4 class="text-center font-semibold">BENEFITS</h4>
          <ul class="text-center grid gap-2">
            <li>Appear on the search list
              of renowned talent scouts.
            </li>
            <li>Gain access to lucrative
              opportunities tailored to
              your interests & side hustles.
            </li>
            <li>Network with professionals and
              other enthusiasts who share
              your goals and passions.
            </li>
            <div class="p-4">
              <a href="#" class="btn-gradient">FREE 30-DAY TRIAL</a>
            </div>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  menu: Boolean,
  className: String
})

const drawer = ref(true);
watch(() => props.menu, (first, second) => {
  toggleDrawer()
});

const toggleDrawer = () => {
  drawer.value = !drawer.value
}
const open = ref;
</script>

<style lang="scss">
.right-sidebar {
  height: 100vh;
  .sidebar-content {
    height: calc(100vh - 72px);
    overflow-y: auto;
  }
}
</style>

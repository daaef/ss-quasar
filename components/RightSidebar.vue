<template>
	<q-drawer
    show-if-above
    side="right" 
    :bordered="false"
		:width="320">
		<div class="grid gap-3 px-4 py-2">
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
							<q-img src="/nasir.png" alt="Gist Avatar Image" />
						</q-avatar>
						<span class="text-acc text-lg ml-2 font-bold">@NasirMGC</span>
					</div>
          <a class="sitadel-overview block flex pl-14">
            <q-icon class="text-lg" name="o_notifications" />
            <span class="ml-2 font-semibold">5 new notifications</span>
          </a>
          <a class="sitadel-overview block mt-3 flex pl-14">
            <q-icon class="text-lg" name="o_switch_account" />
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
            <q-img max-width="100" src="/ad-img.png" />
          </div>
          <h4 class="text-center font-semibold">BENEFITS</h4>
          <ul class="text-center grid gap-2">
            <li>Appear on the search list
              of renowned talent scouts. </li>
            <li>Gain access to lucrative
              opportunities tailored to
              your interests & side hustles.</li>
            <li>Network with professionals and
              other enthusiasts who share
              your goals and passions.</li>
            <li class="p-4">
              <a href="#" class="btn-gradient">FREE 30-DAY TRIAL</a>
            </li>
          </ul>
				</q-card-section>
			</q-card>
		</div>
	</q-drawer>
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

<style></style>

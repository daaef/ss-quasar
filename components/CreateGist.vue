<template>
	<div class="create-gist-wrapper">
		<q-card class="rounded-xl" color="#fafafa" elevation="1">
			<q-card-section>
				<div class="gist-card-header flex justify-start items-center">
					<q-avatar color="transparent" size="94">
						<q-img src="/nasir.png" alt="Gist Avatar Image" />
					</q-avatar>
					<div class="ml-4">
						<p class="text-acc font-bold mb-2 text-md">@nasir_gambo</p>
						<!-- label="Visibility" -->
						<q-select
              v-model="visibility"
              dense
							standout
							:options="['Public', 'Private', 'Draft']"
							label="Visibility" />
					</div>
				</div>
				<div class="main-gist mt-4">
<!--					<q-input
            v-model="gist"
            type="textarea"
            standout
						label="Create a gist"
						class="mt-4"
						variant="solo"
						rows="2"
						placeholder="Hey Nasir, let people know the latest gist. Add pics, vids, voice-notes, hashtags or cite others if you like" />-->
          <q-editor
              v-model="gist"
              :definitions="{
        bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
      }"
          />
				</div>
			</q-card-section>

			<q-card-actions class="flex justify-center">
				<div class="gist-action-grid grid grid-cols-3 gap-x-4">
					<q-btn
						dense
						flat
            round
						icon="o_add_a_photo"
						class="text-sec"/>
					<q-btn
						dense
						flat
            round
						icon="o_attach_file"
						class="text-sec"/>
					<q-btn
						dense
						flat
            round
						icon="o_mic"
						class="text-sec"/>
				</div>
			</q-card-actions>
		</q-card>
	</div>
</template>

<script lang="ts" setup>
const visibility = ref('')
// const gist = ref()
const gist =
    ref('Here we are overriding the <b>bold</b> command to include a label instead of an icon and also changing its tooltip.')
</script>

<style lang="scss"></style>

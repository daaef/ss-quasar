<template>
  <q-drawer
      show-if-above v-model="drawer"
      side="left"
      :bordered="false"
      :mini="mini"
      :width="250"
  >
    <!-- drawer content -->
    <div class="drop-gist">
      <q-btn dense flat round icon="create" class="btn-gradient">
        {{ mini ? '' : 'Drop a Gist' }}
      </q-btn>
    </div>
    <q-list class="side-navigation">
      <q-item v-for="(item, i) in items" :key="i" class="q-my-sm" clickable :to="item?.href" active-class="active">
        <q-item-section avatar>
          <q-icon :name="item?.icon" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item?.text }}</q-item-label>
        </q-item-section>

      </q-item>
    </q-list>
  </q-drawer>
</template>

<script lang="ts" setup>
	const drawer = ref(false);
	const mini = ref(true);
  const props = defineProps({
    menu: Boolean,
    className: String
  })

  watch(() => props.menu, (first, second) => {
    toggleDrawer()
  });

  const toggleDrawer = () => {
    drawer.value = !drawer.value
  }


  const items = ref([
    { text: "Home", icon: "o_home", href: "/" },
    { text: "Gist", icon: "sym_o_communication", href: "/gists" },
    { text: "Notifications", icon: "o_notifications", href: "/notifications" },
    { text: "Messages", icon: "o_forum", href: "/messages" },
    { text: "Explore", icon: "o_explore", href: "/explore" },
    {
      text: "Bookmarks",
      icon: "o_bookmarks",
      href: "/bookmarks",
    },
  ]);
	const route = useRoute();
</script>

<style lang="scss">
  .q-drawer--mini {
    .drop-gist {
      display: flex;
      justify-content: center;

      .q-btn {
        &.btn-gradient {
          padding: 0;
        }
      }
    }
  }
  .drop-gist {
    .q-icon {
      border: solid 2px ;
      border-radius: 50%;
      padding: 3px;
      font-size: .8rem;
    }
    .q-btn__content {
      display: flex;
      gap: 5px;
    }
  }

</style>

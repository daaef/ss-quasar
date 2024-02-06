<template>
  <div class="left-sidebar" :class="{'q-drawer--mini': mini}">
    <!-- drawer content -->
    <div class="logo py-6">
      <q-img width="50px" fit="contain" loading="lazy" class="dash-logo" src="/favicon.png" alt="Logo"/>
    </div>
    <div class="drop-gist">
      <button class="btn-gradient">
        <q-icon name="create"/>
        <span v-if="!mini">Drop a Gist</span>
      </button>
    </div>
    <q-list class="side-navigation">
      <q-item v-for="(item, i) in items" :key="i" class="q-my-sm" clickable :to="item?.href" active-class="active">
        <q-item-section avatar>
          <q-icon :name="item?.icon" text-color="white">
            <q-tooltip anchor="center end" self="center left">
              {{ item?.text }}
            </q-tooltip>
          </q-icon>
        </q-item-section>

        <q-item-section v-if="!mini">
          <q-item-label>{{ item?.text }}</q-item-label>
        </q-item-section>

      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts" setup>

const drawer = ref(false);
const props = defineProps({
  menu: Boolean,
  mini: Boolean,
  className: String
})

watch(() => props.menu, (first, second) => {
  toggleDrawer()
});

const toggleDrawer = () => {
  drawer.value = !drawer.value
}


const items = ref([
  {text: "Home", icon: "o_home", href: "/"},
  {text: "Gist", icon: "sym_o_communication", href: "/gists"},
  {text: "Notifications", icon: "o_notifications", href: "/notifications"},
  {text: "Messages", icon: "o_forum", href: "/messages"},
  {text: "Explore", icon: "o_explore", href: "/explore"},
  {
    text: "Bookmarks",
    icon: "o_bookmarks",
    href: "/bookmarks",
  },
]);
const route = useRoute();
</script>

<style lang="scss">
.left-sidebar {
  .logo {
    padding-left: 14px;
  }

  &.q-drawer--mini {
    overflow-x: hidden;

    .logo {
      .dash-logo {
        width: 35px !important;
      }
    }
  }
}

.q-drawer--mini {
  .drop-gist {
    display: flex;
    justify-content: center;
    padding-left: 0;

    .q-btn {
      &.btn-gradient {
        padding: 0;
      }
    }
  }
}

.drop-gist {
  padding-left: 14px;
  padding-bottom: 10px;

  .q-icon {
    border: solid 2px;
    border-radius: 50%;
    padding: 3px;
    font-size: .8rem;
  }

  button {
    display: flex;
    gap: 5px;

    span {
      font-weight: 500;
    }
  }
}

</style>

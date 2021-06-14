<template>
  <div class="main grid">
    <aside class="side-nav sticky">
      <side-nav />
    </aside>

    <article class="main-content">
      <language-nav class="languages" />
      <component :is="selectedTab" class="component-wrapper">
        <slot />
      </component>
    </article>

    <section class="checks sticky">
      <preferred-destination-check-list />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SideNav from '@/views/layouts/SideNav.vue';
import PreferredDestinationCreate from '@/components/PreferredDestinationCreate.vue';
import PreferredDestinationDetails from '@/components/PreferredDestinationDetails.vue';
import PreferredDestinationCheckList from '@/components/PreferredDestinationCheckList.vue';
import LanguageNav from '../layouts/LanguageNav.vue';
// impo

export default {
  name: 'PreferredDestination',

  components: {
    SideNav,
    PreferredDestinationCreate,
    PreferredDestinationDetails,
    PreferredDestinationCheckList,
    LanguageNav,
    // preferred
  },

  computed: {
    selectedTab() {
      if (this.currentTab) {
        return this.currentTab;
      }

      return 'div';
    },

    ...mapState(['currentTab']),
  },
};
</script>

<style scoped>
.main {
  grid-template-columns: 1.5fr 4fr 1.4fr;
  min-height: calc(100vh - 50px);
}

.main:nth-child() {
  min-height: 100vh;
}

.side-nav {
  top: 60px;
  overflow-y: auto;
  height: calc(100vh - 70px);
  background-color: var(--gray-lighter);
}

.side-nav,
.main-content,
.checks {
  padding-top: 10px;
}

.main-content {
  margin-left: 50px;
}

.languages {
  padding: 10px 0;
  background-color: var(--white);
  z-index: 1111;
}

.component-wrapper {
  max-width: 58vw;
  padding: 20px 0 100px;
}

.checks {
  top: 80px;
}
</style>

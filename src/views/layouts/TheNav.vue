<template>
  <nav class="grid">
    <section class="app-detail">LOGO</section>

    <section class="nav-options flex-row">
      <button
        :class="[option.name === selectedNav ? 'active' : '']"
        v-for="option in navOptions"
        :key="option.name"
        @click="changepage(option.name)"
      >
        {{ option.name }}
      </button>
    </section>

    <section class="page-options">
      <span>Bookmark</span>
      <span>Bell</span>
      <span>Avatar</span>
    </section>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      selectedNav: 'Create',

      navOptions: [
        {
          name: 'Discover',
        },
        {
          name: 'Create',
        },
        {
          name: 'Download',
        },
      ],
    };
  },

  methods: {
    changepage(name) {
      if (['Discover', 'Create'].includes(name)) {
        this.selectedNav = name;

        switch (this.selectedNav) {
          case 'Create':
            this.setActiveOption('');
            this.changeView('PreferredDestinationCreate');
            break;
          default:
            this.setErrorMessage(`"${name}" presently unavailable`);
        }
      } else this.setErrorMessage(`"${name}" presently unavailable`);
    },

    ...mapActions(['setActiveOption', 'changeView', 'setErrorMessage']),
  },
};
</script>

<style scoped>
nav {
  grid-template-columns: 1fr 3fr 1fr;
  padding: 20px;
  box-shadow: 0 0 5px 0.5px var(--gray);
}

.nav-options {
  justify-content: center;
  align-items: center;
}

.nav-options button {
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: var(--white);
  transition: all 0.85s ease;
}

.nav-options button:not(:last-child) {
  margin-right: 10px;
  color: var(--gray-dark);
}

.nav-options button:not(:last-child):hover {
  border-color: var(--blue);
}

.active {
  color: var(--blue) !important;
}

.nav-options button:last-child {
  color: var(--white);
  background-color: var(--gray);
}

.nav-options button:last-child:hover,
.nav-options button:last-child:focus {
  background-color: var(--blue);
}

.page-options {
  display: flex;
  justify-content: right;
  align-items: center;
}

.page-options span:not(:first-child) {
  margin-left: 10px;
}
</style>

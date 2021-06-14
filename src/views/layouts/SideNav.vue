<template>
  <div>
    <h3 class="header" @click="updateActiveOption('Description')">Description</h3>

    <h3
      :class="[
        activeMenu(articles, activeOption) ? 'active-option' : '',
        'header',
      ]"
      @click="revealPoints = !revealPoints"
    >
      Points
    </h3>

    <section v-if="revealPoints">
      <transition-group name="fly-in" appear tag="div">
        <div
          :class="[
            article.name === activeOption ? 'active' : '',
            'sub-header grid',
          ]"
          v-for="(article, index) in articles"
          :key="article.name"
          @click="updateActiveOption(article.name)"
        >
          <span>{{ ++index }}</span>
          <h4>{{ article.name }}</h4>
        </div>
      </transition-group>

      <transition name="fly-in" appear tag="div">
        <div
          :class="[
            'Create' === activeOption ? 'active' : '',
            'sub-header grid',
          ]"
          @click="updateActiveOption('Create')"
        >
          <span class="plus">+</span>
          <h4>Create a point</h4>
        </div>
      </transition>
    </section>

    <h3 class="header" @click="updateActiveOption('Media')">Media</h3>

    <h3 class="header" @click="updateActiveOption('Settings')">Settings</h3>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      revealPoints: false,
      articles: [
        {
          name: 'Abbesses Metro Station',
        },
        {
          name: 'Pigalle and the Moulin Railway Station',
        },
      ],
    };
  },

  computed: {
    ...mapState(['activeOption']),
  },

  methods: {
    activeMenu(group, item) {
      return group.some((el) => el.name === item);
    },

    updateActiveOption(name) {
      if (name === 'Abbesses Metro Station') {
        this.setActiveOption(name);
        this.changeView('PreferredDestinationDetails');
      } else this.setErrorMessage(`"${name}" presently unavailable`);
    },

    ...mapActions(['setActiveOption', 'changeView', 'setErrorMessage']),
  },
};
</script>

<style scoped>
.header {
  padding: 15px 30px;
  color: var(--black);
  font-size: var(--font-md);
  font-weight: 600;
  border: 2px solid transparent;
  transition: all 0.5s ease-in-out;
}

.header,
.sub-header {
  cursor: default;
}

.active-option,
.header:hover {
  color: var(--blue);
  border-right-color: var(--blue);
}

[class*='sub-'] {
  grid-template-columns: 1fr 6fr;
  padding: 10px 30px;
  font-size: var(--font-md);
  border-bottom: 2px solid transparent;
  transition: all 0.25s ease;
}

.plus {
  font-size: 30px;
}

[class*='sub-'] h4 {
  margin: auto 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}

[class*='sub-']:hover,
.active {
  color: var(--gray-dark);
  background-color: var(--white);
  border-color: var(--blue);
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
  box-shadow: 0 0 5px -1px var(--gray-light);
}

/* Transitions */
.fly-in-enter {
  transform: translate(20px);
  opacity: 0;
}
.fly-in-enter-active,
.fly-in-leave-active {
  transition: all 0.5s ease;
}

.fly-in-leave-to {
  transform: translate(20px);
  opacity: 0;
}

.fly-in-move {
  transition: all 0.5s ease-in-out;
}
</style>

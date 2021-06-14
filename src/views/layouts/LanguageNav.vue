<template>
  <div class="wrapper">
    <section class="button-group">
      <button
        :class="[languages[index] === selectedLang ? 'active' : '']"
        v-for="(lang, index) in languages"
        :key="lang.index"
        @click="changeLanguage(languages[index])"
      >
        {{ languages[index] }}
      </button>
    </section>
    <button class="add" @click="addLanguage"><span>+</span> Add</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      selectedLang: 'English',
      languages: ['English', 'French', 'Deutch', 'Spanish'],
    };
  },

  methods: {
    changeLanguage(lang) {
      this.selectedLang = lang;
    },

    addLanguage() {
      this.setErrorMessage('Feature presently unavailable');
    },

    ...mapActions(['setErrorMessage']),
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}

button {
  padding: 10px;
  border: 2px solid transparent;
  background-color: var(--white);
  line-height: 1;
  transition: all 0.5s ease-in;
}

button:hover,
.active {
  color: var(--blue);
  border-bottom-color: var(--blue);
}

button.add {
  padding: 0 20px;
  color: var(--gray-light);
  border: 1px solid var(--blue);
  border-radius: 30px;
  background-color: var(--blue-light);
}

button.add span {
  display: inline-block;
  margin-right: 5px;
  font-size: var(--font-xl);
  font-weight: 500;
  line-height: 1;
}

button.add:hover,
button.add:focus {
  color: var(--white);
  background-color: var(--blue);
}
</style>

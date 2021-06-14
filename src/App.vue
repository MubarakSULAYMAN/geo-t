<template>
  <div id="app">
    <the-nav class="top-nav sticky" />
    <router-view/>
    <error-notification/>
  </div>
</template>

<script>
import TheNav from '@/views/layouts/TheNav.vue';
import ErrorNotification from './components/ErrorNotification.vue';

export default {
  components: {
    TheNav,
    ErrorNotification,
  },
};
</script>

<style scoped>
.top-nav {
  top: 0;
  background-color: var(--white);
  z-index: 1111;
}
</style>

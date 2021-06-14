<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },

  created() {
    return this.$router.push('/preferred-destination/create');
  },
};
</script>

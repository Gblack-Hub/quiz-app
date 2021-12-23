<template>
  <div id="homepage-main">
      <Hero />
  </div>
</template>

<script>
import Hero from '../../components/homepage/Hero.vue';

export default {
  name: 'HomePage',
  components: {
    Hero,
  },
};
</script>

<style scoped>
  #homepage-main {
    height: 100vh;
  }
</style>
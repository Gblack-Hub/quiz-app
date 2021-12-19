<template>
  <section>
      <Hero />
  </section>
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
  section {
    height: 100vh;
  }
</style>
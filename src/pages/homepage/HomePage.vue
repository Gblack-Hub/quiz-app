<template>
  <div id="homepage-main">
      <TheHero />
  </div>
</template>

<script>
import TheHero from '../../components/homepage/TheHero.vue';

export default {
  name: 'HomePage',
  components: {
    TheHero,
  },
};
</script>

<style scoped>
  #homepage-main {
    height: 90vh;
  }
</style>
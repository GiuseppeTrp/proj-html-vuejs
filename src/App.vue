<!-- App.vue -->
<script>
import { store } from './store.js';
import AppHeaderHero from './components/AppHeaderHero.vue';
import AppJumbo from './components/AppJumbo.vue';


export default {
  components: {
    AppHeaderHero,
    AppJumbo
  },
  data() 
  {

    store  
  }
};
</script>



<template>
  <div id="app">
    <AppHeaderHero></AppHeaderHero>
    <AppJumbo></AppJumbo>
  </div>
</template>



<style lang="scss">
</style>

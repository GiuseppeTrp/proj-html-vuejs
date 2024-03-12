<!-- App.vue -->
<script>
import { store } from './store.js';
import AppHeaderHero from './components/AppHeaderHero.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppMain from './components/AppMain.vue';


export default {
  components: {
    AppHeaderHero,
    AppJumbo,
    AppMain
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
    <AppMain></AppMain>
  </div>
</template>



<style lang="scss">
</style>

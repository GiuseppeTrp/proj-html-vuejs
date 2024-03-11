<!-- App.vue -->
<script>
import { store } from './store.js';
import AppHeaderHero from './components/AppHeaderHero.vue';


export default {
  components: {
    AppHeaderHero,
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
  </div>
</template>



<style lang="scss">
</style>

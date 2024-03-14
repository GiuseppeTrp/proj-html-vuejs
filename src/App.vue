<!-- App.vue -->
<script>
import { store } from './store.js';
import AppHeaderHero from './components/AppHeaderHero.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppHeaderHero,
    AppJumbo,
    AppMain,
    AppFooter
  },
  data() {
  return {
    menuItems: store.menuItems,
    contHero: store.contHero,

    store  
  };
},
};
</script>



<template>
  <div id="app">
    <AppHeaderHero :menuItem="menuItems" :contHero="contHero"></AppHeaderHero>
    <AppJumbo></AppJumbo>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
  

  
  
</template>



<style lang="scss">
</style>

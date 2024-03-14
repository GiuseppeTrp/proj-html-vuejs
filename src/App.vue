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
    footerItem: store.footerItem,

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
    <AppFooter :footerItem="footerItem"></AppFooter>
  </div>
  

  
  
</template>



<style lang="scss">
button{
  height: 35px;
  border-radius: 30px!important;
  font-size: 12px!important;

}

h4, h3, h5, h6{
  font-weight: bold!important;
}
</style>

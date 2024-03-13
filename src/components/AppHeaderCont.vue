<script>
import { store } from '../store.js';

export default {
  name: 'AppHeaderCont',
  

 

  data() {
    return {
      store
    }
  }
}
</script>


<template>
    <div class="container d-flex flex-column justify-content-start align-items-start p-2 text-white">
        <h2>{{ store.contHero.title1 }}</h2>
        <h2>{{ store.contHero.title2 }}</h2>
        <p class="text-center w-25">{{ store.contHero.parag }}</p>
        <div class="d-flex gap-4">
          <button class="btn btn-warning border-0 text-white text-uppercase store">{{ store.contHero.button1 }}</button>
          <button class="btn btn-info border-0 text-white text-uppercase store">{{ store.contHero.button2 }}</button>
        </div>
      </div>
        
        
</template>


<style lang="scss">

</style>
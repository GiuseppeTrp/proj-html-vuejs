<script>
import { store } from '../store.js';

export default {
   
 
  data() {
    return {
      store
    }
  },
  // Nome componente
  name: 'AppOurWork'
}

</script>

<template>
    <div class="container p-5">
      <div class="text-center container p-3">
        <h3>Our Works</h3>
        <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>
      </div>
  
      <div class="container ">
        <div class="row">
          <div v-for="cover in store.OurWorkCards"  class="col-md-4 mb-4  px-1 ">
            <div class="card image -0">
              <img :src="cover.img"  alt="Immagine">
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-warning text-uppercase fw-bold">
            view our work
    
          </button>

      </div>
      
    </div>
  </template>


 

<style lang="scss">


</style>
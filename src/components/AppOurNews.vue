<script>
import { store } from '../store.js';

export default {
    
  data() {
    return {
      store
    }
  },
  // Nome componente
  name: 'AppOurNews'
  
}
</script>

<template>
    <div class="container-fluid d-flex flex-column text-center p-5 our-news">
      <div>
        <h3>Our News</h3>
        <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>
      </div>
      <div class="container-fluid">
        <div class="row gap-5 justify-content-center">
          <div v-for="card in store.OurNewsCards" class="col-md-3">
            <div class="card d-flex justify-content-center align-items-center">
              <img :src="card.img" alt="" />
            </div>
            <div class="container">
              <h3 class="title fw-bold text-center text-ellipsis">
                {{ card.title }}
              </h3>
            </div>
            <div>
              <p class="text-secondary">{{ card.date }}</p>
            </div>
            <div>
              <p>{{ card.parag }}</p>
            </div>
          </div>
        </div>
        <button class="btn btn-warning text-white text-uppercase fw-bold mt-5">
          go to news
        </button>
      </div>
    </div>
  </template>
<style lang="scss">


.our-news{
    background-color: #F8F8F8;
}

.our-news .title{
    color: #FFA737;
    line-height: 1.4;
    width: 100%;
    white-space: normal; /* Allow wrapping if content exceeds container width */



}


</style>

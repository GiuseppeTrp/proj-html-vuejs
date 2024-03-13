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
    <div class="container-fluid d-flex flex-column text-center p-3 ">
        <div>
            <h5> Our News</h5>
            <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>


        </div>
        <div class="container">
            <div class="row d-flex justify-content-center">
            <!-- Iterazione attraverso le carte -->
                <div v-for="card  in store.OurNewsCards" class="col-md-3">
                    <div class="card  ">
                        <img :src="card.img" alt="">
                    </div>
                </div>

               
            </div>
        </div>

    </div>




</template>
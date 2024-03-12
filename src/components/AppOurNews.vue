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
                <div v-for="card  in store.jumboCards" class="col-md-3">
                    <div class="card  ">
                        <div class="card-header border-bottom-0 ">
                            <i :class=card.icon></i>
                        </div>
                        <div class="card-body">
                        
                            <h6>{{ card.title }}</h6>
                            <div class="container">
                                <p class=" container parag tex-center fw-light fs-small text-center">{{ card.parag }}</p>


                            </div>
                            
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

    </div>




</template>
<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  },
  // Nome componente
  name: 'AppOurPlans'
}
</script>

<template>
    <div class="container-fluid d-flex flex-column text-center p-3  our-plans">
        <div class="text-white">
            <h5> Our Plans</h5>
            <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>


        </div>
        <div class="container p-5">
            <div class="row d-flex justify-content-center">
            <!-- Iterazione attraverso le carte -->
                <div v-for="card  in store.OurPlansCards" class="col-md-3">
                    <div class="card  ">
                        <div class="card-header border-bottom-0 ">
                            <h6>{{ card.plane }}</h6>
                        </div>
                        <div class="card-body">
                        
                            <h6>{{ card.price }}</h6>
                            <p>
                                {{ card.project }}
                            </p>
                            <p>
                                {{ card.storage }}
                            </p>
                            <p>
                                {{ card.users }}
                            </p>
                            <button class="btn btn-warning">
                                ciao

                            </button>
                            
                            
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

    </div>




</template>


<style lang="scss">

div i{
    color: #FFA737;
}

.parag{
    font-size: 12px;
    
}

.our-plans{
    background-image: url(../assets/img/background1.jpg);
}






</style>
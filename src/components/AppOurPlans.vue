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
            <h3> Our Plans</h3>
            <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>


        </div>
        <div class="container p-5">
            <div class="row d-flex justify-content-center">
            <!-- Iterazione attraverso le carte -->
                <div v-for="card  in store.OurPlansCards" class="col-md-3">
                    <div class="card  p-2">
                        <div class="card-header border-bottom-0 p-2 bg-white title">
                            <h6>{{ card.plane }}</h6>
                        </div>
                        <div class="card-body hover container p-0 ">
                        
                               
                                <div class="color-price ">
                                    <p v-html="card.priceHtml" class="p-2"></p>


                                </div>


                            
                            <p class="p-3">
                                {{ card.project }}
                            </p>
                            <p class="p-3">
                                {{ card.storage }}
                            </p>
                            <p class="p-3">
                                {{ card.users }}
                            </p>
                            <div class="button-bg container-fluid p-3">
                                <button class="btn btn-outline-primary text-uppercase  p-2 fw-bold">
                                    start today
    
                                </button>

                            </div>
                           
                            
                            
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

    </div>




</template>


<style lang="scss">
@use '../src/variables' as *;




  .parag {
    font-size: 12px;
  }

  .our-plans {
    background-image: url(../assets/img/background1.jpg);
  }

 

  /* Selettore per ogni elemento p all'interno di .card-body */
  .card-body.hover i:hover,

  .card-body.hover p:nth-child(1):hover,
  .card-body.hover p:nth-child(2):hover,
  .card-body.hover p:nth-child(3):hover,
  .card-body.hover p:nth-child(4):hover {
    transform: translateY(-2px); /* Al passaggio del mouse, solleva l'elemento di 2px */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Aggiunge un'ombra */
    background-color: $bgColour ;
    border-top: 1px solid rgba(0, 0, 0, 0.2); /* Aggiunge un bordo superiore sottile */
  border-bottom: 1px solid rgba(0, 0, 0, 0.2); /* Aggiunge un bordo inferiore sottile */
  }


  .price {
    font-family: sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin: 0;
    padding: 0;
  }
  
  .currency {
    font-size: 16px;
    margin-right: 4px;
  }
  
  .integer-part {
    margin-right: 2px;
  }
  
  .decimal-part {
    font-size: 16px;
    position: relative;
    top: -4px;
  }
  
  .time {
    font-size: 14px;
    margin-left: 4px;
  }

  .color-price {
    color:$colorPrice!important;
  }
.button-bg{
    background-color: $bgColour;
}
</style>
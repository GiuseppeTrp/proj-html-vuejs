<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  },
  // Nome componente
  name: 'AppJumbo'
}
</script>

<template>
    <div class="container-fluid d-flex flex-column text-center p-3 ">
        <div>
            <h5> Meet The New Agency SEO Template</h5>
            <h5>From The Avada Team</h5>
            <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>


        </div>
        <div class="container">
            <div class="row">
            <!-- Iterazione attraverso le carte -->
                <div v-for="card  in store.contCard" class="col-md-4">
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

                <div class="container bground">
                    <img src="../assets/img/agency-seo-desk-front-1200x570.jpg" alt="">

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



.bground img{
width: 70%;

object-fit: contain;
}


</style>
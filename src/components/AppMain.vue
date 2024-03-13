<script>
import { store } from '../store.js';
import AppOurNews from './AppOurNews.vue';
import AppOurPlans from './AppOurPlans.vue';
import AppOurWork from './AppOurWork.vue';

export default {
    components: {
    AppOurWork,
    AppOurPlans,
    AppOurNews
  },
  data() {
    return {
      store
    }
  },
  // Nome componente
  name: 'AppMain'
  
}
</script>

<template>
    <div class="container-fluid d-flex flex-column text-center   blue text-white bGround">
        <div class="pt-5">
            <h3 class="p-3"> See Our Notch Services</h3>
            <p>Sed ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>


        </div>
        <div class="container   ">
            <div class="row  d-flex justify-content-center p-5">
            <!-- Iterazione attraverso le carte -->
                <div v-for="card  in store.mainCards" class="col-md-3 p-4">
                    <div class="card text-white see-notch ">
                        <div class="card-header border-bottom-0 p-3  icon-cont">
                            <i :class=card.icon></i>
                        </div>
                        <div class="card-body">
                        
                            <h6>{{ card.title }}</h6>
                            <div class="container">
                                <p class=" container parag tex-center fw-light fs-small text-center">{{ card.parag }}</p>


                            </div>
                            <a class="text-warning">
                                Read More
                            </a>
                            
                            
                          
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

    </div>
    <AppOurWork></AppOurWork>
    <AppOurPlans></AppOurPlans>
    <AppOurNews></AppOurNews>







</template>


<style lang="scss">

.see-notch{
    background-color: #091550!important;
}


.icon-cont i{
    color: #FFA737;
}

.parag{
    font-size: 12px;
    
}



.bGround{
  background-image: url('../assets/img/pattern_background.png');
  background-size:contain;
  background-position: left;
  background-color: #010c47;
 

 
}

.blue{
    background-color: #010c47;


}
button{
    border-radius: 30px!important;
}
</style>
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
        <div class="text-center container">
            <h5> Our Work</h5>
            <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>


        </div>
        <div class="container p-5">
            <!-- Prima riga -->
            <div class="row">
                <div v-for="cover in store.OurWorkCards"  class="col-md-4 mb-4">
                    <div class="card">
                        <img :src="cover"class="card-img-top" alt="img">
                    </div>
                </div>
            </div>
        </div>
        



    </div>
    

</template>

<style lang="scss">

.card-img-top img{
    width: 100%;
    
}
</style>
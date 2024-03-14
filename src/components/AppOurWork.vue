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
      <h3>I nostri lavori</h3>
      <p>Invia ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="cover in store.OurWorkCards" :key="cover.id" class="col-md-4 mb-4 px-1">
          <div class="card image card-img-hover">
            <div class="card-overlay"></div> <!-- Aggiunto un overlay per il gradiente -->
            <img :src="cover.img" alt="Immagine">
            <i class="fa fa-link "></i>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-warning text-uppercase fw-bold text-white">Vedi i nostri lavori</button>
    </div>
  </div>
</template>

<style lang="scss">


.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#8317e8, #ff8ac4); /* Applico il gradiente all'overlay */
  opacity: 0; /* Inizialmente nascosto */
  transition: opacity 0.3s ease; /* Transizione fluida per l'opacità */
}

.card:hover .card-overlay {
  opacity: 1; /* Mostra l'overlay al passaggio del mouse */
}

.card-img-hover img:hover {
  filter: blur(5px); /* Applica l'effetto di sfocatura al passaggio del mouse sull'immagine */
}

.card-img-hover i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  visibility: hidden;
}

.card-img-hover:hover i {
  visibility: visible;
}
</style>
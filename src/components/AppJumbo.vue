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
    <div class="container-fluid d-flex flex-column text-center p-3 gray">
      <div>
        <h3>Meet The New Agency SEO Template</h3>
        <h3>From The Avada Team</h3>
        <p>Send ut perspicaciatis unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>
      </div>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <!-- Iterazione attraverso le carte -->
          <div v-for="card in store.jumboCards" class="col-md-3 ">
            <div class="card card-jumbo ">
              <div class="card-header border-bottom-0 bg-white icon-cont p-3 ">
                <i :class="card.icon"></i>
              </div>
              <div class="card-body">
                <h6>{{ card.title }}</h6>
                <div class="container">
                  <p class="container parag tex-center fw-light fs-small text-center">{{ card.parag }}</p>
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
  @use '../src/variables' as *;

  .icon-cont i {
    color: #FFA737;
  }
  
  .parag {
    font-size: 12px;
  }
  
  .bground img {
    width: 70%;
    object-fit: contain;
  }
  
  .card-jumbo:hover {
    filter: brightness(110%); /* Aumenta la luminosità del 20% al passaggio del mouse */
    border: 1px rgb(182, 181, 181) solid;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Aggiunge un'ombra con rilievo */

   

  }
  .card-jumbo p:hover{
    font-weight: bold!important;
  }

  .gray{
    background-color: $bgColour;
  }
  </style>
  
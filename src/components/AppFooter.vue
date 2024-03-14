<script>
// Importa lo store
import { store } from '../store.js';

export default {
  data() {
    return {
      store // Assegna lo store ai dati del componente
    }
  },
  name: 'AppFooter',
  props: {
    footerItem: {
      type: Array,
    },
    
  },
  mounted() {
    // Al caricamento del componente, aggiunge la classe 'active' alla prima immagine nel carousel
    const sliderElement = document.getElementById("testimonials-slider");
    sliderElement.querySelector(".carousel-item:first-child img").classList.add("active");
  }
}
</script>

<template>
  <div >
    <div class="container text-center p-5 d-flex flex-column gap-3 clients">
      <!-- Carousel per i testimonial -->
      <div id="testimonials-slider" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Primo slide con testimonial -->
          <div class="carousel-item active">
            <h4 class="pb-4">What Our Clients Say</h4>
            <div class="d-flex justify-content-center pb-3">
              <img class="border rounded-circle d-flex align testimonial" src="../assets/img/testimonials-1.jpg" alt="">
            </div>
            <p>Ability proceeds from fusion of skills, knowledge, understanding, and imagination, consolidated by experience</p>
            <p class="mb-0">
              <a href="#!" class="link-dark text-decoration-none fw-bold">Luis Desalvo,</a>
              <a href="" class="link-dark text-decoration-none text-uppercase">Creo Tech</a>
            </p>
          </div>
          <!-- Secondo slide con testimonial -->
          <div class="carousel-item">
            <h4 class="pb-4">What Our Clients Say</h4>
            <div class="d-flex justify-content-center pb-3">
              <img class="border rounded-circle d-flex align" src="../assets/img/testimonials-2.jpg" alt="">
            </div>
            <p>Good experience, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto assumenda nostrum enim! Non perferendis temporibus accusantium laudantium? Qui placeat, ut tenetur, deserunt natus numquam accusantium illo consequatur odio harum porro!</p>
            <p class="mb-0">
              <a href="#!" class="link-dark text-decoration-none fw-bold">John Doe,</a>
              <a href="" class="link-dark text-decoration-none text-uppercase">XYZ Company</a>
            </p>
          </div>
        </div>
        <!-- Pulsanti per la paginazione dei testimonial -->
        <div class="testimonial-pagination d-flex justify-content-center p-5" id="fusion-testimonials-1">
          <a href="#testimonials-slider" data-bs-slide-to="0" class="activeSlide border border-black"></a>
          <a href="#testimonials-slider" data-bs-slide-to="1" class="border border-black "></a>
        </div>
      </div>
      <hr>
      <!-- Carousel per le immagini  -->
      <div class="d-flex justify-content-around">
        <!-- Itera sulle immagini -->
        <img v-for="image in store.ClientSays" :src="image.img" alt="SEO CTA">
      </div>
    </div>

    <!-- Sezione di consulenza -->
    <div class="consulation">
      <div class="overlay"></div> <!-- Sovrapposizione per il "velo scuro" -->
      <div class="container-fluid d-flex flex-column text-center p-5">
        <div class="p-5 text-white consulation-text">
          <h4 class>Start Your Free Consultation</h4>
          <p>Sed ut perspicatics unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>
          <button class="btn btn-warning text-uppercase text-white fw-bold btn-consulation ">Contact us now</button>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="foot">
      <div>
        <div class="d-flex justify-content-center p-5 justify-content-center">
          <img  src="../assets/img/logo_seo_1x.png" alt="">
        </div>
        <div class="d-flex ms-5 justify-content-center">
          <!-- Lista dei link -->
          <ul class="mr-auto navbar gap-3 list-unstyled text-dark">
            <!-- Itera sui link del menu -->
            <li v-for="item in footerItem"  class="nav-item">
             
               
                {{ item.text }}
              
              
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Informazioni aggiuntive -->
      <div class="container p-5">
        <div class="row">
          <div class="fusion-text fusion-text-10 fusion-text-no-margin" >
            <p>© Copyright 2012 - 2024 |
              <a href="">Avada Website Builder</a> 
              by <a href="" >ThemeFusion</a> 
              | All Rights Reserved  |  Powered by 
              <a href="http://wordpress.org" >WordPress</a>
            </p>
          </div>
          <!-- Icone aggiuntive -->
          <div class=" text-secondary d-flex gap-4 justify-content-center">
            <a href="#"><i class="fa fa-solid fa-building fa-lg"></i></a>
            <a href="#"><i class="fa fa-solid fa-building fa-lg"></i></a>
            <a href="#"><i class="fa fa-solid fa-building fa-lg"></i></a>
            <a href="#"><i class="fa fa-solid fa-building fa-lg"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../src/variables' as *;

.clients img {
  width: 100px;
}

.consulation {
  position: relative;
  background-image: url('../assets/img/CTA-seo-1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Colore scuro semi-trasparente */
  z-index: 1; /* Imposta il valore z-index per far sovrapporre l'overlay all'immagine di sfondo */
}

.foot {
  background-color: #F8F8F8;
}

.testimonial-pagination {
  display: flex;
  align-items: center;
}

.testimonial-pagination a {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5); /* Colore dei pallini non attivi */
  margin: 0 5px;
  cursor: pointer;
}

.testimonial-pagination a.activeSlide {
  background-color: black; /* Colore del pallino attivo */
}

.consulation-text {
  z-index: 10;
}

.carousel-item{
  background-color: white;
}

</style>

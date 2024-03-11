<script>
import { store } from '../store.js';

export default {
  data() {
    return {
      store
    }
  },
  // Nome componente
  name: 'AppHeaderHero'
}
</script>

<template>
  <header>
    <!-- Barra di navigazione -->
    <nav class="navbar container d-flex justify-content-center gap-5">
      <!-- Logo -->
      <img src="../assets/img/logo_seo_w_1x.png" alt="">

      <div class="d-flex ms-5">
        <!-- Lista dei link -->
        <ul class="mr-auto navbar gap-3 list-unstyled text-white ">
          <!-- Itero sui link  -->
          <li v-for="menuItem in store.menuItems" class="nav-item">
            <!-- Se il text del link è diverso da 'Careers' o 'News'  stampa il text -->
            <a v-if="menuItem.text !== 'Careers' && menuItem.text !== 'News'" class="nav-link">{{ menuItem.text }}</a>
            <!-- Altrimenti -->
            
              
            <a v-else class="nav-link">
              <!-- stampa il text con.. -->
                {{ menuItem.text }}
                <!-- Un pulsante -->
                <button  :class="{
                  'btn btn-outline-warning m-1': menuItem.text === 'Careers',
                  'btn btn-warning  text-white border-0  m-1': menuItem.text !== 'Careers'
                }">
                    <!-- Il testo del pulsante varia in base text del link e diventa 'Apply' se è 'Careers', altrimenti 'Get in Touch Now' -->
                    {{ menuItem.text === 'Careers' ? 'Apply' : 'Get in Touch Now' }}
                </button>
            </a>
          </li>
        </ul>
      </div>
      <div class="container  d-flex flex-column justify-content-start align-items-start p-2 text-white">
        <h2>{{ store.contHero.title1 }}</h2>
        <h2>{{ store.contHero.title2 }}</h2>
        <p class="text-center w-25 ">
           {{ store.contHero.parag }}        
          </p>
        <div class="d-flex gap-4 ">
          <button class="btn btn-warning border-0  text-white text-uppercase">
            {{ store.contHero.button1 }}  
  
  
          </button>
          <button class="btn btn-info border-0 text-white text-uppercase">
            {{ store.contHero.button2 }}  
  
  
          </button>

        </div>
        

      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
/* Stili per il componente, se necessario */
header {
  background-image: url('../assets/img/1-hero-image.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 200px;
  min-height: 500px;
}





button{

  font-size: 8px;
  font-weight: bold;

}

nav{
  font-size: 10px;

}


</style>

<script>
export default {
  props: {
    menuItem: {
      type: Array,
    },
    contHero:{
      type:Object
    }
  },

};
</script>


<template>
  <header>
    <nav class="navbar container d-flex justify-content-center gap-5">
      <img src="../assets/img/logo_seo_w_1x.png" alt="">

      <div class="d-flex ms-5">
        <ul class="mr-auto navbar gap-3 list-unstyled text-white">
          <li v-for="(item, index) in menuItem" :key="index" class="nav-item">
            <a v-if="item.text !== 'Careers' && item.text !== 'News'" class="nav-link">{{ item.text }}</a>
            <a v-else class="nav-link">
              {{ item.text }}
              <button 
              :class="{
                'btn btn-outline-warning m-1': item.text === 'Careers',
                'btn btn-warning text-white border-0 m-1': item.text !== 'Careers'
              }">
              <!-- Il testo del pulsante varia in base al text del link -->
              {{ item.text === 'Careers' ? 'Apply' : 'Get in Touch Now' }}
            </button>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="contHero" class="container d-flex flex-column justify-content-start align-items-start p-2 text-white">
        <h2>{{ contHero.title1 }}</h2>
        <h2>{{ contHero.title2 }}</h2>
        <p class="text-center w-25">{{ contHero.parag }}</p>
        <div class="d-flex gap-4">
          <button class="btn btn-warning border-0 text-white text-uppercase fw-bold">{{ contHero.button1 }}</button>
          <button class="btn btn-info border-0 text-white text-uppercase fw-bold ">{{ contHero.button2 }}</button>
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

/* Effetto di hover per i link nella barra di navigazione */
.nav-link:hover {
  color: yellow; /* Cambia il colore del testo in giallo quando si passa sopra con il mouse */
  cursor: pointer;
}
</style>

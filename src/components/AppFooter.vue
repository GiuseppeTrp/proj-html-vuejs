<script>
import { store } from '../store.js';


export default {

  
  data() {
    return {
      store
    }
  },
  name: 'AppFooter'
  
}
</script>

<template>
    <div class="container text-center p-5 d-flex flex-column gap-3 clients">
        <h4>What Our Clients Say</h4>
        <div class=" d-flex justify-content-center">
          <img  class="border rounded-circle d-flex align" src="../assets/img/testimonials-2.jpg" alt="">


        </div>
        <button class="btn btn-warning"> ciaone</button>
        <p> Ability proceeds from fusion of skills,knolwdge, understanding and imagination, consolidated by experience</p>
        <p class="mb-0">
          <a href="#!" class="link-dark text-decoration-none fw-bold">
                 Luis Desalvo,
               
          </a>


          <a href="" class="link-dark text-decoration-none text-uppercase"> creo tech</a>
        </p>
        <hr>
      
          <div class="d-flex flex-row">
            <img v-for="image in store.footerItem" :src="image" alt="SEO CTA">
          </div>        

    </div>
   <div>
    <div class="p-5 consulation">
      <div class=" container-fluid d-flex flex-column text-center p-5 ">
        <div class="p-5 ">
          <h4 class>Start Your Free Consultation</h4>
          <p>Sed ut perspicatics unde omnis iste natus error sit voluptatem accusantium doloremque laundantium</p>
          <button class="btn btn-warning " > ciao</button>
        </div>
      </div>

    </div>
    <div class="foot">
      <div class="d-flex justify-content-center p-5 justify-content-center ">
          <img  src="../assets/img/logo_seo_w_1x.png" alt="">
        </div>
        <div class="d-flex ms-5 justify-content-center">
          <!-- Lista dei link -->
          <ul class="mr-auto navbar gap-3 list-unstyled text-dark">
            <!-- Itero sui link  -->
            <li v-for="menuItem in store.menuItems" class="nav-item">
              <!-- Se il text del link è diverso da 'Careers' o 'News'  stampa il text -->
              <a v-if="menuItem.text !== 'Careers' && menuItem.text !== 'News'" class="nav-link">{{ menuItem.text }}</a>
              <!-- Altrimenti -->
              
                
              <a v-else class="nav-link">
                <!-- stampa il text con.. -->
                  {{ menuItem.text }}
                  <!-- Un pulsante -->
                  
              </a>
            </li>
          </ul>
        </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2012-{{ currentYear }} Your Company | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
        </div>
        <div class="col-md-6 text-md-end text-secondary">
          <a href="#"><i class="fa-brans fa-facebook "></i></a>
          <a href="#"><i class="fa-brand fa-instagram "></i></a>
          <a href="#"><i class="fa-brands fa-twitter "></i></a>
          <a href="#"><i class="fa-brands fa-youtube "></i></a>
        </div>
      </div>
    </div>

   </div>

  
    

    
    

   







</template>


<style lang="scss">
.clients img{
  width: 100px;

}

.consulation{
  background-image: url('../assets/img/CTA-seo-1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}


.foot{
  background-color: rgb(239, 237, 237);
}




</style>
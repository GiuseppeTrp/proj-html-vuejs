import { reactive } from 'vue';

export const store = reactive({
  headerCarousel: [
    { img:"../src/assets/img/best-seo-services-slide-1.png" },
    { img:"../src/assets/img/best-seo-services-slide-2.png" },
    { img:"../src/assets/img/best-seo-services-slide-3.png" },
   
  ],

  menuItems: [
    { text: 'Home' },
    { text: 'Who we are' },
    { text: 'What we do' },
    { text: 'Where we work' },
    { text: 'Careers' },
    { text: 'News' }
  ],
  contHero: {
    title1: "SEM Campagins Made",
    title2: "Simple With Avada",
    parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Phasellus eu ornare erat.Curabitur pulvinar elit.",
    button1: " Buy avada now",
    button2: "Contact us"
  },

  jumboCards: [
    {
      icon: "fa fa-solid fa-road fa-lg",
      title: "Establish Goals",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-video fa-lg",
      title: "Work With a Team",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: " fa fa-tint fa-lg",
      title: "Get Result",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ],

  mainCards: [
    {
      icon: "fa fa-solid fa-building fa-lg",
      title: "Google SEO",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-building fa-lg",
      title: "Brand Strategy",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-building fa-lg",
      title: "Local SEO",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      icon: "fa fa-solid fa-building fa-lg",
      title: "SEO Analysis",
      parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    }
  ],

  OurWorkCards: [
    { img:"../src/assets/img/case-study-gallery-3-1-1200x900.jpg" },
    { img:"../src/assets/img/case-study-gallery-2-1200x900.jpg"  },
    { img:"../src/assets/img/case-study-gallery-1-1-1200x900.jpg"  },
    { img:'../src/assets/img/case-study-gallery-4-1-1200x900.jpg'  },
    { img:'../src/assets/img/case-study-gallery-5-1-1200x900.jpg'  },
    { img:'../src/assets/img/case-study-gallery-6-1-1200x900.jpg' }
  ],


  OurPlansCards: [
    { plane: "Standard",
      price: 'fa fa-solid fa-building fa-lg',
      project: "5 Projects",
      storage: "5 GB Storage",
      users: "Unlimited Users",
      priceHtml: '<div class="price price-with-decimal color-price"><span class="currency">$</span><span class="integer-part">19</span><sup class="decimal-part">99</sup><span class="time">monthly</span></div>'

    },
    {
      plane: "Premium",
      price: "fa fa-solid fa-building fa-lg",
      project: "10 Projects",
      storage: "15 GB Storage",
      users: "Unlimited Users",
      priceHtml:'<div class="price price-with-decimal color-price"><span class="currency">$</span><span class="integer-part">29</span><sup class="decimal-part">99</sup><span class="time">monthly</span></div>'
    },
    {
      plane: "Professional",
      price: "fa fa-solid fa-building fa-lg",
      project: "15 Projects",
      storage: "30 GB Storage",
      users: "Unlimited Users",
      priceHtml:'<div class="price color-price"><span class="currency">$</span><span class="integer-part">19</span><sup class="decimal-part">99</sup><span class="time">monthly</span></div>'
    },
    {
      plane: "Extreme",
      price: "fa fa-solid fa-building fa-lg",
      project: "Unlimited Projects",
      storage: "Unlimited Storage",
      users: "Unlimited Users",
      priceHtml:'<div class="price price-with-decimal color-price"><span class="currency">$</span><span class="integer-part">59</span><sup class="decimal-part">99</sup><span class="time">monthly</span></div>'
    }
  ],
  OurNewsCards: [
    { img:'../src/assets/img/related-service-2-320x202.jpg',
      title: 'Why You Need A SEO Agency Now',
      date: "November 1st, 2017",
      parag: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio labore repellat quis iste consequatur minus laboriosam, provident unde consectetur eum reprehenderit. Dolores modi et similique, hic asperiores delectus harum"
      
    },
    { img:'../src/assets/img/related-service-4-320x202.jpg',
    title: 'SEO Tips For Your Startup',
    date: "November 1st, 2017",
    parag: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio labore repellat quis iste consequatur minus laboriosam, provident unde consectetur eum reprehenderit. Dolores modi et similique, hic asperiores delectus harum"
  },
  { img:'../src/assets/img/blog-post-6-320x202.jpg',
  title: 'Image Optimization For Your Site',
  date: "November 1st, 2017",
  parag: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio labore repellat quis iste consequatur minus laboriosam, provident unde consectetur eum reprehenderit. Dolores modi et similique, hic asperiores delectus harum"
  },
  
   ],

  ClientSays:[
    { img:"/src/assets/img/clients_partner_5-200x202.png" },
    { img:"/src/assets/img/clients_partner_6-200x202.png"  },
    { img:"/src/assets/img/clients_partner_1-200x202.png"},
    { img:"/src/assets/img/clients_partner_2-200x202.png" },
    { img:"/src/assets/img/clients_partner_3-200x202.png" },
    { img:"/src/assets/img/clients_partner_4-200x202.png" },


   
   
  ],

 footerItem:
  [
    { text: 'Home' },
    { text: 'Who we are' },
    { text: 'What we do' },
    { text: 'Where we work' },
    { text: 'Careers' },
    { text: 'News' },
    { text: 'Get in Touch Now' }
  ],


  footerIcon:[
    {icon:"fab fa-facebook fa-lg",
      link:"https://www.facebook.com/?locale=it_IT"},

    {icon:"fab fa-instagram fa-lg",
    link:"https://www.instagram.com/"},
    {icon:"fab fa-twitter fa-lg",
    link:"https://twitter.com/i/flow/login"},
    {icon:"fab fa-youtube fa-lg",
    link:"https://www.youtube.com/?hl=it&gl=IT"},






  
  
  ]



 
    

  


 

});




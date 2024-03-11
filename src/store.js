// store.js
import { reactive } from 'vue';

export const store = reactive({
  menuItems: [
    { text: 'Home' },
    { text: 'Who we are'},
    { text: 'What we do'},
    { text: 'Where we work'},
    { text: 'Careers' },
    { text: 'News'}
  ],
  contHero:
    { title1: "SEM Campagins Made",
       title2: "Simple With Avada",
       parag: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Phasellus eu ornare erat.Curabitur pulvinar elit." ,
       button1: " Buy avada now",
       button2: "Contact us"

      },

      
      contCard: [
        {
          icon: "fa fa-solid fa-road fa-lg",
          title: "Establish Goals",
          parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
        {
          icon: "fa fa-solid fa-video fa-lg",
          title: "Work With a Team",
          parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."        },
        {
          icon:"fa fa-solid fa-droplet fa-lg",
          title: "Get Result",
          parag: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."        }
      ]

}




);





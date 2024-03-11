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
  ]
});




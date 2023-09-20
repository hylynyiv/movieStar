import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';  
import MyMovies from './components/MyMovies.vue';
import SearchMovie from './components/SearchMovie.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/Movies', component: MyMovies },
  { path: '/Search', component: SearchMovie}

];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  const app = createApp(App);
  app.use(router);
  app.mount('#app');

// createApp(App).use(router).mount('#app');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import './assets/styles/index.css';

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/cricket', component: () => import('./pages/Cricket.vue') },
  { path: '/sudoku', component: () => import('./pages/Sudoku.vue') },
  { path: '/cipher', component: () => import('./pages/Cipher.vue') },
  { path: '/football', component: () => import('./pages/Football.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);

app.use(router);

app.mount('#app');
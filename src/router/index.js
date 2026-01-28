import Vue from 'vue'
import VueRouter from 'vue-router'
import Valentine from '../views/ValentineConsole.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Valentine',
    component: Valentine
  }
]

const router = new VueRouter({
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';

import Error404 from '@/views/Error404.vue';
import SobreNosotros from '@/views/SobreNosotros.vue';
import RecetasDetalle from '@/views/RecetasDetalle.vue';
import Recetas from '@/views/Recetas.vue';
import RecetasBuscador from '@/views/RecetasBuscador.vue';
import Contacto from '@/views/Contacto.vue';
import Registro from '@/views/Registro.vue';
import Login from '@/views/Login.vue';
import Panel from '@/views/Panel.vue';
import { useAuthStore } from '@/stores/authStore';
import PanelEditar from '@/views/PanelEditar.vue';
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',
      component: ()=>import('@/views/Home.vue'),
      name:'home'
     },
     {
      path:'/sobre-nosotros',
      component: SobreNosotros,
      name:'sobreNosotros'
     },
     {
      path:'/recetas',
      component: Recetas,
      name:'recetas'
     },
     {
      path:'/recetas/buscador',
      component: RecetasBuscador, 
     },
     {
      path:'/recetas/detalle/:slug',
      component: RecetasDetalle,
      name:'recetasDetalle'
     },
     {
      path:'/contacto',
      component: Contacto,
      name:'contacto'
     },
     {
      path:'/registro',
      component: Registro,
      name:'registro'
     },
     {
      path:'/login',
      component: Login,
      name:'login'
     },
     {
      path:'/panel',
      component: Panel,
      name:'panel',
      meta:{
        secure:true,
      }
     },
     {
      path:'/panel/editar/:id',
      component: PanelEditar,
      name:'panel_editar',
      meta:{
        secure:true,
      }
     },
     {
      path:'/:pathMatch(.*)*',
      component: Error404
     }
  ]
})

//guards
router.beforeEach((to, from)=>
{
  let store = useAuthStore();
  if(to.meta.secure)
  {
    //console.log("logueado | página="+to.fullPath);
    store.estasLogueado();
  }
});


export default router

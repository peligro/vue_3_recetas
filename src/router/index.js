//import Home from '@/views/Home.vue'
import Contactanos from '@/views/Contactanos.vue';
import Login from '@/views/Login.vue';
import Panel from '@/views/Panel.vue'
import PanelEditar from '@/views/PanelEditar.vue';
import Recetas from '@/views/Recetas.vue';
import RecetasBuscador from '@/views/RecetasBuscador.vue';
import RecetasDetalle from '@/views/RecetasDetalle.vue';
import Registro from '@/views/Registro.vue';
import SobreNosotros from '@/views/SobreNosotros.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './../stores/authStore';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component:()=>import('@/views/Home.vue'),
      name: 'home',
      //component: Home
    },
    {
      path: '/sobre-nosotros',
      name:'sobreNosotros',
      component: SobreNosotros
    },
    {
      path: '/recetas',
      name:'recetas',
      component: Recetas
    },
    {
      path: '/recetas/buscador',
      name:'recetas-buscador',
      component: RecetasBuscador
    },
    {
      path: '/recetas/detalle/:slug',
      name:'recetasDetalle',
      component: RecetasDetalle
    },
    {
      path: '/contactanos',
      name:'contactanos',
      component: Contactanos
    },
    {
      path: '/registro',
      name:'registro',
      component: Registro
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/panel',
      component: Panel,
      name:'panel',
      meta:{
        secure: true
      }
    },
    {
      path: '/panel/editar/:id',
      component: PanelEditar,
      name:'panel_editar',
      meta:{
        secure: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component:()=>import('@/views/Error404.vue')
    } 
  ]
})

//guards
router.beforeEach((to, from)=>{
  let store = useAuthStore();
  if(to.meta.secure)
    {
      //alert(`${to.fullPath} es una ruta protegida`);
      
      store.estasLogueado();
    }
});

export default router

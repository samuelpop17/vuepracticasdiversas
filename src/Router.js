import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollazComponent from "./components/CollazComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
    {
      path: "/",
      component: HomeComponent,
    },
    {
        path: "/collaz",
        component: CollazComponent,
      },
      {
        path: "/multiplicar",
        component: TablaMultiplicar,
      },
    
    
  ];
  
  //Creamos una constante para el historial y para el array de rutas
  //Dicha constante sera la que utilicemos dentro del main.js
  
  const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
  });
  
  //Por ultimo exportamos la la constante router
  export default router;
  
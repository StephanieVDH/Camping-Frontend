import Vue from "vue";
import Router from "vue-router";
//import HomePage from "@/components/HomePage.vue"; 
import CampingSpots from "@/components/CampingSpots.vue";
import CampingDetails from "@/components/CampingDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // Removes hash (#) from the URL
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: HomePage,
    // },
    // {
    //   path: "/camping-spots",
    //   name: "CampingSpots",
    //   component: CampingSpots,
    // },

    // Route om van overzicht van alle spots naar één specifieke spot te gaan
    {
    path: "/",
    name: "Campingspots",
    component: CampingSpots,
    },
    {
    path: "/campingspots/:id", // Route for details page
    name: "CampingDetails",
    component: CampingDetails,
    props: true, // Pass the route parameters as props
    },

  ],
});
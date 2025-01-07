<template>
  <div id="app"> 

    <ul id="navigation"> Dit is mijn navigatiebar
      <li v-for="(page, index) in pages" :key="index" @click="changePage(page)" style="cursor: pointer;">
        {{ page }}
      </li>
    </ul>
 
    <div> 
      <HomePage v-if="activePage == 'home'"/>
      <CampingSpots v-if="activePage == 'spots'"/>
      <Test1 v-if="activePage == 'test1'" v-on:cp="changePage" /> 
    </div>

  </div>
</template>

<script>
/* eslint-disable */
import HomePage from './components/HomePage.vue';
import Test1 from './components/Test1.vue';
import CampingSpots from './components/CampingSpots.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    Test1,
    CampingSpots
  },

  data() {
      return {
        activePage: 'test1',
        pages: ['home','test1', 'spots']
      }
    },
    methods: {
      changePage(page) {
        console.log("Changing page to: " + page);
        this.activePage = page;
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

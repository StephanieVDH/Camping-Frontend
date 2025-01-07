<template>
    <div class="camping-details">
      <h1>{{ campingSpot.Name }}</h1>
      <img :src="campingSpot.image" :alt="campingSpot.Name" class="camping-image" />
      <p>{{ campingSpot.Description }}</p>
      <p class="camping-price">Price: €{{ campingSpot.price }} per night</p>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  export default {
    name: "CampingDetails",
    props: ["id"], // Receive the id from the route parameters
    data() {
      return {
        campingSpot: null, // Store the camping spot details
      };
    },
    methods: {
      fetchCampingSpot() {
        fetch(`http://localhost:3000/api/campingspots/${this.id}`) // Fetch specific spot details using the id
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            this.campingSpot = data; // Store the fetched data
          })
          .catch((error) => {
            console.error("Error fetching camping spot details:", error);
          });
      },
    },
    mounted() {
      this.fetchCampingSpot(); // Fetch details when the component is mounted
    },
  };
  </script>
  
  <style scoped>
  .camping-details {
    padding: 20px;
    text-align: center;
  }
  .camping-image {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }
  .camping-price {
    color: #555;
    font-size: 18px;
  }
  </style>
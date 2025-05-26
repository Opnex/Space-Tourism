<template>
  <div class="destinations-page">
    <!-- <Navigation /> -->
    
    <div class="background-image">
      <img src="/public/background-destination-desktop.jpg" alt="Space Background" />
    </div>

    <!-- Page Content -->
    <div class="container">
      <h5 class="page-title"><span>01</span>Pick your destination</h5>
      
      <div class="row align-items-center">
        <div class="col-lg-6">
          <img 
            :src="currentDestination.image" 
            :alt="currentDestination.name" 
            class="destination-img"
          />
        </div>

        <div class="col-lg-6">
          <nav class="destination-tabs">
            <button
              v-for="(dest, index) in destinations"
              :key="index"
              @click="setCurrentDestination(dest)"
              :class="{ 'active': currentDestination.name === dest.name }"
            >
              {{ dest.name }}
            </button>
          </nav>

          <div class="destination-info">
            <h2>{{ currentDestination.name }}</h2>
            <p>{{ currentDestination.description }}</p>
            
            <div class="destination-stats">
              <div>
                <span>Avg. distance</span>
                <strong>{{ currentDestination.distance }}</strong>
              </div>
              <div>
                <span>Est. travel time</span>
                <strong>{{ currentDestination.travelTime }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from '@/components/Navbar.vue'

export default {
//   name: 'DestinationView',
//   components: {
//     Navigation
//   },
  data() {
    return {
      currentDestination: {},
      destinations: [
        {
          name: "MOON",
          image: ("/public/image-moon.png"),
          description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travelTime: "3 days"
        },
        {
          name: "MARS",
          image: ("/public/image-mars.png"),
          description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travelTime: "9 months"
        },
        {
          name: "EUROPA",
          image: ("/public/image-europa.png"),
          description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travelTime: "3 years"
        },
        {
          name: "TITAN",
          image: ("/public/image-titan.png"),
          description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travelTime: "7 years"
        }
      ]
    }
  },
  created() {
    this.currentDestination = this.destinations[0];
  },
  methods: {
    setCurrentDestination(dest) {
      this.currentDestination = dest;
    }
  }
}
</script>

<style scoped>
.destinations-page {
  position: relative;
  min-height: 100vh;
  padding-top: 50px;
  color: white;
}

.background-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.page-title span {
  opacity: 0.5;
  margin-right: 1rem;
}

.destination-tabs button {
  background: transparent;
  border: none;
  color: white;
  margin-right: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.destination-tabs button.active {
  border-bottom-color: white;
}

.destination-img {
  max-width: 80%;
  margin-top: 100px;
  animation: fadeIn 0.5s ease-in-out;
}

.destination-stats {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.2);
}

.destination-stats div {
  min-width: 100px;
}

.destination-stats span {
  display: block;
  font-size: 0.875rem;
  letter-spacing: 2px;
  margin-bottom: 0.3rem;
  opacity: 0.8;
}

.destination-stats strong {
  display: block;
  font-size: 1.5rem;
  font-family: 'Bellefair', serif;
  font-weight: 100;
  text-transform: uppercase;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .destination-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .destination-stats strong {
    font-size: 1.5rem;
  }
}
</style>
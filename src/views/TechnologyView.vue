<template>
  <div class="technology-page">
    <div class="background-image">
      <img src="/public/background-technology-desktop.jpg" alt="Technology Background" />
    </div>

    <div class="container">
      <h5 class="page-title"><span>03</span>Space launch 101</h5>
      
      <div class="tech-content-wrapper">
        <!-- Left Column: Number Navigation -->
        <div class="tech-nav-col">
          <div class="tech-nav">
            <button
              v-for="(tech, index) in technologies"
              :key="index"
              @click="setCurrentTechnology(tech)"
              :class="{ 'active': currentTechnology.name === tech.name }"
            >
              {{ index + 1 }}
            </button>
          </div>
        </div>

        <!-- Middle Column: Text Content -->
        <div class="tech-text-col">
          <div class="tech-info">
            <h4 class="tech-terminology">The terminology...</h4>
            <h2 class="tech-name">{{ currentTechnology.name }}</h2>
            <p class="tech-description">{{ currentTechnology.description }}</p>
          </div>
        </div>

        <!-- Right Column: Image -->
        <div class="tech-image-col">
          <img 
            :src="currentTechnology.image" 
            :alt="currentTechnology.name"
            class="tech-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from '@/components/Navbar.vue';

export default {
//   name: 'TechnologyPage',
//   components: { Navigation },
  data() {
    return {
      currentTechnology: {},
      technologies: [
        {
          name: "Launch Vehicle",
          terminology: "Launch Vehicle",
          description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          image: ("/public/image-launch-vehicle-portrait.jpg")
        },
        {
          name: "Spaceport",
          terminology: "Spaceport",
          description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. This spaceport is the first of its kind, designed to accommodate the immense size of our WEB-X rocket.",
          image: ("/public/image-spaceport-portrait.jpg")
        },
        {
          name: "Space Capsule",
          terminology: "Space Capsule",
          description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. The WEB-X capsule is designed to carry humans and cargo safely back to Earth.",
          image: ("/public/image-space-capsule-portrait.jpg")
        }
      ]
    }
  },
  created() {
    this.currentTechnology = this.technologies[0]; // Set default
  },
  methods: {
    setCurrentTechnology(tech) {
      this.currentTechnology = tech;
    }
  }
}
</script>

<style scoped>
.technology-page {
  position: relative;
  min-height: 100vh;
  padding-top: 100px;
  color: white;
  overflow: hidden;
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

.page-title {
  /* margin-bottom: 3rem; */
  padding-left: 2rem;
}

.page-title span {
  opacity: 0.5;
  margin-right: 1rem;
}

.tech-content-wrapper {
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding-left: 1rem;
}

.tech-nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-nav button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-family: 'Bellefair', serif;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;
}

.tech-nav button.active {
  background: white;
  color: black;
}

/* .tech-text-col {
  max-width: 500px;
} */

.tech-terminology {
  font-size: 1.5rem;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: #D0D6F9;
  margin-bottom: 2rem;
}

.tech-name {
  font-family: 'Bellefair', serif;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 1rem 0;
}

.tech-description {
  line-height: 1.7;
  color: #D0D6F9;
}

.tech-image-col {
  display: flex;
  justify-content: flex-end;
}

.tech-image {
  max-height: 90vh;
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
  .tech-content-wrapper {
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto;
  }

  .tech-image-col {
    grid-column: span 2;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .tech-content-wrapper {
    grid-template-columns: 1fr;
    padding-left: 0;
  }

  .tech-nav {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .tech-text-col {
    text-align: center;
    max-width: 100%;
    padding: 0 1rem;
  }

  .tech-image {
    max-height: 300px;
    margin-top: 2rem;
  }
}
</style>
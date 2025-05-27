<template>
  <div class="crew-page">
    <!-- <Navigation /> -->

    <div class="background-image">
      <img src="/public/background-crew-desktop.jpg" alt="Crew Background" />
    </div>

    <!-- Page Content -->
    <div class="container">
      <h5 class="page-title"><span>02</span>Meet your crew</h5>

      <div class="row align-items-center">
        <div class="col-lg-6 crew-text">
          <div class="crew-info">
            <h4 class="crew-role">{{ currentCrewMember.role }}</h4>
            <h2 class="crew-name">{{ currentCrewMember.name }}</h2>
            <p class="crew-bio">{{ currentCrewMember.bio }}</p>
          </div>

          <!-- Crew Navigation Dots -->
          <div class="crew-nav">
            <button
              v-for="(member, index) in crewMembers"
              :key="index"
              @click="setCurrentCrewMember(member)"
              :class="{ active: currentCrewMember.name === member.name }"
              aria-label="Select crew member"
            ></button>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <img :src="currentCrewMember.image" :alt="currentCrewMember.name" class="crew-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from '@/components/Navbar.vue';

export default {
//   name: 'CrewPage',
//   components: { Navigation },
  data() {
    return {
      currentCrewMember: {},
      crewMembers: [
        {
          name: "Douglas Hurley",
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          image: ("./public/img/image-douglas-hurley.png")
        },

        {
          name: "Mark Shuttleworth",
          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          image: ("./public/img/image-mark-shuttleworth.png")
        },

        {
          name: "Victor Glover",
          role: "Pilot",
          bio: "Victor Jerome Glover Jr. is a NASA astronaut of the class of 2013. He is a commander in the United States Navy and has served as a test pilot.",
          image: ("./public/img/image-victor-glover.png")
        },

        {
          name: "Anousheh Ansari",
          role: "Flight Engineer",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
          image: ("./public/img/image-anousheh-ansari.png")
        },
      ]
    }
  },
  created() {
    this.currentCrewMember = this.crewMembers[0];
    // console.log('Initial crew member:', this.currentCrewMember);
  },
  methods: {
    setCurrentCrewMember(member) {
      this.currentCrewMember = member;
    }
  }
}
</script>

<style scoped>
.crew-page {
  position: relative;
  min-height: 100vh;
  padding-top: 100px;
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

.crew-role {
  font-size: 2rem;
  opacity: 0.5;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.crew-name {
  font-family: 'Bellefair', serif;
  font-size: 3.5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.crew-image {
  max-height: 70vh;
  animation: float 6s ease-in-out infinite;
}

.crew-nav {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}

.crew-nav button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.crew-nav button.active {
  background: white;
}

.crew-nav button:hover {
  background: rgba(255, 255, 255, 0.5);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Mobile Layout */
@media (max-width: 992px) {
  .crew-text {
    order: 2;
    text-align: center;
  }

  .crew-image {
    order: 1;
    max-height: 50vh;
    margin-bottom: 2rem;
  }

  .crew-nav {
    justify-content: center;
  }
}
</style>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img src="/src/assets/shared/logo.svg" alt="Space Tourism Logo">
      </router-link>

      <button 
        class="navbar-toggler" 
        type="button" 
        @click="toggleMenu"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div :class="['navbar-collapse', { 'show': isMenuOpen }]" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, index) in navItems" :key="index">
            <router-link 
              :to="item.path" 
              class="nav-link"
              :class="{ 'active': $route.path === item.path }"
            >
              <span class="nav-number">0{{ index }}</span> {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isMenuOpen: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'Destination', path: '/destination' },
        { name: 'Crew', path: '/crew' },
        { name: 'Technology', path: '/technology' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>

<style scoped>
.navbar {
  padding: 2rem 0;
}

.navbar-brand img {
  height: 40px;
}

.nav-link {
  color: white !important;
  letter-spacing: 2px;
  margin: 0 1rem;
  position: relative;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 3px;
  background: white;
}

.nav-number {
  font-weight: bold;
  margin-right: 0.5rem;
}

@media (max-width: 992px) {
  .navbar-collapse {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 2rem;
    margin-top: 1rem;
  }
}
</style>
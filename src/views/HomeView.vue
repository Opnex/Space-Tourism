<template>
  <div class="home-page">
    <!-- <Navigation /> -->

    <div class="background-image">
      <img src="/assets/home/background-home-desktop.jpg" alt="Space Background" />
    </div>
    <!-- Content -->
    <div class="container">
      <div class="row align-items-center min-vh-100">
        <div class="col-md-6">
          <h5 class="text-uppercase text-light">So, you want to travel to</h5>
          <h1 class="display-1 text-white fw-bold">Space</h1>
          <p class="text-light">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div class="col-md-6 text-center">
          <button class="btn btn-light rounded-circle explore-btn">Explore</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navigation from '@/components/Navbar.vue'

export default {
  //   name: 'HomeView',
  //   components: {
  //     Navigation,
  //   },
}
</script>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url('@/assets/home-background.jpg') no-repeat center center; */
  background-size: cover;
  z-index: -1;
}

.explore-btn {
  width: 150px;
  height: 150px;
  font-size: 1.5rem;
}
</style>

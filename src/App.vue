<template>
<Navigation />
<router-view />
</template>

<script>

import Navigation from '@/components/Navbar.vue';
  export default {
    name: 'App',
    components: {Navigation}
    
  }
</script>

<style>
/* Global styles */
@import "bootstrap/dist/css/bootstrap.min.css";
body {
  background-color: #0B0D17;
  color: white;
  font-family: 'Barlow', sans-serif;
}
</style>
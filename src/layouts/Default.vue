<template>
  <div>
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  },
}
</script>
<style lang='scss'>
  @import '../assets/scss/app'; 
</style>

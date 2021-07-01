<template>
  <div>
    <Layout>
      <section class="hero">
        <div class="hero-body">
          <div class="hero-text">
            <h1 class="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <p class="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vitae!
            </p>
          </div>
          <div class="hero-img">
            <lottie :options="defaultOptions" />
          </div>
        </div>
      </section>
    </Layout>
  </div>
</template>
<script>
import Lottie from "vue-lottie";
import HomeAnimation from '@/lottie/src/hero.json'
export default {
  data(){
    return {
      defaultOptions: {
        animationData: HomeAnimation
      }
    }
  },
  metaInfo: {
    title: 'Accueil'
  },
  components: {
    Lottie
  }
}
</script>
<style lang='scss' scoped>
  @import '../assets/scss/hero'; 
  @import '../assets/scss/title'; 
</style>

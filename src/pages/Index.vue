<template>
  <div>
    <Layout>
      <g-image alt="favicon" src="~/favicon.png" width="135" />
    </Layout>
    <section class="hero">
      <div class="hero-body">
        <div class="hero-text">
          <p class="title">
            Lorem, ipsum dolor.
          </p>
          <p class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vitae!
          </p>
        </div>
        <div class="hero-img">
          <lottie
            :options="defaultOptions"
          />
        </div>
      </div>
    </section>
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
</style>

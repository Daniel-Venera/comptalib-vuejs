<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="section-body" :class="{'section-body--left': !isImageRight}">
          <div class="section-text">
            <p class="title">
              Lorem, ipsum dolor.
            </p>
            <p class="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vitae!
            </p>
            <b-button tag='a' href='#' type="is-primary">Action</b-button>
          </div>
          <div class="section-imgCtn">
            <div class="section-img"></div>
          </div>
        </div>  
        <b-button type="is-success" @click='moveImage'>Put the image on the {{imgOtherPosition}} </b-button>
      </div>
    </section>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'About'
  },
  data(){
    return {
      isImageRight: true
    }
  },
  computed: {
    imgOtherPosition(){
      return this.isImageRight ? 'left' : 'right'
    }
  },
  methods:{
    moveImage(){
      this.isImageRight = !this.isImageRight    
    }  
  }
}
</script>
<style lang='scss' scoped>
  @import '../assets/scss/section'; 
  @import '../assets/scss/button'; 
</style>

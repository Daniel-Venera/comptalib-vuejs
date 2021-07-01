<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="section-body" :class='imgPositioning'>
          <div class="section-text">
            <p class="title">
              Lorem, ipsum dolor.
            </p>
            <p class="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, vitae!
            </p>
            <b-button type="is-link" tag='a' href='#'>Action</b-button>
          </div>
          <div class="section-imgCtn">
            <div class="section-img" style='background: url(../assets/img/team.jpg) center center no-repeat'>
            </div>  
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
    title: 'About us'
  },
  data(){
    return {
      imgPosition: 'right'
    }
  },
  computed: {
    imgPositioning(){
      return this.imgPosition == 'right' ? '' : 'section-body--left'
    },
    imgOtherPosition(){
      return this.imgPosition == 'right' ? 'left' : 'right'
    }
  },
  methods:{
    moveImage(){
      this.imgPosition = this.imgPosition == 'right' ? 'left' : 'right'    
    }  
  }
}
</script>
<style lang='scss' scoped>
@import '../assets/scss/section'; 
</style>

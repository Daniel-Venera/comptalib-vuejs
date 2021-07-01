<template>
  <div>
    <Layout>
      <!-- <g-image alt="favicon" src="~/favicon.png" width="135" /> -->
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
            <lottie
              :options="defaultOptions"
            />
          </div>
        </div>
      </section>
      <!-- <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus placeat, nam corrupti veritatis nemo omnis? Inventore eum dicta nulla facilis deserunt accusantium ab animi ea nostrum nesciunt ipsum harum asperiores soluta accusamus quibusdam consequatur maiores voluptatibus nihil rerum possimus, sit nemo! Possimus, cum modi alias a magni corrupti hic error dolorum eum nulla consequuntur eaque, tempora molestias quia nobis nemo. Ea neque quos hic, maxime quaerat, dolor veritatis tempora, eum dolorem odio magnam quas repudiandae error assumenda eveniet aut quasi laudantium asperiores libero illo autem quidem. Officiis non enim autem, magnam error impedit? Ad et at similique laborum reprehenderit recusandae saepe qui ab dolorum nam voluptatem dicta quibusdam perferendis debitis consequatur hic, molestias laboriosam in voluptate cum quasi sed libero consectetur. Error hic modi, quas porro unde similique id? Quidem exercitationem nam totam excepturi voluptatum tenetur expedita recusandae cumque! Possimus perspiciatis vero consectetur temporibus totam, vitae voluptate delectus, praesentium neque quia sit ipsa dicta minima blanditiis dolores commodi fuga labore sapiente voluptates amet, ratione quisquam deserunt inventore. Magni quibusdam praesentium fuga. Sint, laudantium neque perferendis, beatae ratione sunt illo doloremque blanditiis nam consequatur quas molestiae eum tempore in numquam dolores a ex! Illo exercitationem fugiat eos ullam excepturi quod, harum minima aut ad doloribus in maiores, dignissimos velit repellendus! Delectus consequuntur facilis natus totam debitis fuga, est dignissimos mollitia consectetur sequi accusantium sunt vel rem eveniet accusamus sint voluptas corporis expedita in similique veniam at distinctio. Nihil, pariatur. Assumenda, consequatur optio. Doloremque, asperiores. Enim architecto incidunt aspernatur harum, cum repellendus perferendis tenetur! Architecto autem rem aspernatur repellendus repellat dignissimos necessitatibus, debitis, repudiandae labore explicabo vitae, voluptatibus nulla! Voluptas hic soluta alias dignissimos, excepturi consequuntur dolor et praesentium necessitatibus similique natus, quisquam unde eaque dicta autem quibusdam quod quis iste, doloribus voluptate ex recusandae velit deleniti adipisci. Nisi, iure quo.</div> -->
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

<template>
  <div>
    <div class="container">
      <b-navbar>
        <template #brand>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="../assets/img/logo.svg" alt="Comptalib logo">
          </b-navbar-item>
        </template> 
        <template #start>
          <b-navbar-item tag="router-link" :to="{ path: '/' }" >
            Home
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/about' }" >
            About
          </b-navbar-item>
          <!-- <b-navbar-dropdown label="Info">
            <b-navbar-item href="#">
                About
            </b-navbar-item>
            <b-navbar-item href="#">
                Contact
            </b-navbar-item>
          </b-navbar-dropdown> -->
        </template>
        <template #end>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>  
    </div>
    <slot />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Made with <app-icon icon="heart" size="lg" class="footer-icon"></app-icon> by <a class="footer-link" href="https://www.linkedin.com/in/daniel-venera/">Daniel Venera</a>
        </p>
      </div>
    </footer>
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang='scss'>
#app {
  position: relative;
  min-height: 100vh;
  &::after{
    content: '';
    height: 84px;
    display: block;
  }
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.nav__link {
  margin-left: 20px;
}
.footer{
  background-color: #edf0f8;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 30px;
  &-icon{
    padding: 0 4px;
  }
  &-link {
    color: #1656ff;
  }
}
</style>

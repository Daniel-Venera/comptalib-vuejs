module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
  })
  api.createPages(({ createPage }) => {
    createPage({
      path: '/about',
      component: './src/pages/About.vue'
    })
  })
}

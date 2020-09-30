var app = new Vue({
  el: '#app',
  data: {
    content: 'hello world'
  }
})

// 2s后，将 'hello world' 改为 'bye world'
setTimeout(function() {
  console.log(app.$data)
  app.$data.content  = 'bye world'
}, 2000)
var app = new Vue({
  el: '.container',
  data() {
    return {
      items: [
        {
          title: '纯文字',
          HTML: '<div id="app"> {{ content }} </div>',
          code:
`<div id="app"> {{ content }} </div>

var app = new Vue({
  el: '#app',
  data: {
    content: 'hello world'
  }
})`
        }
      ]
    }
  }
})
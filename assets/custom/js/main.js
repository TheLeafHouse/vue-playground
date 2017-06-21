Vue.component('playgroundheader', {
  props: ['title'],
  template: '<h1>{{title}}</h1>'
})

var app = new Vue({
  el: '#root'
});

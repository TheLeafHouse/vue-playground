Vue.component('playgroundnotification', {
  props: ['title'],
  template: `
  <div class="notification is-info">
    <button class="delete"></button>
    <h3>{{title}}</h3>
    <p><slot></slot></p>
  </div>
  `
})

var app = new Vue({
  el: '#root'
});

Vue.component('playgroundnotification', {
  props: ['title'],
  data() {
    return {
      isVisable: true
    }
  },
  template: `
  <div class="notification is-info" v-show="isVisable">
    <button class="delete"></button>
    <h3>{{title}}</h3>
    <p><slot></slot></p>
  </div>
  `
})

var app = new Vue({
  el: '#root'
});

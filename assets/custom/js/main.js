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
    <h4>{{title}}</h4>
    <p><slot></slot></p>
  </div>
  `
})

var app = new Vue({
  el: '#root',
  data: {
    imageVisible: false,
    imageHeaderVisible: true,
    imageSubeaderVisible: true,
    items: [
      {
        imagelink: '',
        imagealt: '1',
        imageheader: 'Hallo',
        imagesubheader: 'Sub Sub'
      }
    ]
  }
});

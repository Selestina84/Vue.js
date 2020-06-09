Vue.filter('sliceTwo',(value)=>{
  if(!value) return ''
  value=value.toString()
  return value.split('').reverse().join('')
})
new Vue ({
  el: '#app',
  data: {
    input: 'message'
  },
  methods: {

  },
  filters: {
    lovercase(value){
      return value.toLowerCase()
    }
  }
})
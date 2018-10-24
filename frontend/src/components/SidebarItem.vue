<script>
// Define a new component called SidebarItem
Vue.component('SidebarItem', {
  props: ['name', 'path'],
  template: '<div><a href="{{ }}">{{ name }}</a></div>'
})
</script>

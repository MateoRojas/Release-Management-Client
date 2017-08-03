<template>
  <div class="summary">
    <search></search>
    <list></list>
  </div>
</template>

<script>
import Search from './Filter'
import List from './Table'

export default {
  name: 'summary',
  data () {
    return {
    }
  },
  components: {
    'search':Search,
    'list':List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

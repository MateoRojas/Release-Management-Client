<template>
  <div class="alert">
    <div id="alert">
      <div v-if="type == 0 && show" class="message success" data-component="message">
        {{ message }}
        <span class="close small"></span>
      </div>
      <div v-if="type == 1 && show" class="message warning">
        {{ message }}
        <span class="close small"></span>
      </div>
      <div v-if="type == 2 && show" class="message error">
        {{ message }}
        <span class="close small"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['message', 'type', 'show'],
  data () {
    return {
    }
  },
  methods : {
    // close : function(){
    //   this.show = false;
    //   this.message = '';
    //   this.type = 3;
    // }
  }
}
</script>

<style scoped>
.alert {
  width:500px;
  justify-content:center;
  margin:auto;
}

</style>
